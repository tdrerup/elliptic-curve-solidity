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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
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
exports.StepsController = void 0;
const ErrorController_1 = require("./ErrorController");
const ValueResolutionController_1 = require("./ValueResolutionController");
const types_1 = require("../types");
const decorators_1 = require("./decorators");
class StepsController extends ErrorController_1.ErrorController {
    constructor(options) {
        const superOptions = __rest(options, []);
        super(superOptions);
        // so we can pass these around as functions
        this.begin = this.begin.bind(this);
        this.succeed = this.succeed.bind(this);
        this.update = this.update.bind(this);
        this.declare = this.declare.bind(this);
        this.step = this.step.bind(this);
    }
    begin() {
        return __asyncGenerator(this, arguments, function* begin_1() {
            yield yield __await(this.emit({
                type: "begin"
            }));
        });
    }
    succeed({ result, message } = {}) {
        return __asyncGenerator(this, arguments, function* succeed_1() {
            yield yield __await(this.emit({
                type: "succeed",
                result,
                message
            }));
        });
    }
    update({ message }) {
        return __asyncGenerator(this, arguments, function* update_1() {
            yield yield __await(this.emit({
                type: "update",
                message
            }));
        });
    }
    declare({ identifier, message }) {
        return __asyncGenerator(this, arguments, function* declare_1() {
            const parent = this;
            const child = new ValueResolutionController_1.ValueResolutionController({
                scope: [...this.scope, identifier],
                parent,
                state: types_1.State.Active
            });
            this.children.push(child);
            yield yield __await(child.emit({
                type: "declare",
                message: message || identifier
            }));
            return yield __await(child);
        });
    }
    step({ identifier, message }) {
        return __asyncGenerator(this, arguments, function* step_1() {
            const parent = this;
            const child = new StepsController({
                scope: [...this.scope, identifier || message],
                parent,
                state: types_1.State.Active
            });
            this.children.push(child);
            yield yield __await(child.emit({
                type: "step",
                message: message || identifier
            }));
            return yield __await(child);
        });
    }
}
__decorate([
    decorators_1.validStates([types_1.State.Pending]),
    decorators_1.transitionToState(types_1.State.Active)
], StepsController.prototype, "begin", null);
__decorate([
    decorators_1.validStates([types_1.State.Active]),
    decorators_1.transitionToState(types_1.State.Done)
], StepsController.prototype, "succeed", null);
__decorate([
    decorators_1.validStates([types_1.State.Active])
], StepsController.prototype, "update", null);
__decorate([
    decorators_1.validStates([types_1.State.Active])
], StepsController.prototype, "declare", null);
__decorate([
    decorators_1.validStates([types_1.State.Active])
], StepsController.prototype, "step", null);
exports.StepsController = StepsController;
//# sourceMappingURL=StepsController.js.map