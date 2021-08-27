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
const iter_tools_1 = require("iter-tools");
const control_1 = require("../../lib/control");
describe("StepsController", () => {
    describe("fail()", () => {
        it("should propagate to all child tasks", () => __awaiter(void 0, void 0, void 0, function* () {
            const runTasks = function () {
                return __asyncGenerator(this, arguments, function* () {
                    const task = new control_1.StepsController({ scope: ["test"] });
                    yield __await(yield* __asyncDelegator(__asyncValues(task.begin())));
                    const subtask = yield __await(yield* __asyncDelegator(__asyncValues(task.step({ identifier: "a" }))));
                    yield __await(yield* __asyncDelegator(__asyncValues(task.step({ identifier: "b" }))));
                    yield __await(yield* __asyncDelegator(__asyncValues(subtask.step({ identifier: "a/a" }))));
                    yield __await(yield* __asyncDelegator(__asyncValues(task.fail())));
                });
            };
            const events = yield iter_tools_1.asyncToArray(runTasks());
            const expectedEvents = [
                { type: "begin", scope: ["test"] },
                { type: "step", message: "a", scope: ["test", "a"] },
                { type: "step", message: "b", scope: ["test", "b"] },
                { type: "step", message: "a/a", scope: ["test", "a", "a/a"] },
                { type: "stop", scope: ["test", "a", "a/a"] },
                { type: "stop", scope: ["test", "a"] },
                { type: "stop", scope: ["test", "b"] },
                { type: "fail", scope: ["test"] }
            ];
            expect(events).toEqual(expectedEvents);
        }));
        it("should propagate to parent task", () => __awaiter(void 0, void 0, void 0, function* () {
            const runTasks = function () {
                return __asyncGenerator(this, arguments, function* () {
                    const task = new control_1.StepsController({ scope: ["test"] });
                    yield __await(yield* __asyncDelegator(__asyncValues(task.begin())));
                    const subtask = yield __await(yield* __asyncDelegator(__asyncValues(task.step({ identifier: "a" }))));
                    yield __await(yield* __asyncDelegator(__asyncValues(subtask.fail())));
                });
            };
            const events = yield iter_tools_1.asyncToArray(runTasks());
            const expectedEvents = [
                { type: "begin", scope: ["test"] },
                { type: "step", message: "a", scope: ["test", "a"] },
                { type: "fail", scope: ["test", "a"] },
                { type: "abort", scope: ["test"] }
            ];
            expect(events).toEqual(expectedEvents);
        }));
        it("should propagate to sibling tasks", () => __awaiter(void 0, void 0, void 0, function* () {
            const runTasks = function () {
                return __asyncGenerator(this, arguments, function* () {
                    const task = new control_1.StepsController({ scope: ["test"] });
                    yield __await(yield* __asyncDelegator(__asyncValues(task.begin())));
                    const subtask = yield __await(yield* __asyncDelegator(__asyncValues(task.step({ identifier: "a" }))));
                    yield __await(yield* __asyncDelegator(__asyncValues(task.step({ identifier: "b" }))));
                    yield __await(yield* __asyncDelegator(__asyncValues(subtask.fail())));
                });
            };
            const events = yield iter_tools_1.asyncToArray(runTasks());
            const expectedEvents = [
                { type: "begin", scope: ["test"] },
                { type: "step", message: "a", scope: ["test", "a"] },
                { type: "step", message: "b", scope: ["test", "b"] },
                { type: "fail", scope: ["test", "a"] },
                { type: "stop", scope: ["test", "b"] },
                { type: "abort", scope: ["test"] }
            ];
            expect(events).toEqual(expectedEvents);
        }));
    });
});
//# sourceMappingURL=StepsController.test.js.map