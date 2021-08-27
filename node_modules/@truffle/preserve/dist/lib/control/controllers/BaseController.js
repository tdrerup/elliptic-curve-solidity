"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const types_1 = require("../types");
class BaseController {
    constructor(options) {
        const { scope, state } = options;
        this.scope = scope;
        this._state = state !== null && state !== void 0 ? state : types_1.State.Pending;
    }
    get state() {
        return this._state;
    }
    emit(event) {
        return Object.assign(Object.assign({}, Object.entries(event)
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => ({ [key]: value }))
            .reduce((a, b) => (Object.assign(Object.assign({}, a), b)))), { scope: this.scope });
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map