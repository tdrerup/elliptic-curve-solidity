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
import * as filecoin_signer from '@zondax/filecoin-signing-tools';
import { DEFAULT_HD_PATH } from '../providers/Types';
var MnemonicSigner = /** @class */ (function () {
    function MnemonicSigner(mnemonic, password, path) {
        if (path === void 0) { path = DEFAULT_HD_PATH; }
        this.mnemonic = mnemonic;
        this.password = password;
        this.privKeys = [];
        this.addresses = [];
        this.defaultAddressIndex = 0;
        this.hdIndex = 0;
        var pathParts = path.split('/');
        if (pathParts.length === 6) {
            var hdPathIndex = pathParts.splice(pathParts.length - 1, 1);
            this.hdIndex = parseInt(hdPathIndex[0].replace("'", ""));
        }
        this.path = pathParts.join('/');
    }
    MnemonicSigner.prototype.initAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = filecoin_signer).keyDerive;
                        return [4 /*yield*/, this.getMnemonic()];
                    case 1:
                        _c = [_d.sent(), this.path];
                        return [4 /*yield*/, this.getPassword()];
                    case 2:
                        key = _b.apply(_a, _c.concat([_d.sent()]));
                        this.addresses.push(key.address);
                        this.privKeys[key.address] = key.private_hexstring;
                        return [2 /*return*/];
                }
            });
        });
    };
    MnemonicSigner.prototype.getAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.addresses.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initAddresses()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.addresses.filter(function (a, i) { return a != ''; })];
                }
            });
        });
    };
    MnemonicSigner.prototype.newAddress = function (n) {
        return __awaiter(this, void 0, void 0, function () {
            var i, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.addresses.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initAddresses()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        for (i = 0; i < n; i++) {
                            key = filecoin_signer.keyDerive(this.mnemonic, this.path + "/" + (i + this.hdIndex), '');
                            this.addresses.push(key.address);
                            this.privKeys[key.address] = key.private_hexstring;
                        }
                        this.hdIndex += n;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    MnemonicSigner.prototype.deleteAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var addressIndex, addresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressIndex = this.addresses.indexOf(address);
                        if (!(addressIndex >= 0)) return [3 /*break*/, 3];
                        this.addresses[addressIndex] = '';
                        this.privKeys[address] = '';
                        if (!(this.defaultAddressIndex === addressIndex)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAddresses()];
                    case 1:
                        addresses = _a.sent();
                        if (!(addresses.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setDefaultAddress(addresses[0])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MnemonicSigner.prototype.getPrivateKey = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.privKeys[address]];
            });
        });
    };
    ;
    MnemonicSigner.prototype.getDefaultAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.addresses.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initAddresses()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.addresses[this.defaultAddressIndex]];
                }
            });
        });
    };
    MnemonicSigner.prototype.setDefaultAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var addressIndex;
            return __generator(this, function (_a) {
                addressIndex = this.addresses.indexOf(address);
                if (addressIndex >= 0) {
                    this.defaultAddressIndex = addressIndex;
                }
                return [2 /*return*/];
            });
        });
    };
    MnemonicSigner.prototype.hasAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.addresses.indexOf(address) >= 0];
            });
        });
    };
    MnemonicSigner.prototype.sign = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var key, signedTx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.addresses.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initAddresses()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.privKeys[message.From]) {
                            throw new Error('From address not found');
                        }
                        key = this.privKeys[message.From];
                        signedTx = filecoin_signer.transactionSignLotus(this.messageToSigner(message), key);
                        return [2 /*return*/, JSON.parse(signedTx)];
                }
            });
        });
    };
    MnemonicSigner.prototype.getPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof this.password == 'string')) return [3 /*break*/, 1];
                        _a = this.password;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.password()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    MnemonicSigner.prototype.getMnemonic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof this.mnemonic == 'string')) return [3 /*break*/, 1];
                        _a = this.mnemonic;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.mnemonic()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    MnemonicSigner.prototype.messageToSigner = function (message) {
        return {
            to: message.To,
            from: message.From,
            nonce: message.Nonce,
            value: message.Value.toString(),
            gaslimit: Number(message.GasLimit.toString()),
            gasfeecap: message.GasFeeCap.toString(),
            gaspremium: message.GasPremium.toString(),
            method: message.Method,
            params: message.Params,
        };
    };
    return MnemonicSigner;
}());
export { MnemonicSigner };
//# sourceMappingURL=MnemonicSigner.js.map