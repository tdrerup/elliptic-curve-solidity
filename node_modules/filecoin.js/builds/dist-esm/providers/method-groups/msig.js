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
 * The Msig methods are used to interact with multisig wallets on the filecoin network
 */
var JsonRpcMsigMethodGroup = /** @class */ (function () {
    function JsonRpcMsigMethodGroup(conn) {
        this.conn = conn;
    }
    /**
     * returns the portion of a multisig's balance that can be withdrawn or spent
     * @param address
     * @param tipSetKey
     */
    JsonRpcMsigMethodGroup.prototype.getAvailableBalance = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MsigGetAvailableBalance', params: [address, tipSetKey] })];
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
    JsonRpcMsigMethodGroup.prototype.getVested = function (address, startEpoch, endEpoch) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.MsigGetVested', params: [address, startEpoch, endEpoch] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * creates a multisig wallet
     * @param requiredNumberOfSenders
     * @param approvingAddresses
     * @param unlockDuration
     * @param initialBalance
     * @param senderAddressOfCreateMsg
     * @param gasPrice
     */
    JsonRpcMsigMethodGroup.prototype.create = function (requiredNumberOfSenders, approvingAddresses, unlockDuration, initialBalance, senderAddressOfCreateMsg, gasPrice) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigCreate',
                            params: [
                                requiredNumberOfSenders,
                                approvingAddresses,
                                unlockDuration,
                                initialBalance,
                                senderAddressOfCreateMsg,
                                gasPrice
                            ]
                        })];
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
     * @param methodToCallInProposeMsg
     * @param paramsToIncludeInProposeMsg
     */
    JsonRpcMsigMethodGroup.prototype.propose = function (address, recipientAddres, value, senderAddressOfProposeMsg, methodToCallInProposeMsg, paramsToIncludeInProposeMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigPropose',
                            params: [
                                address,
                                recipientAddres,
                                value,
                                senderAddressOfProposeMsg,
                                methodToCallInProposeMsg,
                                paramsToIncludeInProposeMsg
                            ]
                        })];
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
    JsonRpcMsigMethodGroup.prototype.approve = function (address, proposedTransactionId, signerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigApprove',
                            params: [
                                address,
                                proposedTransactionId,
                                signerAddress
                            ]
                        })];
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
     * @param methodToCallInProposeMsg
     * @param paramsToIncludeInProposeMsg
     */
    JsonRpcMsigMethodGroup.prototype.approveTxnHash = function (address, proposedMessageId, proposerAddress, recipientAddres, value, senderAddressOfApproveMsg, methodToCallInProposeMsg, paramsToIncludeInProposeMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigApproveTxnHash',
                            params: [
                                address,
                                proposedMessageId,
                                proposerAddress,
                                recipientAddres,
                                value,
                                senderAddressOfApproveMsg,
                                methodToCallInProposeMsg,
                                paramsToIncludeInProposeMsg
                            ]
                        })];
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
     * @param methodToCallInProposeMsg
     * @param paramsToIncludeInProposeMsg
     */
    JsonRpcMsigMethodGroup.prototype.cancel = function (address, proposedMessageId, proposerAddress, recipientAddres, value, senderAddressOfCancelMsg, methodToCallInProposeMsg, paramsToIncludeInProposeMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigCancel',
                            params: [
                                address,
                                proposedMessageId,
                                proposerAddress,
                                recipientAddres,
                                value,
                                senderAddressOfCancelMsg,
                                methodToCallInProposeMsg,
                                paramsToIncludeInProposeMsg
                            ]
                        })];
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
    JsonRpcMsigMethodGroup.prototype.addPropose = function (address, senderAddressOfProposeMsg, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigAddPropose',
                            params: [
                                address,
                                senderAddressOfProposeMsg,
                                newSignerAddress,
                                increaseNumberOfRequiredSigners
                            ]
                        })];
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
    JsonRpcMsigMethodGroup.prototype.addApprove = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigAddApprove',
                            params: [
                                address,
                                senderAddressOfApproveMsg,
                                proposedMessageId,
                                proposerAddress,
                                newSignerAddress,
                                increaseNumberOfRequiredSigners
                            ]
                        })];
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
    JsonRpcMsigMethodGroup.prototype.addCancel = function (address, senderAddressOfCancelMsg, proposedMessageId, newSignerAddress, increaseNumberOfRequiredSigners) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigAddCancel',
                            params: [
                                address,
                                senderAddressOfCancelMsg,
                                proposedMessageId,
                                newSignerAddress,
                                increaseNumberOfRequiredSigners
                            ]
                        })];
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
    JsonRpcMsigMethodGroup.prototype.swapPropose = function (address, senderAddressOfProposeMsg, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigSwapPropose',
                            params: [
                                address,
                                senderAddressOfProposeMsg,
                                oldSignerAddress,
                                newSignerAddress
                            ]
                        })];
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
    JsonRpcMsigMethodGroup.prototype.swapApprove = function (address, senderAddressOfApproveMsg, proposedMessageId, proposerAddress, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigSwapApprove',
                            params: [
                                address,
                                senderAddressOfApproveMsg,
                                proposedMessageId,
                                proposerAddress,
                                oldSignerAddress,
                                newSignerAddress,
                            ]
                        })];
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
    JsonRpcMsigMethodGroup.prototype.swapCancel = function (address, senderAddressOfCancelMsg, proposedMessageId, oldSignerAddress, newSignerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigSwapCancel',
                            params: [
                                address,
                                senderAddressOfCancelMsg,
                                proposedMessageId,
                                oldSignerAddress,
                                newSignerAddress,
                            ]
                        })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * returns the vesting details of a given multisig.
     * @param address
     * @param tipSetKey
     */
    JsonRpcMsigMethodGroup.prototype.getVestingSchedule = function (address, tipSetKey) {
        return __awaiter(this, void 0, void 0, function () {
            var schedule;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigGetVestingSchedule',
                            params: [
                                address,
                                tipSetKey
                            ]
                        })];
                    case 1:
                        schedule = _a.sent();
                        return [2 /*return*/, schedule];
                }
            });
        });
    };
    /**
     * proposes the removal of a signer from the multisig.
     * @param msigAddress
     * @param proposerAddress
     * @param toRemoveAddress
     * @param decrease
     *
     * @remarks It accepts the multisig to make the change on, the proposer address to send the message from, the address to be removed, and a boolean indicating whether or not the signing threshold should be lowered by one along with the address removal.
     */
    JsonRpcMsigMethodGroup.prototype.removeSigner = function (msigAddress, proposerAddress, toRemoveAddress, decrease) {
        return __awaiter(this, void 0, void 0, function () {
            var cid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({
                            method: 'Filecoin.MsigRemoveSigner',
                            params: [
                                msigAddress,
                                proposerAddress,
                                toRemoveAddress,
                                decrease
                            ]
                        })];
                    case 1:
                        cid = _a.sent();
                        return [2 /*return*/, cid];
                }
            });
        });
    };
    return JsonRpcMsigMethodGroup;
}());
export { JsonRpcMsigMethodGroup };
//# sourceMappingURL=msig.js.map