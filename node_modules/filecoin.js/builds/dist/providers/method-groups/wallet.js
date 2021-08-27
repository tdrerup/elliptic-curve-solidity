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
exports.JsonRpcWalletMethodGroup = void 0;
var data_1 = require("../../utils/data");
var Types_1 = require("../Types");
var JsonRpcWalletMethodGroup = /** @class */ (function () {
    function JsonRpcWalletMethodGroup(conn) {
        this.conn = conn;
    }
    /**
     * creates a new address in the wallet with the given sigType.
     * @param type
     */
    JsonRpcWalletMethodGroup.prototype.new = function (type) {
        if (type === void 0) { type = Types_1.NewAddressType.SECP256K1; }
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletNew', params: [type] })];
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
    JsonRpcWalletMethodGroup.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletList' })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * get balance for address
     * @param address
     */
    JsonRpcWalletMethodGroup.prototype.balance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletBalance', params: [address] })];
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
    JsonRpcWalletMethodGroup.prototype.delete = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletDelete', params: [address] })];
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
    JsonRpcWalletMethodGroup.prototype.has = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletHas', params: [address] })];
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
    JsonRpcWalletMethodGroup.prototype.setDefault = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletSetDefault', params: [address] })];
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
    JsonRpcWalletMethodGroup.prototype.export = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletExport', params: [address] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * walletImport returns the private key of an address in the wallet.
     * @param keyInfo
     */
    JsonRpcWalletMethodGroup.prototype.import = function (keyInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletImport', params: [keyInfo] })];
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
    JsonRpcWalletMethodGroup.prototype.getDefaultAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletDefaultAddress' })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    //Signer methods
    /**
     * sign message
     * @param msg
     */
    JsonRpcWalletMethodGroup.prototype.signMessage = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var address, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDefaultAddress()];
                    case 1:
                        address = _a.sent();
                        return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletSignMessage', params: [address, msg] })];
                    case 2:
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
    JsonRpcWalletMethodGroup.prototype.sign = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var address, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDefaultAddress()];
                    case 1:
                        address = _a.sent();
                        data = data_1.toBase64(data);
                        return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletSign', params: [address, data] })];
                    case 2:
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
    JsonRpcWalletMethodGroup.prototype.verify = function (address, data, sign) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = data_1.toBase64(data);
                        return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletVerify', params: [address, data, sign] })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /**
     * validates whether a given string can be decoded as a well-formed address
     * @param address
     */
    JsonRpcWalletMethodGroup.prototype.validateAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var addressResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.WalletValidateAddress', params: [address] })];
                    case 1:
                        addressResponse = _a.sent();
                        return [2 /*return*/, addressResponse];
                }
            });
        });
    };
    return JsonRpcWalletMethodGroup;
}());
exports.JsonRpcWalletMethodGroup = JsonRpcWalletMethodGroup;
//# sourceMappingURL=wallet.js.map