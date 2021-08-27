"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.run = exports.control = void 0;
const controllers_1 = require("./controllers");
const types_1 = require("./types");
function control(controlOptions, methodOptions) {
    return __asyncGenerator(this, arguments, function* control_1() {
        const { name, method } = controlOptions;
        const scope = [name || ""];
        const controller = new controllers_1.StepsController({ scope });
        const controls = {
            update: controller.update,
            declare: controller.declare,
            step: controller.step
        };
        yield __await(yield* __asyncDelegator(__asyncValues(controller.begin())));
        try {
            const completeMethodOptions = Object.assign(Object.assign({}, methodOptions), { controls });
            const result = yield __await(yield* __asyncDelegator(__asyncValues(method(completeMethodOptions))));
            yield __await(yield* __asyncDelegator(__asyncValues(controller.succeed({ result }))));
            // check for error state (in case of cascaded failures)
            if (controller.state !== types_1.State.Done) {
                return yield __await(void 0);
            }
            return yield __await(result);
        }
        catch (error) {
            yield __await(yield* __asyncDelegator(__asyncValues(controller.fail({ error }))));
            return yield __await(void 0);
        }
    });
}
exports.control = control;
const run = (controlOptions, methodOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const generator = control(controlOptions, methodOptions);
    while (true) {
        const { done, value } = yield generator.next();
        if (done) {
            return value;
        }
    }
});
exports.run = run;
//# sourceMappingURL=control.js.map