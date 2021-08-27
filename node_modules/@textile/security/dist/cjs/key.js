"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadKey = exports.keyToString = exports.keyFromString = exports.randomBytes = exports.errors = void 0;
const sync_randombytes_1 = __importDefault(require("@consento/sync-randombytes"));
const multibase_1 = __importDefault(require("multibase"));
exports.errors = {
    invalidKeyError: new Error('Invalid key'),
};
exports.randomBytes = (byteLength) => {
    return sync_randombytes_1.default(new Uint8Array(byteLength));
};
// KeyBytes is the length of GCM key.
const keyBytes = 32;
/**
 * keyFromString returns a key by decoding a base32-encoded string.
 * @param k Input base32-encoded string.
 */
exports.keyFromString = (k) => {
    return multibase_1.default.decode(k);
};
/**
 * String returns the base32-encoded string representation of raw key bytes.
 * @param k Input key bytes.
 */
exports.keyToString = (k) => {
    const decoder = new TextDecoder();
    return decoder.decode(multibase_1.default.encode('base32', k));
};
/**
 * Key is a thread encryption key with two components.
 * @param sk Network key is used to encrypt outer log record linkages.
 * @param rk Read key is used to encrypt inner record events.
 */
class ThreadKey {
    constructor(service, read) {
        this.service = service;
        this.read = read;
    }
    /**
     * Create a new set of keys.
     * @param withRead Whether to also include a random read key.
     */
    static fromRandom(withRead = true) {
        return new ThreadKey(exports.randomBytes(keyBytes), withRead ? exports.randomBytes(keyBytes) : undefined);
    }
    /**
     * Create Key from bytes.
     * @param bytes Input bytes of (possibly both) key(s).
     */
    static fromBytes(bytes) {
        if (bytes.byteLength !== keyBytes && bytes.byteLength !== keyBytes * 2) {
            throw exports.errors.invalidKeyError;
        }
        const sk = bytes.slice(0, keyBytes);
        let rk;
        if (bytes.byteLength === keyBytes * 2) {
            rk = bytes.slice(keyBytes);
        }
        return new ThreadKey(sk, rk);
    }
    /**
     * Create Key by decoding a base32-encoded string.
     * @param s The base32-encoded string.
     */
    static fromString(s) {
        const data = multibase_1.default.decode(s);
        return this.fromBytes(data);
    }
    isDefined() {
        return this.service !== undefined;
    }
    canRead() {
        return this.read !== undefined;
    }
    toBytes() {
        var _a;
        if (this.read !== undefined) {
            const full = new Uint8Array(this.service.byteLength + ((_a = this.read.byteLength) !== null && _a !== void 0 ? _a : 0));
            full.set(this.service);
            this.read && full.set(this.read, this.service.byteLength);
            return full;
        }
        return this.service;
    }
    /**
     * Return the base32-encoded string representation of raw key bytes.
     * For example:
     * Full: "brv7t5l2h55uklz5qwpntcat26csaasfchzof3emmdy6povabcd3a2to2qdkqdkto2prfhizerqqudqsdvwherbiy4nazqxjejgdr4oy"
     * Network: "bp2vvqody5zm6yqycsnazb4kpqvycbdosos352zvpsorxce5koh7q"
     */
    toString() {
        return exports.keyToString(this.toBytes());
    }
}
exports.ThreadKey = ThreadKey;
//# sourceMappingURL=key.js.map