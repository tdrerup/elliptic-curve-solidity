"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preserve = void 0;
const control_1 = require("./control");
const TruffleError = require("@truffle/error");
function preserve(options) {
    return __asyncGenerator(this, arguments, function* preserve_1() {
        const { request, recipes } = options;
        const { recipe } = request;
        if (!("settings" in request)) {
            request.settings = new Map([]);
        }
        if (!("inputs" in request)) {
            request.inputs = {};
        }
        const inputLabels = Object.keys(request.inputs);
        /*
         * planning
         * (use BFS)
         */
        const queue = [recipe];
        let plan = [];
        while (queue.length > 0) {
            const current = queue.shift();
            plan.unshift(current);
            for (const label of current.inputLabels) {
                const plugin = getRecipeForLabel(label, inputLabels, recipes);
                if (plugin)
                    queue.push(plugin);
            }
        }
        // Filter out duplicates afterwards so that we only keep the first occurrance of the plugin
        plan = plan.filter((plugin, index) => index === plan.findIndex(other => other.name === plugin.name));
        /*
         * execution
         */
        // Populate initial preserve inputs with provided inputs
        let inputs = Object.assign({}, request.inputs);
        for (const recipe of plan) {
            const settings = request.settings.get(recipe.name) || {};
            const { name } = recipe;
            const method = recipe.execute.bind(recipe);
            const results = yield __await(yield* __asyncDelegator(__asyncValues(control_1.control({ name, method }, { inputs, settings }))));
            // Add all result key + values to the inputs object for the next plugin
            for (const [key, value] of Object.entries(results || {})) {
                inputs[key] = value;
            }
        }
    });
}
exports.preserve = preserve;
const getRecipeForLabel = (label, inputLabels, plugins) => {
    // If the label exists in the initial inputLabels it is provided without recipe
    if (inputLabels.includes(label))
        return;
    const pluginsForLabel = plugins
        .filter(plugin => plugin.outputLabels.includes(label));
    if (pluginsForLabel.length === 0) {
        throw new TruffleError(`No plugins found that output the label "${label}".`);
    }
    if (pluginsForLabel.length > 1) {
        console.warn(`Warning: multiple plugins found that output the label "${label}".`);
    }
    const [plugin] = pluginsForLabel;
    return plugin;
};
//# sourceMappingURL=preserve.js.map