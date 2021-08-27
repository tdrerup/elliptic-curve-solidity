"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpJsonRpcConnector = void 0;
var node_fetch_1 = __importDefault(require("node-fetch"));
var events_1 = require("events");
var Connector_1 = require("./Connector");
var HttpJsonRpcConnector = /** @class */ (function (_super) {
    __extends(HttpJsonRpcConnector, _super);
    function HttpJsonRpcConnector(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.reqId = 0;
        if (typeof options === 'string') {
            _this.url = options;
        }
        else {
            _this.url = options.url;
            _this.token = options.token;
        }
        return _this;
    }
    HttpJsonRpcConnector.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.emit('connected');
                return [2 /*return*/];
            });
        });
    };
    HttpJsonRpcConnector.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.emit('disconnected');
                return [2 /*return*/];
            });
        });
    };
    HttpJsonRpcConnector.prototype.request = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var call, message, resp, e_1, decoded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        call = (typeof window === 'undefined') ? node_fetch_1.default : fetch;
                        message = {
                            jsonrpc: "2.0",
                            method: req.method,
                            params: req.params || null,
                            id: this.reqId++,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, call(this.url, {
                                method: 'POST',
                                headers: this._headers(),
                                body: JSON.stringify(message),
                            })];
                    case 2:
                        resp = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        throw new Connector_1.ConnectionError(e_1);
                    case 4:
                        if (resp.ok === false) {
                            throw new Connector_1.ResponseError(resp.status, resp.statusText);
                        }
                        return [4 /*yield*/, resp.json()];
                    case 5:
                        decoded = _a.sent();
                        if (decoded.error) {
                            throw new Connector_1.JsonRpcError(decoded.error);
                        }
                        return [2 /*return*/, decoded.result];
                }
            });
        });
    };
    HttpJsonRpcConnector.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event, listener);
    };
    HttpJsonRpcConnector.prototype._headers = function () {
        return __assign({ 'Content-Type': 'application/json' }, (this.token ? { 'Authorization': "Bearer " + this.token } : {}));
    };
    return HttpJsonRpcConnector;
}(events_1.EventEmitter));
exports.HttpJsonRpcConnector = HttpJsonRpcConnector;
//# sourceMappingURL=HttpJsonRpcConnector.js.map