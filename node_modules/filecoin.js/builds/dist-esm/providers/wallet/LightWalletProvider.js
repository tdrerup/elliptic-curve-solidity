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
import { DEFAULT_HD_PATH, TEST_DEFAULT_HD_PATH, MethodMultisig, MethodInit } from "../Types";
import { BaseWalletProvider } from "./BaseWalletProvider";
import { Keystore } from "../../utils/keystore";
import { LightWalletSigner } from "../../signers/LightWalletSigner";
import { addressAsBytes } from "@zondax/filecoin-signing-tools";
import cbor from "ipld-dag-cbor";
import cid from "cids";
import BigNumber from "bignumber.js";
import { createApproveMessage, createCancelMessage, createProposeMessage } from "../../utils/msig";
var LightWalletProvider = /** @class */ (function (_super) {
    __extends(LightWalletProvider, _super);
    function LightWalletProvider(client, pwdCallback, path) {
        if (path === void 0) { path = DEFAULT_HD_PATH; }
        var _this = _super.call(this, client) || this;
        _this.hdPathString = DEFAULT_HD_PATH;
        _this.pwdCallback = pwdCallback;
        if (path === 'test' || !path)
            _this.hdPathString = TEST_DEFAULT_HD_PATH;
        return _this;
    }
    LightWalletProvider.prototype.newAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var addresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keystore.newAddress(1, this.pwdCallback())];
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
    LightWalletProvider.prototype.deleteAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keystore.deleteAddress(address, this.pwdCallback())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LightWalletProvider.prototype.hasAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.keystore.hasAddress(address)];
            });
        });
    };
    LightWalletProvider.prototype.exportPrivateKey = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var pk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keystore.getPrivateKey(address, this.pwdCallback())];
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
    LightWalletProvider.prototype.getAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keystore.getAddresses()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LightWalletProvider.prototype.getDefaultAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keystore.getDefaultAddress()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LightWalletProvider.prototype.setDefaultAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.keystore.setDefaultAddress(address);
                return [2 /*return*/];
            });
        });
    };
    LightWalletProvider.prototype.sendMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var signedMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signMessage(msg)];
                    case 1:
                        signedMessage = _a.sent();
                        if (!signedMessage) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sendSignedMessage(signedMessage)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, signedMessage];
                    case 3: return [2 /*return*/, undefined];
                }
            });
        });
    };
    LightWalletProvider.prototype.signMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.signer.sign(msg, this.pwdCallback())];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //todo
    LightWalletProvider.prototype.sign = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, undefined];
            });
        });
    };
    //todo
    LightWalletProvider.prototype.verify = function (address, data, sign) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, undefined];
            });
        });
    };
    //MultisigProvider Implementation
    /**
     * creates a multisig wallet
     * @param requiredNumberOfSenders
     * @param approvingAddresses
     * @param unlockDuration
     * @param initialBalance
     * @param senderAddressOfCreateMsg
     */
    LightWalletProvider.prototype.msigCreate = function (requiredNumberOfSenders, approvingAddresses, startEpoch, unlockDuration, initialBalance, senderAddressOfCreateMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var addresses, constructorParams, serializedConstructorParams, MultisigActorCodeID, execParams, serializedParams, buff, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addresses = [];
                        approvingAddresses.forEach(function (address) {
                            addresses.push(addressAsBytes(address));
                        });
                        constructorParams = [addresses, requiredNumberOfSenders, unlockDuration, startEpoch];
                        serializedConstructorParams = cbor.util.serialize(constructorParams);
                        MultisigActorCodeID = new cid('bafkqadtgnfwc6mrpnv2wy5djonuwo');
                        execParams = [
                            MultisigActorCodeID,
                            serializedConstructorParams,
                        ];
                        serializedParams = cbor.util.serialize(execParams);
                        buff = Buffer.from(serializedParams);
                        messageWithoutGasParams = {
                            From: senderAddressOfCreateMsg,
                            To: "t01",
                            Value: new BigNumber(initialBalance),
                            Method: MethodInit.Exec,
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
    LightWalletProvider.prototype.msigProposeTransfer = function (address, recipientAddres, value, senderAddressOfProposeMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var params, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [];
                        return [4 /*yield*/, createProposeMessage(address, senderAddressOfProposeMsg, recipientAddres, value, 0, params)];
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
    LightWalletProvider.prototype.msigApproveTransfer = function (address, proposedTransactionId, signerAddress) {
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
    LightWalletProvider.prototype.msigApproveTransferTxHash = function (address, proposedMessageId, proposerAddress, recipientAddres, value, senderAddressOfApproveMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.lookupId(proposerAddress)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, createApproveMessage(address, senderAddressOfApproveMsg, proposedMessageId, proposerId, recipientAddres, 0, value, [])];
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
     * @param proposedMessageId
     * @param proposerAddress
     * @param recipientAddres
     * @param value
     * @param senderAddressOfCancelMsg
     */
    LightWalletProvider.prototype.msigCancelTransfer = function (address, senderAddressOfCancelMsg, proposedMessageId, recipientAddres, value) {
        return __awaiter(this, void 0, void 0, function () {
            var proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.state.lookupId(senderAddressOfCancelMsg)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, createCancelMessage(address, senderAddressOfCancelMsg, proposedMessageId, proposerId, recipientAddres, 0, value, [])];
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
    LightWalletProvider.prototype.msigProposeAddSigner = function (address, senderAddressOfProposeMsg, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var params, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [addressAsBytes(newSignerAddress), increaseNumberOfRequiredSigners];
                        return [4 /*yield*/, createProposeMessage(address, senderAddressOfProposeMsg, address, '0', MethodMultisig.AddSigner, params)];
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
    LightWalletProvider.prototype.msigApproveAddSigner = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [addressAsBytes(newSignerAddress), increaseNumberOfRequiredSigners];
                        return [4 /*yield*/, this.client.state.lookupId(proposerAddress)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, createApproveMessage(address, senderAddressOfApproveMsg, proposedMessageId, proposerId, address, MethodMultisig.AddSigner, '0', values)];
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
    LightWalletProvider.prototype.msigCancelAddSigner = function (address, senderAddressOfCancelMsg, proposedMessageId, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [addressAsBytes(newSignerAddress), increaseNumberOfRequiredSigners];
                        return [4 /*yield*/, this.client.state.lookupId(senderAddressOfCancelMsg)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, createCancelMessage(address, senderAddressOfCancelMsg, proposedMessageId, proposerId, address, MethodMultisig.AddSigner, '0', values)];
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
    LightWalletProvider.prototype.msigProposeSwapSigner = function (address, senderAddressOfProposeMsg, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var params, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [addressAsBytes(oldSignerAddress), addressAsBytes(newSignerAddress)];
                        return [4 /*yield*/, createProposeMessage(address, senderAddressOfProposeMsg, address, '0', MethodMultisig.SwapSigner, params)];
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
    LightWalletProvider.prototype.msigApproveSwapSigner = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [addressAsBytes(oldSignerAddress), addressAsBytes(newSignerAddress)];
                        return [4 /*yield*/, this.client.state.lookupId(proposerAddress)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, createApproveMessage(address, senderAddressOfApproveMsg, proposedMessageId, proposerId, address, MethodMultisig.SwapSigner, '0', values)];
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
    LightWalletProvider.prototype.msigCancelSwapSigner = function (address, senderAddressOfCancelMsg, proposedMessageId, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [addressAsBytes(oldSignerAddress), addressAsBytes(newSignerAddress)];
                        return [4 /*yield*/, this.client.state.lookupId(senderAddressOfCancelMsg)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, createCancelMessage(address, senderAddressOfCancelMsg, proposedMessageId, proposerId, address, MethodMultisig.SwapSigner, '0', values)];
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
    LightWalletProvider.prototype.msigProposeRemoveSigner = function (address, senderAddressOfProposeMsg, addressToRemove, decreaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var params, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [addressAsBytes(addressToRemove), decreaseNumberOfRequiredSigners];
                        return [4 /*yield*/, createProposeMessage(address, senderAddressOfProposeMsg, address, '0', MethodMultisig.RemoveSigner, params)];
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
    LightWalletProvider.prototype.msigApproveRemoveSigner = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, addressToRemove, decreaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [addressAsBytes(addressToRemove), decreaseNumberOfRequiredSigners];
                        return [4 /*yield*/, this.client.state.lookupId(proposerAddress)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, createApproveMessage(address, senderAddressOfApproveMsg, proposedMessageId, proposerId, address, MethodMultisig.RemoveSigner, '0', values)];
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
    LightWalletProvider.prototype.msigCancelRemoveSigner = function (address, senderAddressOfCancelMsg, proposedMessageId, addressToRemove, decreaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var values, proposerId, messageWithoutGasParams, message, signedMessage, msgCid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = [addressAsBytes(addressToRemove), decreaseNumberOfRequiredSigners];
                        return [4 /*yield*/, this.client.state.lookupId(senderAddressOfCancelMsg)];
                    case 1:
                        proposerId = _a.sent();
                        return [4 /*yield*/, createCancelMessage(address, senderAddressOfCancelMsg, proposedMessageId, proposerId, address, MethodMultisig.RemoveSigner, '0', values)];
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
    // Own functions
    LightWalletProvider.prototype.createLightWallet = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var mnemonic;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.keystore = new Keystore();
                        mnemonic = this.keystore.generateRandomSeed();
                        return [4 /*yield*/, this.keystore.createVault({
                                hdPathString: this.hdPathString,
                                seedPhrase: mnemonic,
                                password: password,
                            })];
                    case 1:
                        _a.sent();
                        this.signer = new LightWalletSigner(this.keystore);
                        return [2 /*return*/, mnemonic];
                }
            });
        });
    };
    LightWalletProvider.prototype.recoverLightWallet = function (mnemonic, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.keystore = new Keystore();
                        return [4 /*yield*/, this.keystore.createVault({
                                hdPathString: this.hdPathString,
                                seedPhrase: mnemonic,
                                password: password,
                            })];
                    case 1:
                        _a.sent();
                        this.signer = new LightWalletSigner(this.keystore);
                        return [2 /*return*/];
                }
            });
        });
    };
    LightWalletProvider.prototype.loadLightWallet = function (encryptedWallet) {
        this.keystore = new Keystore();
        this.keystore.deserialize(encryptedWallet);
        this.signer = new LightWalletSigner(this.keystore);
    };
    LightWalletProvider.prototype.prepareToSave = function () {
        return this.keystore.serialize();
    };
    LightWalletProvider.prototype.getSigner = function () {
        return this.signer;
    };
    return LightWalletProvider;
}(BaseWalletProvider));
export { LightWalletProvider };
//# sourceMappingURL=LightWalletProvider.js.map