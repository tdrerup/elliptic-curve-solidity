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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPublicKeyBytes = exports.privateKeyFromString = exports.publicKeyBytesFromString = exports.privateKeyToString = exports.publicKeyToString = exports.privateKeyBytesToString = exports.publicKeyBytesToString = exports.encrypt = exports.decrypt = void 0;
const ed2curve_1 = require("ed2curve");
const multibase_1 = __importDefault(require("multibase"));
const tweetnacl_1 = __importDefault(require("tweetnacl"));
const proto_keys_1 = require("./proto.keys");
const nonceBytes = 24; // Length of nacl nonce
const privateKeyBytes = 32;
const publicKeyBytes = 32; // Length of nacl ephemeral public key
/**
 * Decrypts the given `data` using a Curve25519 variant of the private key.
 *
 * Assumes ciphertext includes ephemeral public key and nonce used in original
 * encryption (e.g., via {@link encrypt} function).
 *
 * @see {@link https://github.com/dchest/ed2curve-js} for conversion details.
 * @param ciphertext Data to decrypt.
 */
function decrypt(ciphertext, privKey, type = 'ed25519') {
    return __awaiter(this, void 0, void 0, function* () {
        if (type !== 'ed25519') {
            throw Error(`'${type}' type keys are not currently supported`);
        }
        const pk = ed2curve_1.convertSecretKey(privKey);
        if (!pk) {
            throw Error('could not convert key type');
        }
        const nonce = ciphertext.slice(0, nonceBytes);
        const ephemeral = ciphertext.slice(nonceBytes, nonceBytes + publicKeyBytes);
        const ct = ciphertext.slice(nonceBytes + publicKeyBytes);
        const plaintext = tweetnacl_1.default.box.open(ct, nonce, ephemeral, pk);
        if (!plaintext) {
            throw Error('failed to decrypt curve25519');
        }
        return Uint8Array.from(plaintext);
    });
}
exports.decrypt = decrypt;
/**
 * Encrypts the given `data` using a Curve25519 variant of the public key.
 *
 * The encryption uses an ephemeral private key, which is prepended to the
 * ciphertext, along with a nonce of random bytes.
 *
 * @see {@link https://github.com/dchest/ed2curve-js} for conversion details.
 * @param data Data to encrypt.
 */
function encrypt(data, pubKey, type = 'ed25519') {
    return __awaiter(this, void 0, void 0, function* () {
        if (type !== 'ed25519') {
            throw Error(`'${type}' type keys are not currently supported`);
        }
        // generated ephemeral key pair
        const ephemeral = tweetnacl_1.default.box.keyPair();
        // convert recipient's key into curve25519 (assumes ed25519 keys)
        const pk = ed2curve_1.convertPublicKey(pubKey);
        if (!pk) {
            throw Error('could not convert key type');
        }
        // encrypt with nacl
        const nonce = tweetnacl_1.default.randomBytes(24);
        const ciphertext = tweetnacl_1.default.box(data, nonce, pk, ephemeral.secretKey);
        const merged = new Uint8Array(nonceBytes + publicKeyBytes + ciphertext.byteLength);
        // prepend nonce
        merged.set(new Uint8Array(nonce), 0);
        // then ephemeral public key
        merged.set(new Uint8Array(ephemeral.publicKey), nonceBytes);
        // then cipher text
        merged.set(new Uint8Array(ciphertext), nonceBytes + publicKeyBytes);
        return Uint8Array.from(merged);
    });
}
exports.encrypt = encrypt;
/**
 * Encode the given PublicKey's protobuf-encoded bytes to its base-32 encoded
 * multibase representation.
 * @param bytes The protobuf-encoded bytes of a {@link Public} key.
 */
function publicKeyBytesToString(bytes) {
    const encoded = multibase_1.default.encode('base32', bytes);
    return new TextDecoder().decode(encoded);
}
exports.publicKeyBytesToString = publicKeyBytesToString;
/**
 * Encode the given privateKey's protobuf-encoded bytes to its base-32 encoded
 * multibase representation.
 * @param bytes The protobuf-encoded bytes of a {@link Private} key.
 */
function privateKeyBytesToString(bytes) {
    const encoded = multibase_1.default.encode('base32', bytes);
    return new TextDecoder().decode(encoded);
}
exports.privateKeyBytesToString = privateKeyBytesToString;
/**
 * Encode the given PublicKey to its base-32 encoded multibase representation.
 * @param key The {@link Public} key to encode.
 */
function publicKeyToString(key) {
    return publicKeyBytesToString(key.bytes);
}
exports.publicKeyToString = publicKeyToString;
/**
 * Encode the given PrivateKey to its base-32 encoded multibase representation.
 * @param key The input PrivateKey.
 */
function privateKeyToString(key) {
    return privateKeyBytesToString(key.bytes);
}
exports.privateKeyToString = privateKeyToString;
/**
 * Decode the given base-32 encoded multibase string into a {@link Public} key.
 * @param str The base-32 encoded multibase string.
 */
function publicKeyBytesFromString(str) {
    const decoded = multibase_1.default.decode(str);
    const obj = proto_keys_1.decodePublicKey(decoded);
    const bytes = obj.Data;
    return bytes.slice(0, publicKeyBytes);
}
exports.publicKeyBytesFromString = publicKeyBytesFromString;
/**
 * Decode the given base-32 encoded multibase string into a {@link Private} key.
 * @param str The base-32 encoded multibase string.
 */
function privateKeyFromString(str) {
    const decoded = multibase_1.default.decode(str);
    const obj = proto_keys_1.decodePrivateKey(decoded);
    const bytes = obj.Data;
    // We might have the public key bytes appended twice, but we can ignore the
    // extra public bytes on the end (no need to check it either)
    return bytes.slice(0, privateKeyBytes);
}
exports.privateKeyFromString = privateKeyFromString;
/**
 * Utility function to extract the raw bytes from a {@link Public} key.
 * @param key The public key from which to extract raw bytes.
 */
function extractPublicKeyBytes(key) {
    const obj = proto_keys_1.decodePublicKey(key.bytes);
    const bytes = obj.Data;
    return bytes.slice(0, publicKeyBytes);
}
exports.extractPublicKeyBytes = extractPublicKeyBytes;
//# sourceMappingURL=utils.js.map