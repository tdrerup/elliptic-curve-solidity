"use strict";
/**
 * @module @truffle/preserve-to-buckets
 */ /** */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.Recipe = void 0;
const Preserve = __importStar(require("@truffle/preserve"));
const clear_1 = require("./clear");
const connect_1 = require("./connect");
const upload_1 = require("./upload");
// @textile/hub requires a WebSocket API to be available on the global object
if (typeof global !== "undefined")
    global.WebSocket = require('isomorphic-ws');
class Recipe {
    constructor(options) {
        this.name = "@truffle/preserve-to-buckets";
        this.inputLabels = ["fs-target"];
        this.outputLabels = ["ipfs-cid"];
        this.key = options.key;
        this.secret = options.secret;
        this.bucketName = options.bucketName;
    }
    execute(options) {
        return __asyncGenerator(this, arguments, function* execute_1() {
            const { inputs, controls } = options;
            const { update } = controls;
            const { key, secret, bucketName } = this;
            const target = Preserve.Targets.normalize(inputs["fs-target"]);
            if (Preserve.Targets.Sources.isContent(target.source)) {
                throw new Error("@truffle/preserve-to-buckets only supports preserving directories.");
            }
            yield __await(yield* __asyncDelegator(__asyncValues(update({ message: "Preserving to Textile Buckets..." }))));
            const { buckets, bucketKey } = yield __await(yield* __asyncDelegator(__asyncValues(connect_1.connect({ key, secret, bucketName, controls }))));
            yield __await(yield* __asyncDelegator(__asyncValues(clear_1.clear({ buckets, bucketKey, controls }))));
            const { cid } = yield __await(yield* __asyncDelegator(__asyncValues(upload_1.upload({ target, buckets, bucketKey, controls }))));
            return yield __await({ "ipfs-cid": cid });
        });
    }
}
exports.Recipe = Recipe;
Recipe.help = "Preserve to Textile Buckets";
//# sourceMappingURL=index.js.map