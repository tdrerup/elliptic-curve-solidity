"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
exports.ErrorController = void 0;
const types_1 = require("../types");
const BaseController_1 = require("./BaseController");
const decorators_1 = require("./decorators");
class ErrorController extends BaseController_1.BaseController {
    constructor(options) {
        const { parent } = options, superOptions = __rest(options, ["parent"]);
        super(superOptions);
        this.children = [];
        if (parent) {
            this.parent = parent;
        }
        // so we can pass these around as functions
        this.fail = this.fail.bind(this);
        this.abort = this.abort.bind(this);
        this.stop = this.stop.bind(this);
    }
    fail({ error, cascade = true } = {}) {
        return __asyncGenerator(this, arguments, function* fail_1() {
            // stop all children
            for (const child of this.children) {
                yield __await(yield* __asyncDelegator(__asyncValues(child.stop())));
            }
            yield yield __await(this.emit({
                type: "fail",
                error
            }));
            this._state = types_1.State.Error;
            // propagate to parent
            if (this.parent && cascade) {
                yield __await(yield* __asyncDelegator(__asyncValues(this.parent.abort({ cascade }))));
            }
        });
    }
    abort({ cascade = true } = {}) {
        return __asyncGenerator(this, arguments, function* abort_1() {
            // stop all children
            for (const child of this.children) {
                yield __await(yield* __asyncDelegator(__asyncValues(child.stop())));
            }
            yield yield __await(this.emit({
                type: "abort"
            }));
            this._state = types_1.State.Error;
            // propagate to parent
            if (this.parent && cascade) {
                yield __await(yield* __asyncDelegator(__asyncValues(this.parent.abort({ cascade }))));
            }
        });
    }
    stop({} = {}) {
        return __asyncGenerator(this, arguments, function* stop_1() {
            // stop all children
            for (const child of this.children) {
                yield __await(yield* __asyncDelegator(__asyncValues(child.stop())));
            }
            yield yield __await(this.emit({
                type: "stop"
            }));
        });
    }
}
__decorate([
    decorators_1.validStates([types_1.State.Active])
], ErrorController.prototype, "fail", null);
__decorate([
    decorators_1.validStates([types_1.State.Active])
], ErrorController.prototype, "abort", null);
__decorate([
    decorators_1.validStates([types_1.State.Active]),
    decorators_1.transitionToState(types_1.State.Error)
], ErrorController.prototype, "stop", null);
exports.ErrorController = ErrorController;
//# sourceMappingURL=ErrorController.js.map