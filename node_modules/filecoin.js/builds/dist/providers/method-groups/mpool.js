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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRpcMPoolMethodGroup = void 0;
var index_1 = require("../../index");
/**
 * The Mpool methods are for interacting with the message pool. The message pool manages all incoming and outgoing 'messages' going over the network.
 */
var JsonRpcMPoolMethodGroup = /** @class */ (function () {
    function JsonRpcMPoolMethodGroup(conn) {
        this.conn = conn;
    }
    /**
     * returns (a copy of) the current mpool config
     */
    JsonRpcMPoolMethodGroup.prototype.getMpoolConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolGetConfig', params: [] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * sets the mpool config to (a copy of) the supplied config
     * @param config
     */
    JsonRpcMPoolMethodGroup.prototype.setMpoolConfig = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolSetConfig', params: [config] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * clears pending messages from the mpool
     */
    JsonRpcMPoolMethodGroup.prototype.clear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolClear', params: [true] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * get all mpool messages
     * @param tipSetKey
     */
    JsonRpcMPoolMethodGroup.prototype.getMpoolPending = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolPending', params: [tipSetKey] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns a list of pending messages for inclusion in the next block
     * @param tipSetKey
     * @param ticketQuality
     */
    JsonRpcMPoolMethodGroup.prototype.select = function (tipSetKey, ticketQuality) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolSelect', params: [tipSetKey, ticketQuality] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns a list of pending messages for inclusion in the next block
     * @param tipSetKey
     * @param ticketQuality
     */
    JsonRpcMPoolMethodGroup.prototype.sub = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var subscriptionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.conn instanceof index_1.WsJsonRpcConnector)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.conn.request({
                                method: 'Filecoin.MpoolSub',
                            })];
                    case 1:
                        subscriptionId = _a.sent();
                        this.conn.on(subscriptionId, cb);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * get nonce for address.  Note that this method may not be atomic. Use MpoolPushMessage instead.
     * @param address
     */
    JsonRpcMPoolMethodGroup.prototype.getNonce = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolGetNonce', params: [address] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * send message, signed with default lotus wallet
     *
     * @remarks
     * MpoolPushMessage atomically assigns a nonce, signs, and pushes a message
     * to mempool.
     * maxFee is only used when GasFeeCap/GasPremium fields aren't specified
     * When maxFee is set to 0, MpoolPushMessage will guess appropriate fee
     * based on current chain conditions
     * @param msg
     */
    JsonRpcMPoolMethodGroup.prototype.pushMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolPushMessage', params: [msg, { MaxFee: "30000000000000" }] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * send signed message
     * @param msg
     */
    JsonRpcMPoolMethodGroup.prototype.push = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolPush', params: [msg] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * pushes a signed message to mempool from untrusted sources.
     * @param message
     */
    JsonRpcMPoolMethodGroup.prototype.pushUntrusted = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolPushUntrusted', params: [message] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * batch pushes a signed message to mempool.
     * @param messages
     */
    JsonRpcMPoolMethodGroup.prototype.batchPush = function (messages) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolBatchPush', params: [messages] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * batch pushes a signed message to mempool from untrusted sources
     * @param messages
     */
    JsonRpcMPoolMethodGroup.prototype.batchPushUntrusted = function (messages) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolBatchPushUntrusted', params: [messages] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * batch pushes a unsigned message to mempool
     * @param messages
     */
    JsonRpcMPoolMethodGroup.prototype.batchPushMessage = function (messages) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MpoolBatchPushMessage', params: [messages] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    return JsonRpcMPoolMethodGroup;
}());
exports.JsonRpcMPoolMethodGroup = JsonRpcMPoolMethodGroup;
//# sourceMappingURL=mpool.js.map