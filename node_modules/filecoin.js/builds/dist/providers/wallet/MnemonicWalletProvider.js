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
exports.MnemonicWalletProvider = void 0;
var Types_1 = require("../Types");
var BaseWalletProvider_1 = require("./BaseWalletProvider");
var MnemonicSigner_1 = require("../../signers/MnemonicSigner");
var filecoin_signing_tools_1 = require("@zondax/filecoin-signing-tools");
var ipld_dag_cbor_1 = __importDefault(require("ipld-dag-cbor"));
var cids_1 = __importDefault(require("cids"));
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var msig_1 = require("../../utils/msig");
var MnemonicWalletProvider = /** @class */ (function (_super) {
    __extends(MnemonicWalletProvider, _super);
    function MnemonicWalletProvider(client, mnemonic, path) {
        if (path === void 0) { path = Types_1.DEFAULT_HD_PATH; }
        var _this = _super.call(this, client) || this;
        if (path === 'test' || path === '')
            path = Types_1.TEST_DEFAULT_HD_PATH;
        _this.signer = new MnemonicSigner_1.MnemonicSigner(mnemonic, '', path);
        return _this;
    }
    MnemonicWalletProvider.prototype.newAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var addresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signer.newAddress(1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getAddresses()];
                    case 2:
                        addresses = _a.sent();
                        return [2 /*return*/, addresses[addresses.length - 1]];
                }
            });
        });
    };
    MnemonicWalletProvider.prototype.deleteAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.signer.deleteAddress(address);
                return [2 /*return*/];
            });
        });
    };
    MnemonicWalletProvider.prototype.hasAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.signer.hasAddress(address)];
            });
        });
    };
    MnemonicWalletProvider.prototype.exportPrivateKey = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var pk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signer.getPrivateKey(address)];
                    case 1:
                        pk = _a.sent();
                        return [2 /*return*/, {
                                Type: '1',
                                PrivateKey: pk,
                            }];
                }
            });
        });
    };
    MnemonicWalletProvider.prototype.getAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.signer.getAddresses()];
            });
        });
    };
    MnemonicWalletProvider.prototype.getDefaultAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signer.getDefaultAddress()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MnemonicWalletProvider.prototype.setDefaultAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.signer.setDefaultAddress(address);
                return [2 /*return*/];
            });
        });
    };
    MnemonicWalletProvider.prototype.sendMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var signedMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signMessage(msg)];
                    case 1:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, signedMessage];
                }
            });
        });
    };
    MnemonicWalletProvider.prototype.signMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signer.sign(msg)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MnemonicWalletProvider.prototype.sign = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, undefined];
            });
        });
    };
    MnemonicWalletProvider.prototype.verify = function (address, data, sign) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, undefined];
            });
        });
    };
    MnemonicWalletProvider.prototype.getSigner = function () {
        return this.signer;
    };
    //MultisigProvider Implementation
    /**
     * creates a multisig wallet
     * @param requiredNumberOfSenders
     * @param approvingAddresses
     * @param startEpoch
     * @param unlockDuration
     * @param initialBalance
     * @param senderAddressOfCreateMsg
     */
    MnemonicWalletProvider.prototype.msigCreate = function (requiredNumberOfSenders, approvingAddresses, startEpoch, unlockDuration, initialBalance, senderAddressOfCreateMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var addresses, constructorParams, serializedConstructorParams, MultisigActorCodeID, execParams, serializedParams, buff, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addresses = [];
                        approvingAddresses.forEach(function (address) {
                            addresses.push(filecoin_signing_tools_1.addressAsBytes(address));
                        });
                        constructorParams = [addresses, requiredNumberOfSenders, unlockDuration, startEpoch];
                        serializedConstructorParams = ipld_dag_cbor_1.default.util.serialize(constructorParams);
                        MultisigActorCodeID = new cids_1.default('bafkqadtgnfwc6mrpnv2wy5djonuwo');
                        execParams = [
                            MultisigActorCodeID,
                            serializedConstructorParams,
                        ];
                        serializedParams = ipld_dag_cbor_1.default.util.serialize(execParams);
                        buff = Buffer.from(serializedParams);
                        messageWithoutGasParams = {
                            From: senderAddressOfCreateMsg,
                            To: "t01",
                            Value: new bignumber_js_1.default(initialBalance),
                            Method: Types_1.MethodInit.Exec,
                            Params: buff.toString('base64')
                        };
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 1:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 2:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 3:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * proposes a multisig message
     * @param address
     * @param recipientAddres
     * @param value
     * @param senderAddressOfProposeMsg
     */
    MnemonicWalletProvider.prototype.msigProposeTransfer = function (address, recipientAddres, value, senderAddressOfProposeMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var params, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [];
                        return [4 /*yield*/, msig_1.createProposeMessage(address, senderAddressOfProposeMsg, recipientAddres, value, 0, params)];
                    case 1:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 2:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 3:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 4:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * approves a previously-proposed multisig message by transaction ID
     * @param address
     * @param proposedTransactionId
     * @param signerAddress
     */
    MnemonicWalletProvider.prototype.msigApproveTransfer = function (address, proposedTransactionId, signerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    /**
     * approves a previously-proposed multisig message
     * @param address
     * @param proposedMessageId
     * @param proposerAddress
     * @param recipientAddres
     * @param value
     * @param senderAddressOfApproveMsg
     */
    MnemonicWalletProvider.prototype.msigApproveTransferTxHash = function (address, proposedMessageId, proposerAddress, recipientAddres, value, senderAddressOfApproveMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.lookupId(proposerAddress)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, msig_1.createApproveMessage(address, senderAddressOfApproveMsg, proposedMessageId, proposerId, recipientAddres, 0, value, [])];
                    case 2:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 3:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 4:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 5:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * cancels a previously-proposed multisig message
     * @param address
     * @param senderAddressOfCancelMsg
     * @param proposedMessageId
     * @param recipientAddres
     * @param value
     */
    MnemonicWalletProvider.prototype.msigCancelTransfer = function (address, senderAddressOfCancelMsg, proposedMessageId, recipientAddres, value) {
        return __awaiter(this, void 0, void 0, function () {
            var proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.lookupId(senderAddressOfCancelMsg)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, msig_1.createCancelMessage(address, senderAddressOfCancelMsg, proposedMessageId, proposerId, recipientAddres, 0, value, [])];
                    case 2:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 3:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 4:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 5:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * proposes adding a signer in the multisig
     * @param address
     * @param senderAddressOfProposeMsg
     * @param newSignerAddress
     * @param increaseNumberOfRequiredSigners
     */
    MnemonicWalletProvider.prototype.msigProposeAddSigner = function (address, senderAddressOfProposeMsg, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var params, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [filecoin_signing_tools_1.addressAsBytes(newSignerAddress), increaseNumberOfRequiredSigners];
                        return [4 /*yield*/, msig_1.createProposeMessage(address, senderAddressOfProposeMsg, address, '0', Types_1.MethodMultisig.AddSigner, params)];
                    case 1:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 2:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 3:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 4:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * approves a previously proposed AddSigner message
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param proposerAddress
     * @param newSignerAddress
     * @param increaseNumberOfRequiredSigners
     */
    MnemonicWalletProvider.prototype.msigApproveAddSigner = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [filecoin_signing_tools_1.addressAsBytes(newSignerAddress), increaseNumberOfRequiredSigners];
                        return [4 /*yield*/, this.client.state.lookupId(proposerAddress)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, msig_1.createApproveMessage(address, senderAddressOfApproveMsg, proposedMessageId, proposerId, address, Types_1.MethodMultisig.AddSigner, '0', values)];
                    case 2:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 3:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 4:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 5:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * cancels a previously proposed AddSigner message
     * @param address
     * @param senderAddressOfCancelMsg
     * @param proposedMessageId
     * @param newSignerAddress
     * @param increaseNumberOfRequiredSigners
     */
    MnemonicWalletProvider.prototype.msigCancelAddSigner = function (address, senderAddressOfCancelMsg, proposedMessageId, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [filecoin_signing_tools_1.addressAsBytes(newSignerAddress), increaseNumberOfRequiredSigners];
                        return [4 /*yield*/, this.client.state.lookupId(senderAddressOfCancelMsg)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, msig_1.createCancelMessage(address, senderAddressOfCancelMsg, proposedMessageId, proposerId, address, Types_1.MethodMultisig.AddSigner, '0', values)];
                    case 2:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 3:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 4:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 5:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * proposes swapping 2 signers in the multisig
     * @param address
     * @param senderAddressOfProposeMsg
     * @param oldSignerAddress
     * @param newSignerAddress
     */
    MnemonicWalletProvider.prototype.msigProposeSwapSigner = function (address, senderAddressOfProposeMsg, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var params, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [filecoin_signing_tools_1.addressAsBytes(oldSignerAddress), filecoin_signing_tools_1.addressAsBytes(newSignerAddress)];
                        return [4 /*yield*/, msig_1.createProposeMessage(address, senderAddressOfProposeMsg, address, '0', Types_1.MethodMultisig.SwapSigner, params)];
                    case 1:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 2:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 3:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 4:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * approves a previously proposed SwapSigner
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param proposerAddress
     * @param oldSignerAddress
     * @param newSignerAddress
     */
    MnemonicWalletProvider.prototype.msigApproveSwapSigner = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [filecoin_signing_tools_1.addressAsBytes(oldSignerAddress), filecoin_signing_tools_1.addressAsBytes(newSignerAddress)];
                        return [4 /*yield*/, this.client.state.lookupId(proposerAddress)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, msig_1.createApproveMessage(address, senderAddressOfApproveMsg, proposedMessageId, proposerId, address, Types_1.MethodMultisig.SwapSigner, '0', values)];
                    case 2:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 3:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 4:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 5:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * cancels a previously proposed SwapSigner message
     * @param address
     * @param senderAddressOfCancelMsg
     * @param proposedMessageId
     * @param oldSignerAddress
     * @param newSignerAddress
     */
    MnemonicWalletProvider.prototype.msigCancelSwapSigner = function (address, senderAddressOfCancelMsg, proposedMessageId, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [filecoin_signing_tools_1.addressAsBytes(oldSignerAddress), filecoin_signing_tools_1.addressAsBytes(newSignerAddress)];
                        return [4 /*yield*/, this.client.state.lookupId(senderAddressOfCancelMsg)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, msig_1.createCancelMessage(address, senderAddressOfCancelMsg, proposedMessageId, proposerId, address, Types_1.MethodMultisig.SwapSigner, '0', values)];
                    case 2:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 3:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 4:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 5:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    /**
     * proposes removing a signer from the multisig
     * @param address
     * @param senderAddressOfProposeMsg
     * @param addressToRemove
     * @param decreaseNumberOfRequiredSigners
     */
    MnemonicWalletProvider.prototype.msigProposeRemoveSigner = function (address, senderAddressOfProposeMsg, addressToRemove, decreaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var params, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [filecoin_signing_tools_1.addressAsBytes(addressToRemove), decreaseNumberOfRequiredSigners];
                        return [4 /*yield*/, msig_1.createProposeMessage(address, senderAddressOfProposeMsg, address, '0', Types_1.MethodMultisig.RemoveSigner, params)];
                    case 1:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 2:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 3:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 4:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    ;
    /**
     * approves a previously proposed RemoveSigner message
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param proposerAddress
     * @param addressToRemove
     * @param decreaseNumberOfRequiredSigners
     */
    MnemonicWalletProvider.prototype.msigApproveRemoveSigner = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, addressToRemove, decreaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [filecoin_signing_tools_1.addressAsBytes(addressToRemove), decreaseNumberOfRequiredSigners];
                        return [4 /*yield*/, this.client.state.lookupId(proposerAddress)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, msig_1.createApproveMessage(address, senderAddressOfApproveMsg, proposedMessageId, proposerId, address, Types_1.MethodMultisig.RemoveSigner, '0', values)];
                    case 2:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 3:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 4:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 5:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    ;
    /**
     * cancels a previously proposed RemoveSigner message
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param addressToRemove
     * @param decreaseNumberOfRequiredSigners
     */
    MnemonicWalletProvider.prototype.msigCancelRemoveSigner = function (address, senderAddressOfCancelMsg, proposedMessageId, addressToRemove, decreaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [filecoin_signing_tools_1.addressAsBytes(addressToRemove), decreaseNumberOfRequiredSigners];
                        return [4 /*yield*/, this.client.state.lookupId(senderAddressOfCancelMsg)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, msig_1.createCancelMessage(address, senderAddressOfCancelMsg, proposedMessageId, proposerId, address, Types_1.MethodMultisig.RemoveSigner, '0', values)];
                    case 2:
                        messageWithoutGasParams = _a.sent();
                        return [4 /*yield*/, this.createMessage(messageWithoutGasParams)];
                    case 3:
                        message = _a.sent();
                        return [4 /*yield*/, this.signMessage(message)];
                    case 4:
                        signedMessage = _a.sent();
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 5:
                        msgCid = _a.sent();
                        return [2 /*return*/, msgCid];
                }
            });
        });
    };
    ;
    return MnemonicWalletProvider;
}(BaseWalletProvider_1.BaseWalletProvider));
exports.MnemonicWalletProvider = MnemonicWalletProvider;
//# sourceMappingURL=MnemonicWalletProvider.js.map