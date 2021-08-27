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
import { leftPadString } from '../utils/data';
import BitCore from 'bitcore-lib';
import Mnemonic from 'bitcore-mnemonic';
import Nacl from 'tweetnacl';
import NaclUtil from 'tweetnacl-util';
import ScryptAsync from 'scrypt-async';
import * as filecoin_signer from '@zondax/filecoin-signing-tools';
var Keystore = /** @class */ (function () {
    function Keystore() {
        this.version = 1;
        this.hdIndex = 0;
        this.defaultAddressIndex = 0;
        this._concatAndSha256 = function (entropyBuf0, entropyBuf1) {
            var totalEnt = Buffer.concat([entropyBuf0, entropyBuf1]);
            if (totalEnt.length !== entropyBuf0.length + entropyBuf1.length) {
                throw new Error('generateRandomSeed: Logic error! Concatenation of entropy sources failed.');
            }
            return BitCore.crypto.Hash.sha256(totalEnt);
        };
    }
    Keystore.prototype.serialize = function () {
        return JSON.stringify({
            encSeed: this.encSeed,
            addresses: this.addresses,
            encPrivKeys: this.encPrivKeys,
            hdPathString: this.hdPathString,
            salt: this.salt,
            hdIndex: this.hdIndex,
            version: this.version,
        });
    };
    ;
    Keystore.prototype.deserialize = function (keystore) {
        var dataKS = JSON.parse(keystore);
        var version = dataKS.version, salt = dataKS.salt, encSeed = dataKS.encSeed, encPrivKeys = dataKS.encPrivKeys, hdIndex = dataKS.hdIndex, hdPathString = dataKS.hdPathString, addresses = dataKS.addresses;
        this.salt = salt;
        this.hdPathString = hdPathString;
        this.encSeed = encSeed;
        this.version = version;
        this.hdIndex = hdIndex;
        this.encPrivKeys = encPrivKeys;
        this.addresses = addresses;
    };
    ;
    Keystore.prototype.init = function (mnemonic, pwDerivedKey, hdPathString, salt) {
        this.salt = salt;
        var pathParts = hdPathString.split('/');
        if (pathParts.length === 6) {
            var hdPathIndex = pathParts.splice(pathParts.length - 1, 1);
            this.hdIndex = parseInt(hdPathIndex[0].replace("'", ""));
        }
        this.hdPathString = pathParts.join('/');
        this.encSeed = undefined;
        this.encPrivKeys = {};
        this.addresses = [];
        if ((typeof pwDerivedKey !== 'undefined') && (typeof mnemonic !== 'undefined')) {
            var words = mnemonic.split(' ');
            if (!this.isSeedValid(mnemonic) || words.length !== 12) {
                throw new Error('KeyStore: Invalid mnemonic');
            }
            // Pad the seed to length 120 before encrypting
            var paddedSeed = leftPadString(mnemonic, ' ', 120);
            this.encSeed = this._encryptString(paddedSeed, pwDerivedKey);
            this.generateNewAddress(pwDerivedKey, 1);
        }
    };
    Keystore.prototype.createVault = function (opts) {
        return __awaiter(this, void 0, void 0, function () {
            var hdPathString, seedPhrase, password, salt, err, err, pwDerivedKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hdPathString = opts.hdPathString, seedPhrase = opts.seedPhrase, password = opts.password;
                        salt = opts.salt;
                        // Default hdPathString
                        if (!hdPathString) {
                            err = new Error("Keystore: Must include hdPathString in createVault inputs. Suggested value m/44'/461'/0/0/1");
                            return [2 /*return*/, err];
                        }
                        if (!seedPhrase) {
                            err = new Error('Keystore: Must include seedPhrase in createVault inputs.');
                            return [2 /*return*/, err];
                        }
                        if (!salt) {
                            salt = this.generateSalt(32);
                        }
                        return [4 /*yield*/, this.deriveKeyFromPasswordAndSalt(password, salt)];
                    case 1:
                        pwDerivedKey = _a.sent();
                        this.init(seedPhrase, pwDerivedKey, hdPathString, salt);
                        return [2 /*return*/, null];
                }
            });
        });
    };
    ;
    Keystore.prototype.generateSalt = function (byteCount) {
        return BitCore.crypto.Random.getRandomBuffer(byteCount || 32).toString('base64');
    };
    ;
    Keystore.prototype.isSeedValid = function (seed) {
        return Mnemonic.isValid(seed, Mnemonic.Words.ENGLISH);
    };
    ;
    Keystore.prototype._encryptString = function (string, pwDerivedKey) {
        var nonce = Nacl.randomBytes(Nacl.secretbox.nonceLength);
        var encStr = Nacl.secretbox(NaclUtil.decodeUTF8(string), nonce, pwDerivedKey);
        return {
            encStr: NaclUtil.encodeBase64(encStr),
            nonce: NaclUtil.encodeBase64(nonce),
        };
    };
    ;
    Keystore.prototype._decryptString = function (encryptedStr, pwDerivedKey) {
        var decStr = NaclUtil.decodeBase64(encryptedStr.encStr);
        var nonce = NaclUtil.decodeBase64(encryptedStr.nonce);
        var decryptedStr = Nacl.secretbox.open(decStr, nonce, pwDerivedKey);
        if (decryptedStr === null) {
            return false;
        }
        return NaclUtil.encodeUTF8(decryptedStr);
    };
    ;
    Keystore.prototype.encodeHex = function (msgUInt8Arr) {
        var msgBase64 = NaclUtil.encodeBase64(msgUInt8Arr);
        return (Buffer.from(msgBase64, 'base64')).toString('hex');
    };
    Keystore.prototype.decodeHex = function (msgHex) {
        var msgBase64 = (Buffer.from(msgHex, 'hex')).toString('base64');
        return NaclUtil.decodeBase64(msgBase64);
    };
    Keystore.prototype._encryptKey = function (privateKey, pwDerivedKey) {
        var nonce = Nacl.randomBytes(Nacl.secretbox.nonceLength);
        var privateKeyArray = this.decodeHex(privateKey);
        var encKey = Nacl.secretbox(privateKeyArray, nonce, pwDerivedKey);
        return {
            key: NaclUtil.encodeBase64(encKey),
            nonce: NaclUtil.encodeBase64(nonce),
        };
    };
    ;
    Keystore.prototype._decryptKey = function (encryptedKey, pwDerivedKey) {
        var decKey = NaclUtil.decodeBase64(encryptedKey.key);
        var nonce = NaclUtil.decodeBase64(encryptedKey.nonce);
        var decryptedKey = Nacl.secretbox.open(decKey, nonce, pwDerivedKey);
        if (decryptedKey === null) {
            throw new Error('Decryption failed!');
        }
        return this.encodeHex(decryptedKey);
    };
    ;
    Keystore.prototype.deriveKeyFromPasswordAndSalt = function (password, salt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var logN = 14;
                        var r = 8;
                        var dkLen = 16;
                        var cb = function (derKey) {
                            var err = null;
                            var ui8arr = undefined;
                            try {
                                ui8arr = Uint8Array.from(derKey);
                            }
                            catch (e) {
                                reject(e);
                            }
                            resolve(ui8arr);
                        };
                        ScryptAsync(password, salt, {
                            logN: logN,
                            r: r,
                            p: 1,
                            dkLen: dkLen,
                            encoding: 'hex'
                        }, cb);
                    })];
            });
        });
    };
    ;
    Keystore.prototype.generateNewAddress = function (pwDerivedKey, n) {
        //Assert.derivedKey(this, pwDerivedKey);
        if (!this.encSeed) {
            throw new Error('KeyStore.generateNewAddress: No seed set');
        }
        n = n || 1;
        var keys = this._generatePrivKeys(pwDerivedKey, n);
        for (var i = 0; i < n; i++) {
            var keyObj = keys[i];
            var address = keyObj.privKey.address;
            this.encPrivKeys[address] = keyObj.encPrivKey;
            this.addresses.push(address);
        }
        this.hdIndex += n;
    };
    ;
    Keystore.prototype.newAddress = function (n, password) {
        return __awaiter(this, void 0, void 0, function () {
            var pwDerivedKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deriveKeyFromPasswordAndSalt(password, this.salt)];
                    case 1:
                        pwDerivedKey = _a.sent();
                        this.generateNewAddress(pwDerivedKey, n);
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    Keystore.prototype.deleteAddress = function (address, password) {
        return __awaiter(this, void 0, void 0, function () {
            var addressIndex, pwDerivedKey, encPrivateKey, addresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressIndex = this.addresses.indexOf(address);
                        if (!(addressIndex >= 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.deriveKeyFromPasswordAndSalt(password, this.salt)];
                    case 1:
                        pwDerivedKey = _a.sent();
                        encPrivateKey = this.encPrivKeys[address];
                        if (!this._decryptKey(encPrivateKey, pwDerivedKey)) return [3 /*break*/, 4];
                        this.addresses[addressIndex] = '';
                        this.encPrivKeys[address] = '';
                        if (!(this.defaultAddressIndex === addressIndex)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getAddresses()];
                    case 2:
                        addresses = _a.sent();
                        if (!(addresses.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.setDefaultAddress(addresses[0])];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        ;
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Keystore.prototype._generatePrivKeys = function (pwDerivedKey, n) {
        //Assert.derivedKey(this, pwDerivedKey);
        var seed = this._decryptString(this.encSeed, pwDerivedKey);
        if (!seed || seed.length === 0) {
            throw new Error('Provided password derived key is wrong');
        }
        var keys = [];
        for (var i = 0; i < n; i++) {
            var key = filecoin_signer.keyDerive(seed, this.hdPathString + "/" + (i + this.hdIndex), '');
            var encPrivateKey = this._encryptKey(key.private_hexstring, pwDerivedKey);
            keys[i] = {
                privKey: key,
                encPrivKey: encPrivateKey
            };
        }
        return keys;
    };
    ;
    Keystore.prototype.getPrivateKey = function (address, password) {
        return __awaiter(this, void 0, void 0, function () {
            var pwDerivedKey, encPrivateKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deriveKeyFromPasswordAndSalt(password, this.salt)];
                    case 1:
                        pwDerivedKey = _a.sent();
                        if (this.encPrivKeys[address] === undefined) {
                            throw new Error('KeyStore.exportPrivateKey: Address not found in KeyStore');
                        }
                        encPrivateKey = this.encPrivKeys[address];
                        return [2 /*return*/, this._decryptKey(encPrivateKey, pwDerivedKey)];
                }
            });
        });
    };
    ;
    Keystore.prototype.getDefaultAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.addresses[this.defaultAddressIndex]];
            });
        });
    };
    Keystore.prototype.setDefaultAddress = function (address) {
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
    Keystore.prototype.getAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.addresses.filter(function (a, i) { return a != ''; })];
            });
        });
    };
    Keystore.prototype.hasAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.addresses.indexOf(address) >= 0];
            });
        });
    };
    Keystore.prototype.generateRandomSeed = function (extraEntropy) {
        var seed = '';
        if (extraEntropy === undefined) {
            seed = new Mnemonic(Mnemonic.Words.ENGLISH);
        }
        else if (typeof extraEntropy === 'string') {
            var entBuf = Buffer.from(extraEntropy);
            var randBuf = BitCore.crypto.Random.getRandomBuffer(256 / 8);
            var hashedEnt = this._concatAndSha256(randBuf, entBuf).slice(0, 128 / 8);
            seed = new Mnemonic(hashedEnt, Mnemonic.Words.ENGLISH);
        }
        else {
            throw new Error('generateRandomSeed: extraEntropy is set but not a string.');
        }
        return seed.toString();
    };
    ;
    return Keystore;
}());
export { Keystore };
//# sourceMappingURL=keystore.js.map