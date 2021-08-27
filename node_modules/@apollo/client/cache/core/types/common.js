import { __extends } from "tslib";
var MissingFieldError = (function (_super) {
    __extends(MissingFieldError, _super);
    function MissingFieldError(message, path, query, variables) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.path = path;
        _this.query = query;
        _this.variables = variables;
        _this.__proto__ = MissingFieldError.prototype;
        return _this;
    }
    return MissingFieldError;
}(Error));
export { MissingFieldError };
//# sourceMappingURL=common.js.map