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
exports.JsonRpcClientMethodGroup = void 0;
var WsJsonRpcConnector_1 = require("../../connectors/WsJsonRpcConnector");
/**
 * The Client methods all have to do with interacting with the storage and retrieval markets as a client.
 */
var JsonRpcClientMethodGroup = /** @class */ (function () {
    function JsonRpcClientMethodGroup(conn) {
        this.conn = conn;
    }
    /**
     * Imports file under the specified path into filestore.
     * @param fileRef
     */
    JsonRpcClientMethodGroup.prototype.import = function (fileRef) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientImport',
                            params: [fileRef],
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Removes file import
     * @param importId
     */
    JsonRpcClientMethodGroup.prototype.removeImport = function (importId) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientRemoveImport',
                            params: [importId],
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Proposes a deal with a miner.
     * @param dealParams
     */
    JsonRpcClientMethodGroup.prototype.startDeal = function (dealParams) {
        return __awaiter(this, void 0, void 0, function () {
            var cid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientStartDeal',
                            params: [dealParams],
                        })];
                    case 1:
                        cid = _a.sent();
                        return [2 /*return*/, cid];
                }
            });
        });
    };
    /**
     * Returns the latest information about a given deal.
     * @param dealCid
     */
    JsonRpcClientMethodGroup.prototype.getDealInfo = function (dealCid) {
        return __awaiter(this, void 0, void 0, function () {
            var dealInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientGetDealInfo',
                            params: [dealCid],
                        })];
                    case 1:
                        dealInfo = _a.sent();
                        return [2 /*return*/, dealInfo];
                }
            });
        });
    };
    /**
     * Returns information about the deals made by the local client.
     */
    JsonRpcClientMethodGroup.prototype.listDeals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deals;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientListDeals',
                            params: [],
                        })];
                    case 1:
                        deals = _a.sent();
                        return [2 /*return*/, deals];
                }
            });
        });
    };
    JsonRpcClientMethodGroup.prototype.hasLocal = function (cid) {
        return __awaiter(this, void 0, void 0, function () {
            var hasLocal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientHasLocal',
                            params: [cid],
                        })];
                    case 1:
                        hasLocal = _a.sent();
                        return [2 /*return*/, hasLocal];
                }
            });
        });
    };
    /**
     * Identifies peers that have a certain file, and returns QueryOffers (one per peer).
     * @param cid
     * @param pieceCid
     */
    JsonRpcClientMethodGroup.prototype.findData = function (cid, pieceCid) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientFindData',
                            params: [cid, pieceCid],
                        })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * returns a QueryOffer for the specific miner and file.
     * @param miner
     * @param root
     * @param pieceCid
     */
    JsonRpcClientMethodGroup.prototype.minerQueryOffer = function (miner, root, pieceCid) {
        return __awaiter(this, void 0, void 0, function () {
            var queryOffer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientMinerQueryOffer',
                            params: [miner, root, pieceCid],
                        })];
                    case 1:
                        queryOffer = _a.sent();
                        return [2 /*return*/, queryOffer];
                }
            });
        });
    };
    /**
     * initiates the retrieval of a file, as specified in the order.
     * @param order
     * @param ref
     */
    JsonRpcClientMethodGroup.prototype.retrieve = function (order, ref) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientRetrieve',
                            params: [order, ref],
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * returns a signed StorageAsk from the specified miner.
     * @param peerId
     * @param miner
     */
    JsonRpcClientMethodGroup.prototype.queryAsk = function (peerId, miner) {
        return __awaiter(this, void 0, void 0, function () {
            var queryAsk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientQueryAsk',
                            params: [peerId, miner],
                        })];
                    case 1:
                        queryAsk = _a.sent();
                        return [2 /*return*/, queryAsk];
                }
            });
        });
    };
    /**
     * calculates the CommP for a specified file
     * @param path
     */
    JsonRpcClientMethodGroup.prototype.calcCommP = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var commP;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientCalcCommP',
                            params: [path],
                        })];
                    case 1:
                        commP = _a.sent();
                        return [2 /*return*/, commP];
                }
            });
        });
    };
    /**
     * generates a CAR file for the specified file.
     * @param ref
     * @param outpath
     */
    JsonRpcClientMethodGroup.prototype.genCar = function (ref, outpath) {
        return __awaiter(this, void 0, void 0, function () {
            var car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientGenCar',
                            params: [ref, outpath],
                        })];
                    case 1:
                        car = _a.sent();
                        return [2 /*return*/, car];
                }
            });
        });
    };
    /**
     * calculates real deal data size
     * @param root
     */
    JsonRpcClientMethodGroup.prototype.dealSize = function (root) {
        return __awaiter(this, void 0, void 0, function () {
            var dataSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientDealSize',
                            params: [root],
                        })];
                    case 1:
                        dataSize = _a.sent();
                        return [2 /*return*/, dataSize];
                }
            });
        });
    };
    /**
     * returns the status of all ongoing transfers of data
     */
    JsonRpcClientMethodGroup.prototype.listDataTransfers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var transfers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientListDataTransfers',
                            params: [],
                        })];
                    case 1:
                        transfers = _a.sent();
                        return [2 /*return*/, transfers];
                }
            });
        });
    };
    /**
     * attempts to restart stalled retrievals on a given payment channel which are stuck due to insufficient funds.
     * @param paymentChannel
     */
    JsonRpcClientMethodGroup.prototype.retrieveTryRestartInsufficientFunds = function (paymentChannel) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientRetrieveTryRestartInsufficientFunds',
                            params: [paymentChannel],
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * lists imported files and their root CIDs
     */
    JsonRpcClientMethodGroup.prototype.listImports = function () {
        return __awaiter(this, void 0, void 0, function () {
            var imports;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientListImports',
                            params: [],
                        })];
                    case 1:
                        imports = _a.sent();
                        return [2 /*return*/, imports];
                }
            });
        });
    };
    /**
     * returns the status of updated deals
     */
    JsonRpcClientMethodGroup.prototype.getDealUpdates = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var subscriptionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.conn instanceof WsJsonRpcConnector_1.WsJsonRpcConnector)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.conn.request({
                                method: 'Filecoin.ClientGetDealUpdates',
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
     * initiates the retrieval of a file, as specified in the order, and provides a channel of status updates.
     * @param order
     * @param ref
     * @param cb
     */
    JsonRpcClientMethodGroup.prototype.retrieveWithEvents = function (order, ref, cb) {
        return __awaiter(this, void 0, void 0, function () {
            var subscriptionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.conn instanceof WsJsonRpcConnector_1.WsJsonRpcConnector)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.conn.request({
                                method: 'Filecoin.ClientRetrieveWithEvents',
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
    JsonRpcClientMethodGroup.prototype.dataTransferUpdates = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            var subscriptionId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.conn instanceof WsJsonRpcConnector_1.WsJsonRpcConnector)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.conn.request({
                                method: 'Filecoin.ClientDataTransferUpdates',
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
     * returns deal status given a code
     * @param code
     */
    JsonRpcClientMethodGroup.prototype.getDealStatus = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientGetDealStatus',
                            params: [code],
                        })];
                    case 1:
                        status = _a.sent();
                        return [2 /*return*/, status];
                }
            });
        });
    };
    /**
     * attempts to restart a data transfer with the given transfer ID and other peer
     * @param transferId
     * @param otherPeer
     * @param isInitiator
     */
    JsonRpcClientMethodGroup.prototype.restartDataTransfer = function (transferId, otherPeer, isInitiator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientRestartDataTransfer',
                            params: [transferId, otherPeer, isInitiator],
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * cancels a data transfer with the given transfer ID and other peer
     * @param transferId
     * @param otherPeer
     * @param isInitiator
     */
    JsonRpcClientMethodGroup.prototype.cancelDataTransfer = function (transferId, otherPeer, isInitiator) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientCancelDataTransfer',
                            params: [transferId, otherPeer, isInitiator],
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JsonRpcClientMethodGroup.prototype.dealPieceCID = function (rootCid) {
        return __awaiter(this, void 0, void 0, function () {
            var dataCIDSize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.ClientDealPieceCID',
                            params: [rootCid],
                        })];
                    case 1:
                        dataCIDSize = _a.sent();
                        return [2 /*return*/, dataCIDSize];
                }
            });
        });
    };
    return JsonRpcClientMethodGroup;
}());
exports.JsonRpcClientMethodGroup = JsonRpcClientMethodGroup;
//# sourceMappingURL=client.js.map