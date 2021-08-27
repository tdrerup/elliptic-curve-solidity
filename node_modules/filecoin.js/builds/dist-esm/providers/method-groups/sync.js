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
/**
 * The Sync method group contains methods for interacting with and observing the lotus sync service.
 */
var JsonRpcSyncMethodGroup = /** @class */ (function () {
    function JsonRpcSyncMethodGroup(conn) {
        this.conn = conn;
    }
    /**
     * returns the current status of the lotus sync system.
     */
    JsonRpcSyncMethodGroup.prototype.state = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.SyncState' })];
                    case 1:
                        state = _a.sent();
                        return [2 /*return*/, state];
                }
            });
        });
    };
    //TODO: Method not working for the requests done through WebSocket
    /**
     * checks if a block was marked as bad, and if it was, returns the reason.
     * @param blockCid
     */
    JsonRpcSyncMethodGroup.prototype.checkBad = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            var check;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.SyncCheckBad', params: [blockCid] })];
                    case 1:
                        check = _a.sent();
                        return [2 /*return*/, check];
                }
            });
        });
    };
    /**
     * marks a blocks as bad, meaning that it won't ever by synced. Use with extreme caution.
     * @param blockCid
     */
    JsonRpcSyncMethodGroup.prototype.markBad = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.SyncMarkBad', params: [blockCid] })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * purges bad block cache, making it possible to sync to chains previously marked as bad
     */
    JsonRpcSyncMethodGroup.prototype.unmarkAllBad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.SyncUnmarkAllBad', params: [] })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // TODO: Method not working. Returns 500 "Internal Server Error"
    /**
     * unmarks a block as bad, making it possible to be validated and synced again.
     * @param blockCid
     */
    JsonRpcSyncMethodGroup.prototype.unmarkBad = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.SyncUnmarkBad', params: [blockCid] })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * marks a blocks as checkpointed, meaning that it won't ever fork away from it.
     * @param tipSetKey
     */
    JsonRpcSyncMethodGroup.prototype.checkpoint = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var check;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.SyncCheckpoint', params: [tipSetKey] })];
                    case 1:
                        check = _a.sent();
                        return [2 /*return*/, check];
                }
            });
        });
    };
    /**
     * can be used to submit a newly created block to the network
     * @param blockMsg
     */
    JsonRpcSyncMethodGroup.prototype.submitBlock = function (blockMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var check;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.SyncSubmitBlock', params: [blockMsg] })];
                    case 1:
                        check = _a.sent();
                        return [2 /*return*/, check];
                }
            });
        });
    };
    /**
     * returns a channel streaming incoming, potentially not yet synced block headers.
     * @param cb
     */
    JsonRpcSyncMethodGroup.prototype.incomingBlocks = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var subscriptionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.SyncIncomingBlocks' })];
                    case 1:
                        subscriptionId = _a.sent();
                        this.conn.on(subscriptionId, cb);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * indicates whether the provided tipset is valid or not
     * @param tipSetKey
     */
    JsonRpcSyncMethodGroup.prototype.validateTipset = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var valid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.SyncValidateTipset', params: [tipSetKey] })];
                    case 1:
                        valid = _a.sent();
                        return [2 /*return*/, valid];
                }
            });
        });
    };
    return JsonRpcSyncMethodGroup;
}());
export { JsonRpcSyncMethodGroup };
//# sourceMappingURL=sync.js.map