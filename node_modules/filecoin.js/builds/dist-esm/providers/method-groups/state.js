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
 * The State methods are used to query, inspect, and interact with chain state.
 *
 * @remarks
 * All methods take a TipSetKey as a parameter. The state looked up is the state at that tipset.
 * If TipSetKey is not provided as a param, the heaviest tipset in the chain to be used.
 */
var JsonRpcStateMethodGroup = /** @class */ (function () {
    function JsonRpcStateMethodGroup(conn) {
        this.conn = conn;
    }
    /**
     * runs the given message and returns its result without any persisted changes.
     */
    JsonRpcStateMethodGroup.prototype.stateCall = function (message, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateCall', params: [message, tipSetKey] })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * replays a given message, assuming it was included in a block in the specified tipset. If no tipset key is provided, the appropriate tipset is looked up.
     * @param tipSetKey
     * @param cid
     */
    JsonRpcStateMethodGroup.prototype.stateReplay = function (tipSetKey, cid) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateReplay', params: [cid] })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * returns the indicated actor's nonce and balance
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.getActor = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateGetActor', params: [address, tipSetKey] })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * returns the indicated actor's state
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.readState = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateReadState', params: [address, tipSetKey] })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * looks back and returns all messages with a matching to or from address, stopping at the given height.
     * @param filter
     * @param tipSetKey
     * @param toHeight
     */
    JsonRpcStateMethodGroup.prototype.listMessages = function (match, tipSetKey, toHeight) {
        return __awaiter(this, void 0, void 0, function () {
            var messages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateListMessages', params: [match, tipSetKey, toHeight] })];
                    case 1:
                        messages = _a.sent();
                        return [2 /*return*/, messages ? messages : []];
                }
            });
        });
    };
    /**
     * returns the name of the network the node is synced to
     */
    JsonRpcStateMethodGroup.prototype.networkName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var network;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateNetworkName', params: [] })];
                    case 1:
                        network = _a.sent();
                        return [2 /*return*/, network];
                }
            });
        });
    };
    /**
     * returns info about the given miner's sectors
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerSectors = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorsInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMinerSectors', params: [address, undefined, tipSetKey] })];
                    case 1:
                        sectorsInfo = _a.sent();
                        return [2 /*return*/, sectorsInfo];
                }
            });
        });
    };
    /**
     * returns info about sectors that a given miner is actively proving.
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerActiveSectors = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var activeSectors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMinerActiveSectors', params: [address, tipSetKey] })];
                    case 1:
                        activeSectors = _a.sent();
                        return [2 /*return*/, activeSectors];
                }
            });
        });
    };
    /**
     * calculates the deadline at some epoch for a proving period and returns the deadline-related calculations.
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerProvingDeadline = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var provingDeadline;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMinerProvingDeadline', params: [address, tipSetKey] })];
                    case 1:
                        provingDeadline = _a.sent();
                        return [2 /*return*/, provingDeadline];
                }
            });
        });
    };
    /**
     * returns the power of the indicated miner
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerPower = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var power;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMinerPower', params: [address, tipSetKey] })];
                    case 1:
                        power = _a.sent();
                        return [2 /*return*/, power];
                }
            });
        });
    };
    /**
     * returns info about the indicated miner
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerInfo = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var minerInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMinerInfo', params: [address, tipSetKey] })];
                    case 1:
                        minerInfo = _a.sent();
                        return [2 /*return*/, minerInfo];
                }
            });
        });
    };
    /**
     * returns all the proving deadlines for the given miner
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerDeadlines = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var minerDeadlines;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMinerDeadlines', params: [address, tipSetKey] })];
                    case 1:
                        minerDeadlines = _a.sent();
                        return [2 /*return*/, minerDeadlines];
                }
            });
        });
    };
    /**
     * Loads miner partitions for the specified miner and deadline
     * @param address
     * @param idx
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerPartitions = function (address, idx, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var minerPartitions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMinerPartitions', params: [address, idx, tipSetKey] })];
                    case 1:
                        minerPartitions = _a.sent();
                        return [2 /*return*/, minerPartitions];
                }
            });
        });
    };
    /**
     * Returns a bitfield indicating the faulty sectors of the given miner
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerFaults = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var minerFaults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMinerFaults', params: [address, tipSetKey] })];
                    case 1:
                        minerFaults = _a.sent();
                        return [2 /*return*/, minerFaults];
                }
            });
        });
    };
    // TODO: This method is not working on Lotus. See issue here: https://github.com/filecoin-project/lotus/issues/3063
    /**
     * returns all non-expired Faults that occur within lookback epochs of the given tipset
     * @param epoch
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.allMinerFaults = function (epoch, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var allFaults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateAllMinerFaults', params: [epoch, tipSetKey] })];
                    case 1:
                        allFaults = _a.sent();
                        return [2 /*return*/, allFaults];
                }
            });
        });
    };
    /**
     * returns a bitfield indicating the recovering sectors of the given miner
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerRecoveries = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var recoveries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMinerRecoveries', params: [address, tipSetKey] })];
                    case 1:
                        recoveries = _a.sent();
                        return [2 /*return*/, recoveries];
                }
            });
        });
    };
    // TODO: this should be BigNumber instead of string
    /**
     * returns the precommit deposit for the specified miner's sector
     * @param address
     * @param sectorPreCommitInfo
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerPreCommitDepositForPower = function (address, sectorPreCommitInfo, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var deposit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateMinerPreCommitDepositForPower',
                            params: [address, sectorPreCommitInfo, tipSetKey]
                        })];
                    case 1:
                        deposit = _a.sent();
                        return [2 /*return*/, deposit];
                }
            });
        });
    };
    /**
     * returns the initial pledge collateral for the specified miner's sector
     * @param address
     * @param sectorPreCommitInfo
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerInitialPledgeCollateral = function (address, sectorPreCommitInfo, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var deposit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateMinerInitialPledgeCollateral',
                            params: [address, sectorPreCommitInfo, tipSetKey]
                        })];
                    case 1:
                        deposit = _a.sent();
                        return [2 /*return*/, deposit];
                }
            });
        });
    };
    /**
     * returns the portion of a miner's balance that can be withdrawn or spent
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerAvailableBalance = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateMinerAvailableBalance',
                            params: [address, tipSetKey]
                        })];
                    case 1:
                        balance = _a.sent();
                        return [2 /*return*/, balance];
                }
            });
        });
    };
    /**
     * returns the PreCommit info for the specified miner's sector
     * @param address
     * @param sector
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.sectorPreCommitInfo = function (address, sector, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var preCommitInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateSectorPreCommitInfo',
                            params: [address, sector, tipSetKey]
                        })];
                    case 1:
                        preCommitInfo = _a.sent();
                        return [2 /*return*/, preCommitInfo];
                }
            });
        });
    };
    /**
     * StateSectorGetInfo returns the on-chain info for the specified miner's sector
     * @param address
     * @param sector
     * @param tipSetKey
     *
     * @remarks
     * NOTE: returned Expiration may not be accurate in some cases, use StateSectorExpiration to get accurate expiration epoch
     */
    JsonRpcStateMethodGroup.prototype.sectorGetInfo = function (address, sector, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateSectorGetInfo',
                            params: [address, sector, tipSetKey]
                        })];
                    case 1:
                        sectorInfo = _a.sent();
                        return [2 /*return*/, sectorInfo];
                }
            });
        });
    };
    /**
     * returns epoch at which given sector will expire
     * @param address
     * @param sector
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.sectorExpiration = function (address, sector, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorExpiration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateSectorExpiration',
                            params: [address, sector, tipSetKey]
                        })];
                    case 1:
                        sectorExpiration = _a.sent();
                        return [2 /*return*/, sectorExpiration];
                }
            });
        });
    };
    /**
     * finds deadline/partition with the specified sector
     * @param address
     * @param sector
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.sectorPartition = function (address, sector, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorLocation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateSectorPartition',
                            params: [address, sector, tipSetKey]
                        })];
                    case 1:
                        sectorLocation = _a.sent();
                        return [2 /*return*/, sectorLocation];
                }
            });
        });
    };
    /**
     * searches for a message in the chain and returns its receipt and the tipset where it was executed
     * @param cid
     */
    JsonRpcStateMethodGroup.prototype.searchMsg = function (cid) {
        return __awaiter(this, void 0, void 0, function () {
            var lookup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateSearchMsg', params: [cid] })];
                    case 1:
                        lookup = _a.sent();
                        return [2 /*return*/, lookup];
                }
            });
        });
    };
    /**
     * looks back in the chain for a message. If not found, it blocks until the message arrives on chain, and gets to the indicated confidence depth.
     * @param cid
     * @param confidence
     */
    JsonRpcStateMethodGroup.prototype.waitMsg = function (cid, confidence) {
        return __awaiter(this, void 0, void 0, function () {
            var lookup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateWaitMsg', params: [cid, confidence] })];
                    case 1:
                        lookup = _a.sent();
                        return [2 /*return*/, lookup];
                }
            });
        });
    };
    /**
     * looks back up to limit epochs in the chain for a message. If not found, it blocks until the message arrives on chain, and gets to the indicated confidence depth.
     * @param cid
     * @param confidence
     * @param limit
     */
    JsonRpcStateMethodGroup.prototype.waitMsgLimited = function (cid, confidence, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var lookup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateWaitMsgLimited', params: [cid, confidence, limit] })];
                    case 1:
                        lookup = _a.sent();
                        return [2 /*return*/, lookup];
                }
            });
        });
    };
    /**
     * returns the addresses of every miner that has claimed power in the Power Actor
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.listMiners = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var miners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateListMiners', params: [tipSetKey] })];
                    case 1:
                        miners = _a.sent();
                        return [2 /*return*/, miners];
                }
            });
        });
    };
    /**
     * returns the addresses of every actor in the state
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.listActors = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var miners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateListActors', params: [tipSetKey] })];
                    case 1:
                        miners = _a.sent();
                        return [2 /*return*/, miners];
                }
            });
        });
    };
    /**
     * looks up the Escrow and Locked balances of the given address in the Storage Market
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.marketBalance = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var marketBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMarketBalance', params: [address, tipSetKey] })];
                    case 1:
                        marketBalance = _a.sent();
                        return [2 /*return*/, marketBalance];
                }
            });
        });
    };
    /**
     * returns the Escrow and Locked balances of every participant in the Storage Market
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.marketParticipants = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var marketBalanceMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMarketParticipants', params: [tipSetKey] })];
                    case 1:
                        marketBalanceMap = _a.sent();
                        return [2 /*return*/, marketBalanceMap];
                }
            });
        });
    };
    /**
     * returns information about every deal in the Storage Market
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.marketDeals = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var marketDealsMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.StateMarketDeals', params: [tipSetKey] })];
                    case 1:
                        marketDealsMap = _a.sent();
                        return [2 /*return*/, marketDealsMap];
                }
            });
        });
    };
    /**
     * returns information about the indicated deal
     * @param dealId
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.marketStorageDeal = function (dealId, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var marketDeal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateMarketStorageDeal',
                            params: [dealId, tipSetKey]
                        })];
                    case 1:
                        marketDeal = _a.sent();
                        return [2 /*return*/, marketDeal];
                }
            });
        });
    };
    /**
     * retrieves the ID address of the given address
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.lookupId = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateLookupID',
                            params: [address, tipSetKey]
                        })];
                    case 1:
                        id = _a.sent();
                        return [2 /*return*/, id];
                }
            });
        });
    };
    /**
     * returns the public key address of the given ID address
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.accountKey = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateAccountKey',
                            params: [address, tipSetKey]
                        })];
                    case 1:
                        key = _a.sent();
                        return [2 /*return*/, key];
                }
            });
        });
    };
    /**
     * returns all the actors whose states change between the two given state CIDs
     * @param cid1
     * @param cid2
     */
    JsonRpcStateMethodGroup.prototype.changedActors = function (cid1, cid2) {
        return __awaiter(this, void 0, void 0, function () {
            var actors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateChangedActors',
                            params: [cid1, cid2]
                        })];
                    case 1:
                        actors = _a.sent();
                        return [2 /*return*/, actors];
                }
            });
        });
    };
    /**
     * returns the message receipt for the given message
     * @param cid
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.getReceipt = function (cid, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var receipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateGetReceipt',
                            params: [cid, tipSetKey]
                        })];
                    case 1:
                        receipt = _a.sent();
                        return [2 /*return*/, receipt];
                }
            });
        });
    };
    /**
     * returns the number of sectors in a miner's sector set and proving set
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerSectorCount = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateMinerSectorCount',
                            params: [address, tipSetKey]
                        })];
                    case 1:
                        sectors = _a.sent();
                        return [2 /*return*/, sectors];
                }
            });
        });
    };
    /**
     * Applies the given messages on the given tipset.
     * @param epoch
     * @param messages
     * @param tipSetKey
     *
     * @remarks
     * The messages are run as though the VM were at the provided height.
     */
    JsonRpcStateMethodGroup.prototype.compute = function (epoch, messages, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateCompute',
                            params: [epoch, messages, tipSetKey],
                        })];
                    case 1:
                        state = _a.sent();
                        return [2 /*return*/, state];
                }
            });
        });
    };
    /**
     * returns the data cap for the given address.
     * @param address
     * @param tipSetKey
     *
     * @remarks
     * Returns nil if there is no entry in the data cap table for the address.
     */
    JsonRpcStateMethodGroup.prototype.verifiedClientStatus = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var cap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateVerifiedClientStatus',
                            params: [address, tipSetKey],
                        })];
                    case 1:
                        cap = _a.sent();
                        return [2 /*return*/, cap];
                }
            });
        });
    };
    /**
     * returns the min and max collateral a storage provider can issue
     * @param size
     * @param verified
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.dealProviderCollateralBounds = function (size, verified, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var collateral;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateDealProviderCollateralBounds',
                            params: [size, verified, tipSetKey],
                        })];
                    case 1:
                        collateral = _a.sent();
                        return [2 /*return*/, collateral];
                }
            });
        });
    };
    /**
     * returns the circulating supply of Filecoin at the given tipset
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.circulatingSupply = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var supply;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateCirculatingSupply',
                            params: [tipSetKey],
                        })];
                    case 1:
                        supply = _a.sent();
                        return [2 /*return*/, supply];
                }
            });
        });
    };
    /**
     * returns an approximation of the circulating supply of Filecoin at the given tipset.
     *
     * @param tipSetKey
     *
     * @remarks This is the value reported by the runtime interface to actors code.
     */
    JsonRpcStateMethodGroup.prototype.vmCirculatingSupply = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var supply;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateVMCirculatingSupplyInternal',
                            params: [tipSetKey],
                        })];
                    case 1:
                        supply = _a.sent();
                        return [2 /*return*/, supply];
                }
            });
        });
    };
    /**
     * returns the data cap for the given address.
     * @param address
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.verifierStatus = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateVerifierStatus',
                            params: [address, tipSetKey],
                        })];
                    case 1:
                        status = _a.sent();
                        return [2 /*return*/, status];
                }
            });
        });
    };
    /**
     * returns the network version at the given tipset
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.networkVersion = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateNetworkVersion',
                            params: [tipSetKey],
                        })];
                    case 1:
                        version = _a.sent();
                        return [2 /*return*/, version];
                }
            });
        });
    };
    /**
     * returns the address of the Verified Registry's root key
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.verifiedRegistryRootKey = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateVerifiedRegistryRootKey',
                            params: [tipSetKey],
                        })];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, address];
                }
            });
        });
    };
    /**
     * checks if a sector is allocated
     * @param address
     * @param sectorNumber
     * @param tipSetKey
     */
    JsonRpcStateMethodGroup.prototype.minerSectorAllocated = function (address, sectorNumber, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var allocated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.StateMinerSectorAllocated',
                            params: [address, sectorNumber, tipSetKey],
                        })];
                    case 1:
                        allocated = _a.sent();
                        return [2 /*return*/, allocated];
                }
            });
        });
    };
    return JsonRpcStateMethodGroup;
}());
export { JsonRpcStateMethodGroup };
//# sourceMappingURL=state.js.map