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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const cids_1 = __importDefault(require("cids"));
const search_1 = require("./search");
const iter_tools_1 = require("iter-tools");
function upload(options) {
    return __asyncGenerator(this, arguments, function* upload_1() {
        var e_1, _a;
        const { target, buckets, bucketKey, controls } = options;
        const { step } = controls;
        const { source } = target;
        const task = yield __await(yield* __asyncDelegator(__asyncValues(step({
            message: "Uploading..."
        }))));
        // depth-first search to add files to IPFS before parent directories
        const data = yield __await(iter_tools_1.asyncToArray(search_1.search({ source })));
        // define a dictionary of values for CIDs that are resolved asynchronously
        const values = {};
        values.root = yield __await(yield* __asyncDelegator(__asyncValues(task.declare({ identifier: "Root CID" }))));
        for (const { path } of data) {
            values[path] = yield __await(yield* __asyncDelegator(__asyncValues(values.root.extend({ identifier: path }))));
        }
        const results = buckets.pushPaths(bucketKey, data);
        try {
            try {
                for (var results_1 = __asyncValues(results), results_1_1; results_1_1 = yield __await(results_1.next()), !results_1_1.done;) {
                    const result = results_1_1.value;
                    const { path, cid } = result;
                    const value = values[path];
                    if (value) {
                        yield __await(yield* __asyncDelegator(__asyncValues(value.resolve({
                            resolution: { cid },
                            payload: cid.toString()
                        }))));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (results_1_1 && !results_1_1.done && (_a = results_1.return)) yield __await(_a.call(results_1));
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        catch (error) {
            yield __await(yield* __asyncDelegator(__asyncValues(task.fail({ error }))));
        }
        // The actual directory is not included in buckets' results, so we have to
        // query to get its CID / info
        try {
            const root = yield __await(buckets.root(bucketKey));
            const cid = new cids_1.default(root.path.split("/").pop());
            yield __await(yield* __asyncDelegator(__asyncValues(values.root.resolve({
                resolution: { cid },
                payload: root.thread
            }))));
            yield __await(yield* __asyncDelegator(__asyncValues(task.succeed())));
            return yield __await(Object.assign(Object.assign({}, root), { cid }));
        }
        catch (error) {
            yield __await(yield* __asyncDelegator(__asyncValues(values.root.fail({ error }))));
        }
    });
}
exports.upload = upload;
//# sourceMappingURL=upload.js.map