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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseWalletProvider = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var BaseWalletProvider = /** @class */ (function () {
    function BaseWalletProvider(client) {
        this.client = client;
    }
    BaseWalletProvider.prototype.release = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.client.release()];
            });
        });
    };
    /**
     * get balance for address
     * @param address
     */
    BaseWalletProvider.prototype.getBalance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.balance(address)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * get nonce for address.  Note that this method may not be atomic. Use MpoolPushMessage instead.
     * @param address
     */
    BaseWalletProvider.prototype.getNonce = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mpool.getNonce(address)];
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
    BaseWalletProvider.prototype.sendSignedMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mpool.push(msg)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
      * estimate gas fee cap
      * @param message
      * @param nblocksincl
      */
    BaseWalletProvider.prototype.estimateMessageGasFeeCap = function (message, nblocksincl) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.gasEstimate.feeCap(message, nblocksincl)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
    * estimate gas limit, it fails if message fails to execute.
    * @param message
    */
    BaseWalletProvider.prototype.estimateMessageGasLimit = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.gasEstimate.gasLimit(message)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
    * estimate gas to succesufully send message, and have it likely be included in the next nblocksincl blocks
    * @param nblocksincl
    * @param sender
    * @param gasLimit
    */
    BaseWalletProvider.prototype.estimateMessageGasPremium = function (nblocksincl, sender, gasLimit) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.gasEstimate.gasPremium(nblocksincl, sender, gasLimit)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * estimate gas to succesufully send message, and have it included in the next 10 blocks
     * @param message
     */
    BaseWalletProvider.prototype.estimateMessageGas = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.gasEstimate.messageGas(message)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * prepare a message for signing, add defaults, and populate nonce and gas related parameters if not provided
     * @param message
     */
    BaseWalletProvider.prototype.createMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var msg, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = {
                            To: message.To,
                            From: message.From,
                            Value: message.Value ? message.Value : new bignumber_js_1.default(0),
                            GasLimit: message.GasLimit ? message.GasLimit : 0,
                            GasFeeCap: message.GasFeeCap ? message.GasFeeCap : new bignumber_js_1.default(0),
                            GasPremium: message.GasPremium ? message.GasPremium : new bignumber_js_1.default(0),
                            Method: message.Method ? message.Method : 0,
                            Params: message.Params ? message.Params : '',
                            Version: message.Version ? message.Version : 0
                        };
                        if (!message.Nonce) return [3 /*break*/, 1];
                        _b = message.Nonce;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.getNonce(message.From)];
                    case 2:
                        _b = _c.sent();
                        _c.label = 3;
                    case 3:
                        msg = (_a.Nonce = _b,
                            _a);
                        if (!(msg.GasLimit === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.estimateMessageGas(msg)];
                    case 4:
                        msg = _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/, msg];
                }
            });
        });
    };
    //Passtrough methods
    //Chain methods
    /**
     * call back on chain head updates.
     * @param cb
     * @returns interval id
     */
    BaseWalletProvider.prototype.chainNotify = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.client.chain.chainNotify(cb);
                return [2 /*return*/];
            });
        });
    };
    /**
     * returns the current head of the chain
     */
    BaseWalletProvider.prototype.getHead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getHead()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns the block specified by the given CID
     * @param blockCid
     */
    BaseWalletProvider.prototype.getBlock = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getBlock(blockCid)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns messages stored in the specified block.
     * @param blockCid
     */
    BaseWalletProvider.prototype.getBlockMessages = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getBlockMessages(blockCid)];
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
    BaseWalletProvider.prototype.getParentReceipts = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getParentReceipts(blockCid)];
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
    BaseWalletProvider.prototype.getParentMessages = function (blockCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getParentMessages(blockCid)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * looks back for a tipset at the specified epoch.
     * @param epochNumber
     */
    BaseWalletProvider.prototype.getTipSetByHeight = function (epochNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getTipSetByHeight(epochNumber)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * reads ipld nodes referenced by the specified CID from chain blockstore and returns raw bytes.
     * @param cid
     */
    BaseWalletProvider.prototype.readObj = function (cid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.readObj(cid)];
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
    BaseWalletProvider.prototype.hasObj = function (cid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.hasObj(cid)];
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
    BaseWalletProvider.prototype.statObj = function (obj, base) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.statObj(obj, base)];
                    case 1:
                        stat = _a.sent();
                        return [2 /*return*/, stat];
                }
            });
        });
    };
    /**
     * Returns the genesis tipset.
     * @param tipSet
     */
    BaseWalletProvider.prototype.getGenesis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var genesis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getGenesis()];
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
    BaseWalletProvider.prototype.getTipSetWeight = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var weight;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getTipSetWeight(tipSetKey)];
                    case 1:
                        weight = _a.sent();
                        return [2 /*return*/, weight];
                }
            });
        });
    };
    /**
     * reads a message referenced by the specified CID from the chain blockstore
     * @param messageCid
     */
    BaseWalletProvider.prototype.getMessage = function (messageCid) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getMessage(messageCid)];
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
    BaseWalletProvider.prototype.getPath = function (from, to) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.chain.getPath(from, to)];
                    case 1:
                        path = _a.sent();
                        return [2 /*return*/, path];
                }
            });
        });
    };
    //Sync methods
    /**
     * returns the current status of the lotus sync system.
     */
    BaseWalletProvider.prototype.state = function () {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sync.state()];
                    case 1:
                        state = _a.sent();
                        return [2 /*return*/, state];
                }
            });
        });
    };
    /**
     * returns a channel streaming incoming, potentially not yet synced block headers.
     * @param cb
     */
    BaseWalletProvider.prototype.incomingBlocks = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.sync.incomingBlocks(cb)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Mpool methods
    /**
     * get all mpool messages
     * @param tipSetKey
     */
    BaseWalletProvider.prototype.getMpoolPending = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mpool.getMpoolPending(tipSetKey)];
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
    BaseWalletProvider.prototype.sub = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mpool.sub(cb)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Client methods
    /**
     * returns a signed StorageAsk from the specified miner.
     * @param peerId
     * @param miner
     */
    BaseWalletProvider.prototype.queryAsk = function (peerId, miner) {
        return __awaiter(this, void 0, void 0, function () {
            var queryAsk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.client.queryAsk(peerId, miner)];
                    case 1:
                        queryAsk = _a.sent();
                        return [2 /*return*/, queryAsk];
                }
            });
        });
    };
    //State methods
    /**
     * returns the indicated actor's nonce and balance
     * @param address
     * @param tipSetKey
     */
    BaseWalletProvider.prototype.getActor = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.getActor(address, tipSetKey)];
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
    BaseWalletProvider.prototype.readState = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.readState(address, tipSetKey)];
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
    BaseWalletProvider.prototype.listMessages = function (filter, tipSetKey, toHeight) {
        return __awaiter(this, void 0, void 0, function () {
            var messages;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.listMessages(filter, tipSetKey, toHeight)];
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
    BaseWalletProvider.prototype.networkName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var network;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.networkName()];
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
    BaseWalletProvider.prototype.minerSectors = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorsInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerSectors(address, tipSetKey)];
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
    BaseWalletProvider.prototype.minerActiveSectors = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var activeSectors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.minerActiveSectors(address, tipSetKey)];
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
    BaseWalletProvider.prototype.minerProvingDeadline = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var provingDeadline;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerProvingDeadline(address, tipSetKey)];
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
    BaseWalletProvider.prototype.minerPower = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var power;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerPower(address, tipSetKey)];
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
    BaseWalletProvider.prototype.minerInfo = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var minerInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerInfo(address, tipSetKey)];
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
    BaseWalletProvider.prototype.minerDeadlines = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var minerDeadlines;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerDeadlines(address, tipSetKey)];
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
    BaseWalletProvider.prototype.minerPartitions = function (address, idx, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var minerPartitions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerPartitions(address, idx, tipSetKey)];
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
    BaseWalletProvider.prototype.minerFaults = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var minerFaults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerFaults(address, tipSetKey)];
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
    BaseWalletProvider.prototype.allMinerFaults = function (epoch, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var allFaults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.allMinerFaults(epoch, tipSetKey)];
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
    BaseWalletProvider.prototype.minerRecoveries = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var recoveries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerRecoveries(address, tipSetKey)];
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
    BaseWalletProvider.prototype.minerPreCommitDepositForPower = function (address, sectorPreCommitInfo, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var deposit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerPreCommitDepositForPower(address, sectorPreCommitInfo, tipSetKey)];
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
    BaseWalletProvider.prototype.minerInitialPledgeCollateral = function (address, sectorPreCommitInfo, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var deposit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerInitialPledgeCollateral(address, sectorPreCommitInfo, tipSetKey)];
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
    BaseWalletProvider.prototype.minerAvailableBalance = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerAvailableBalance(address, tipSetKey)];
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
    BaseWalletProvider.prototype.sectorPreCommitInfo = function (address, sector, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var preCommitInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.sectorPreCommitInfo(address, sector, tipSetKey)];
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
    BaseWalletProvider.prototype.sectorGetInfo = function (address, sector, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.sectorGetInfo(address, sector, tipSetKey)];
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
    BaseWalletProvider.prototype.sectorExpiration = function (address, sector, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorExpiration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.sectorExpiration(address, sector, tipSetKey)];
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
    BaseWalletProvider.prototype.sectorPartition = function (address, sector, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectorLocation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.sectorPartition(address, sector, tipSetKey)];
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
    BaseWalletProvider.prototype.searchMsg = function (cid) {
        return __awaiter(this, void 0, void 0, function () {
            var lookup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.searchMsg(cid)];
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
    BaseWalletProvider.prototype.listMiners = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var miners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.listMiners(tipSetKey)];
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
    BaseWalletProvider.prototype.listActors = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var miners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.listActors(tipSetKey)];
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
    BaseWalletProvider.prototype.marketBalance = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var marketBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.marketBalance(address, tipSetKey)];
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
    BaseWalletProvider.prototype.marketParticipants = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var marketBalanceMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.marketParticipants(tipSetKey)];
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
    BaseWalletProvider.prototype.marketDeals = function (tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var marketDealsMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.marketDeals(tipSetKey)];
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
    BaseWalletProvider.prototype.marketStorageDeal = function (dealId, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var marketDeal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.marketStorageDeal(dealId, tipSetKey)];
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
    BaseWalletProvider.prototype.lookupId = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.lookupId(address, tipSetKey)];
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
    BaseWalletProvider.prototype.accountKey = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.accountKey(address, tipSetKey)];
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
    BaseWalletProvider.prototype.changedActors = function (cid1, cid2) {
        return __awaiter(this, void 0, void 0, function () {
            var actors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.changedActors(cid1, cid2)];
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
    BaseWalletProvider.prototype.getReceipt = function (cid, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var receipt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.getReceipt(cid, tipSetKey)];
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
    BaseWalletProvider.prototype.minerSectorCount = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var sectors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.minerSectorCount(address, tipSetKey)];
                    case 1:
                        sectors = _a.sent();
                        return [2 /*return*/, sectors];
                }
            });
        });
    };
    //Multisig wallet methods
    /**
    * returns the vesting details of a given multisig.
    * @param address
    * @param tipSetKey
    */
    BaseWalletProvider.prototype.msigGetVestingSchedule = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var schedule;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.getVestingSchedule(address, tipSetKey)];
                    case 1:
                        schedule = _a.sent();
                        return [2 /*return*/, schedule];
                }
            });
        });
    };
    /**
     * returns the portion of a multisig's balance that can be withdrawn or spent
     * @param address
     * @param tipSetKey
     */
    BaseWalletProvider.prototype.msigGetAvailableBalance = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.getAvailableBalance(address, tipSetKey)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns the amount of FIL that vested in a multisig in a certain period.
     * @param address
     * @param startEpoch
     * @param endEpoch
     */
    BaseWalletProvider.prototype.msigGetVested = function (address, startEpoch, endEpoch) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.getVested(address, startEpoch, endEpoch)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    return BaseWalletProvider;
}());
exports.BaseWalletProvider = BaseWalletProvider;
//# sourceMappingURL=BaseWalletProvider.js.map