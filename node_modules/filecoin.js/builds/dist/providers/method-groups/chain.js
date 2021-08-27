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
exports.JsonRpcChainMethodGroup = void 0;
var WsJsonRpcConnector_1 = require("../../connectors/WsJsonRpcConnector");
var HttpJsonRpcConnector_1 = require("../../connectors/HttpJsonRpcConnector");
var CHAIN_NOTIFY_INTERVAL = 2000;
/**
 * The Chain method group contains methods for interacting with the blockchain, but that do not require any form of state computation.
 */
var JsonRpcChainMethodGroup = /** @class */ (function () {
    function JsonRpcChainMethodGroup(conn) {
        this.conn = conn;
    }
    /**
     * reads ipld nodes referenced by the specified CID from chain blockstore and returns raw bytes.
     * @param cid
     */
    JsonRpcChainMethodGroup.prototype.readObj = function (cid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainReadObj', params: [cid] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * deletes node referenced by the given CID
     * @param cid
     */
    JsonRpcChainMethodGroup.prototype.deleteObj = function (cid) {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainDeleteObj', params: [cid] })];
                    case 1:
                        error = _a.sent();
                        return [2 /*return*/, error];
                }
            });
        });
    };
    /**
     * returns messages stored in the specified block.
     * @param blockCid
     */
    JsonRpcChainMethodGroup.prototype.getBlockMessages = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainGetBlockMessages', params: [blockCid] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns the current head of the chain
     */
    JsonRpcChainMethodGroup.prototype.getHead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainHead' })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * call back on chain head updates.
     * @param cb
     * @returns interval id
     */
    JsonRpcChainMethodGroup.prototype.chainNotify = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var subscriptionId, head_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.conn instanceof WsJsonRpcConnector_1.WsJsonRpcConnector)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainNotify' })];
                    case 1:
                        subscriptionId = _a.sent();
                        this.conn.on(subscriptionId, cb);
                        return [3 /*break*/, 3];
                    case 2:
                        if (this.conn instanceof HttpJsonRpcConnector_1.HttpJsonRpcConnector) {
                            return [2 /*return*/, setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var currentHead;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.getHead()];
                                            case 1:
                                                currentHead = _a.sent();
                                                if (head_1 !== currentHead) {
                                                    head_1 = currentHead;
                                                    cb([{ Type: '', Val: currentHead }]);
                                                }
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, CHAIN_NOTIFY_INTERVAL)];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JsonRpcChainMethodGroup.prototype.stopChainNotify = function (id) {
        if (this.conn instanceof HttpJsonRpcConnector_1.HttpJsonRpcConnector && id) {
            clearInterval(id);
        }
        else if (this.conn instanceof WsJsonRpcConnector_1.WsJsonRpcConnector) {
            this.conn.closeSubscription(id);
        }
    };
    /**
     * returns the block specified by the given CID
     * @param blockCid
     */
    JsonRpcChainMethodGroup.prototype.getBlock = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainGetBlock', params: [blockCid] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * reads a message referenced by the specified CID from the chain blockstore
     * @param messageCid
     */
    JsonRpcChainMethodGroup.prototype.getMessage = function (messageCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainGetMessage', params: [messageCid] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns receipts for messages in parent tipset of the specified block
     * @param blockCid
     */
    JsonRpcChainMethodGroup.prototype.getParentReceipts = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainGetParentReceipts', params: [blockCid] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns messages stored in parent tipset of the specified block.
     * @param blockCid
     */
    JsonRpcChainMethodGroup.prototype.getParentMessages = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainGetParentMessages', params: [blockCid] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * checks if a given CID exists in the chain blockstore
     * @param cid
     */
    JsonRpcChainMethodGroup.prototype.hasObj = function (cid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainHasObj', params: [cid] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns statistics about the graph referenced by 'obj'.
     *
     * @remarks
     * If 'base' is also specified, then the returned stat will be a diff between the two objects.
     */
    JsonRpcChainMethodGroup.prototype.statObj = function (obj, base) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainStatObj', params: [obj, base] })];
                    case 1:
                        stat = _a.sent();
                        return [2 /*return*/, stat];
                }
            });
        });
    };
    /**
     * Forcefully sets current chain head. Use with caution.
     * @param tipSetKey
     */
    JsonRpcChainMethodGroup.prototype.setHead = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainSetHead', params: [tipSetKey] })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns the genesis tipset.
     * @param tipSet
     */
    JsonRpcChainMethodGroup.prototype.getGenesis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var genesis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainGetGenesis', params: [] })];
                    case 1:
                        genesis = _a.sent();
                        return [2 /*return*/, genesis];
                }
            });
        });
    };
    // TODO: Go API method signature returns BigInt. Replace string with BN
    /**
     * Computes weight for the specified tipset.
     * @param tipSetKey
     */
    JsonRpcChainMethodGroup.prototype.getTipSetWeight = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var weight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainTipSetWeight', params: [tipSetKey] })];
                    case 1:
                        weight = _a.sent();
                        return [2 /*return*/, weight];
                }
            });
        });
    };
    /**
     * looks back for a tipset at the specified epoch.
     * @param epochNumber
     */
    JsonRpcChainMethodGroup.prototype.getTipSetByHeight = function (epochNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainGetTipSetByHeight', params: [epochNumber, []] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * Returns a set of revert/apply operations needed to get from
     * @param from
     * @param to
     */
    JsonRpcChainMethodGroup.prototype.getPath = function (from, to) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainGetPath', params: [from, to] })];
                    case 1:
                        path = _a.sent();
                        return [2 /*return*/, path];
                }
            });
        });
    };
    // TODO: Fix error: 500 Internal Server Error
    /**
     * Returns a stream of bytes with CAR dump of chain data.
     * @param nroots
     * @param tipSetKey
     *
     * @remarks The exported chain data includes the header chain from the given tipset back to genesis, the entire genesis state, and the most recent 'nroots' state trees. If oldmsgskip is set, messages from before the requested roots are also not included.
     */
    JsonRpcChainMethodGroup.prototype.export = function (nroots, oldmsgskip, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.ChainExport', params: [nroots, oldmsgskip, tipSetKey] })];
                    case 1:
                        path = _a.sent();
                        return [2 /*return*/, path];
                }
            });
        });
    };
    return JsonRpcChainMethodGroup;
}());
exports.JsonRpcChainMethodGroup = JsonRpcChainMethodGroup;
//# sourceMappingURL=chain.js.map