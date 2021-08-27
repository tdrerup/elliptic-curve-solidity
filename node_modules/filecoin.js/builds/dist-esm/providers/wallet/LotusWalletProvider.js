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
import { NewAddressType } from '../Types';
import { BaseWalletProvider } from './BaseWalletProvider';
var LotusWalletProvider = /** @class */ (function (_super) {
    __extends(LotusWalletProvider, _super);
    function LotusWalletProvider(client) {
        return _super.call(this, client) || this;
    }
    // WaletProvider implementation
    /**
     * create new wallet
     * @param type
     */
    LotusWalletProvider.prototype.newAddress = function (type) {
        if (type === void 0) { type = NewAddressType.SECP256K1; }
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.new(type)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * delete address from lotus
     * @param address
     */
    LotusWalletProvider.prototype.deleteAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.delete(address)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * get wallet list
     */
    LotusWalletProvider.prototype.getAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.list()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * check if address is in keystore
     * @param address
     */
    LotusWalletProvider.prototype.hasAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.has(address)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * set default address
     * @param address
     */
    LotusWalletProvider.prototype.setDefaultAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.setDefault(address)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * get default address
     */
    LotusWalletProvider.prototype.getDefaultAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.getDefaultAddress()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * walletExport returns the private key of an address in the wallet.
     * @param address
     */
    LotusWalletProvider.prototype.exportPrivateKey = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.export(address)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
    * send message, signed with default lotus wallet
    * @param msg
    */
    LotusWalletProvider.prototype.sendMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mpool.pushMessage(msg)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * sign message
     * @param msg
     */
    LotusWalletProvider.prototype.signMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.signMessage(msg)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * sign raw message
     * @param data
     */
    LotusWalletProvider.prototype.sign = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.sign(data)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * verify message signature
     * @param data
     * @param sign
     */
    LotusWalletProvider.prototype.verify = function (address, data, sign) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.verify(address, data, sign)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
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
    LotusWalletProvider.prototype.msigCreate = function (requiredNumberOfSenders, approvingAddresses, startEpoch, unlockDuration, initialBalance, senderAddressOfCreateMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.create(requiredNumberOfSenders, approvingAddresses, unlockDuration, initialBalance, senderAddressOfCreateMsg, '0')];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigProposeTransfer = function (address, recipientAddres, value, senderAddressOfProposeMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.propose(address, recipientAddres, value, senderAddressOfProposeMsg, 0, [])];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigApproveTransfer = function (address, proposedTransactionId, signerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.approve(address, proposedTransactionId, signerAddress)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
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
    LotusWalletProvider.prototype.msigApproveTransferTxHash = function (address, proposedMessageId, proposerAddress, recipientAddres, value, senderAddressOfApproveMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.approveTxnHash(address, proposedMessageId, proposerAddress, recipientAddres, value, senderAddressOfApproveMsg, 0, [])];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigCancelTransfer = function (address, senderAddressOfCancelMsg, proposedMessageId, recipientAddres, value) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.cancel(address, proposedMessageId, senderAddressOfCancelMsg, recipientAddres, value, senderAddressOfCancelMsg, 0, [])];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigProposeAddSigner = function (address, senderAddressOfProposeMsg, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.addPropose(address, senderAddressOfProposeMsg, newSignerAddress, increaseNumberOfRequiredSigners)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigApproveAddSigner = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.addApprove(address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, newSignerAddress, increaseNumberOfRequiredSigners)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigCancelAddSigner = function (address, senderAddressOfCancelMsg, proposedMessageId, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.addCancel(address, senderAddressOfCancelMsg, proposedMessageId, newSignerAddress, increaseNumberOfRequiredSigners)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigProposeSwapSigner = function (address, senderAddressOfProposeMsg, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.swapPropose(address, senderAddressOfProposeMsg, oldSignerAddress, newSignerAddress)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigApproveSwapSigner = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.swapApprove(address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, oldSignerAddress, newSignerAddress)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigCancelSwapSigner = function (address, senderAddressOfCancelMsg, proposedMessageId, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.swapCancel(address, senderAddressOfCancelMsg, proposedMessageId, oldSignerAddress, newSignerAddress)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigProposeRemoveSigner = function (address, senderAddressOfProposeMsg, addressToRemove, decreaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.msig.removeSigner(address, senderAddressOfProposeMsg, addressToRemove, decreaseNumberOfRequiredSigners)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
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
    LotusWalletProvider.prototype.msigApproveRemoveSigner = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, addressToRemove, decreaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, undefined];
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
    LotusWalletProvider.prototype.msigCancelRemoveSigner = function (address, senderAddressOfCancelMsg, proposedMessageId, addressToRemove, decreaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, undefined];
            });
        });
    };
    ;
    // Own functions
    /**
     * walletImport returns the private key of an address in the wallet.
     * @param keyInfo
     */
    LotusWalletProvider.prototype.walletImport = function (keyInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.wallet.import(keyInfo)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    return LotusWalletProvider;
}(BaseWalletProvider));
export { LotusWalletProvider };
//# sourceMappingURL=LotusWalletProvider.js.map