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
import WebSocket from 'isomorphic-ws';
import { EventEmitter } from 'events';
import { JsonRpcError } from './Connector';
var id = 1;
// See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
var WEBSOCKET_CLOSE_CODE = 1000;
var WsJsonRpcConnector = /** @class */ (function (_super) {
    __extends(WsJsonRpcConnector, _super);
    function WsJsonRpcConnector(options) {
        var _this = _super.call(this) || this;
        _this.requests = {};
        _this.onSocketClose = function () {
            _this.websocketReady = false;
            _this.requests = {};
        };
        _this.onSocketError = function () {
            _this.websocketReady = false;
        };
        _this.onSocketOpen = function () {
            _this.websocketReady = true;
            Object.keys(_this.requests).forEach(function (id) {
                _this.websocket.send(_this.requests[id].payload);
            });
        };
        _this.onSocketMessage = function (event) {
            var data = event.data;
            var response = JSON.parse(data);
            if (response.id) {
                var id_1 = "" + response.id;
                var request = _this.requests[id_1];
                if (!request) {
                    return;
                }
                delete _this.requests[id_1];
                if (response.hasOwnProperty('result')) {
                    request.cb(undefined, response.result);
                }
                else {
                    if (response.error && request.cb) {
                        var error = new JsonRpcError({
                            code: response.error.code || 0,
                            message: response.error.message,
                            data: data,
                        });
                        request.cb(error, undefined);
                    }
                }
            }
            else {
                if (response.method === "xrpc.ch.val") {
                    var subscriptionId = response.params[0];
                    var isValid = Number.isInteger(subscriptionId);
                    if (isValid) {
                        _this.emit(subscriptionId, response.params[1]);
                    }
                }
            }
        };
        _this.websocketReady = false;
        _this.token = options.token;
        _this.url = options.url;
        return _this;
    }
    WsJsonRpcConnector.prototype.connect = function () {
        this.websocket = new WebSocket(this.fullUrl());
        this.websocket.onopen = this.onSocketOpen;
        this.websocket.onclose = this.onSocketClose;
        this.websocket.onerror = this.onSocketError;
        this.websocket.onmessage = this.onSocketMessage;
        return Promise.resolve();
    };
    WsJsonRpcConnector.prototype.request = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var currentId, params, method;
            var _this = this;
            return __generator(this, function (_a) {
                currentId = id++;
                params = args.params, method = args.method;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        function cb(error, result) {
                            if (error) {
                                return reject(error);
                            }
                            return resolve(result);
                        }
                        var payload = JSON.stringify({
                            method: method,
                            params: params,
                            id: currentId,
                            jsonrpc: "2.0",
                        });
                        _this.requests["" + currentId] = {
                            payload: payload,
                            cb: cb,
                        };
                        if (_this.websocketReady) {
                            _this.websocket.send(payload);
                        }
                    })];
            });
        });
    };
    WsJsonRpcConnector.prototype.closeSubscription = function (subscriptionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.websocket.removeEventListener(subscriptionId);
                return [2 /*return*/];
            });
        });
    };
    WsJsonRpcConnector.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.websocket.readyState === WebSocket.CONNECTING)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                _this.websocket.onopen = function () {
                                    resolve(true);
                                };
                                _this.websocket.onerror = function () {
                                    resolve(false);
                                };
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.websocket.close(WEBSOCKET_CLOSE_CODE);
                        return [2 /*return*/];
                }
            });
        });
    };
    WsJsonRpcConnector.prototype.fullUrl = function () {
        return this.token ? this.url + "?token=" + this.token : "" + this.url;
    };
    WsJsonRpcConnector.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event, listener);
    };
    return WsJsonRpcConnector;
}(EventEmitter));
export { WsJsonRpcConnector };
//# sourceMappingURL=WsJsonRpcConnector.js.map