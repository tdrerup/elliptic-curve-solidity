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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDealState = exports.getDealInfo = exports.wait = void 0;
const dealstates_1 = require("./dealstates");
const delay_1 = __importDefault(require("delay"));
function wait(options) {
    return __asyncGenerator(this, arguments, function* wait_1() {
        const { client, dealCid, controls } = options;
        const { step } = controls;
        const task = yield __await(yield* __asyncDelegator(__asyncValues(step({
            message: "Waiting for deal to finish..."
        }))));
        const state = yield __await(yield* __asyncDelegator(__asyncValues(task.declare({ identifier: "Deal State" }))));
        try {
            yield __await(yield* __asyncDelegator(__asyncValues(waitForDealToFinish(dealCid, client, state))));
            yield __await(yield* __asyncDelegator(__asyncValues(task.succeed())));
        }
        catch (error) {
            yield __await(yield* __asyncDelegator(__asyncValues(task.fail({ error }))));
        }
    });
}
exports.wait = wait;
function getDealInfo(dealCid, client) {
    return __awaiter(this, void 0, void 0, function* () {
        const dealCidParameter = {
            "/": dealCid.toString()
        };
        const dealInfo = yield client.client.getDealInfo(dealCidParameter);
        return dealInfo;
    });
}
exports.getDealInfo = getDealInfo;
function getDealState(dealInfo, client) {
    return __awaiter(this, void 0, void 0, function* () {
        const dealState = yield client.client.getDealStatus(dealInfo.State);
        return dealState;
    });
}
exports.getDealState = getDealState;
function waitForDealToFinish(dealCid, client, task) {
    return __asyncGenerator(this, arguments, function* waitForDealToFinish_1() {
        const maxRetries = 600;
        const intervalSeconds = 1;
        for (let retries = 0; retries < maxRetries; retries++) {
            yield __await(delay_1.default(intervalSeconds * 1000));
            const dealInfo = yield __await(getDealInfo(dealCid, client));
            const state = yield __await(getDealState(dealInfo, client));
            yield __await(yield* __asyncDelegator(__asyncValues(task.update({ payload: state }))));
            if (state === "StorageDealActive") {
                yield __await(yield* __asyncDelegator(__asyncValues(task.resolve({
                    resolution: state,
                    payload: state
                }))));
                return yield __await(void 0);
            }
            if (dealstates_1.terminalStates.includes(state)) {
                yield __await(yield* __asyncDelegator(__asyncValues(task.resolve({
                    resolution: state,
                    payload: state
                }))));
                throw new Error(`Deal failed: ${dealInfo.Message}`);
            }
        }
        throw new Error(`Could not finish deal within ${maxRetries * intervalSeconds} seconds`);
    });
}
//# sourceMappingURL=wait.js.map