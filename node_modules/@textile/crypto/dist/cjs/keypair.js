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
exports.PrivateKey = exports.PublicKey = void 0;
const tweetnacl_1 = __importDefault(require("tweetnacl"));
const proto_keys_1 = require("./proto.keys");
const utils_1 = require("./utils");
/**
 * Default implementation of the {@link Public} interface, with encryption
 * support.
 * In theory, RSA, ed25519, and secp256k1 key types (and more) should be
 * supported, although currently only ed25519 has full verify and encrypt
 * capabilities.
 * @privateRemarks Support additional key types by default. For now, sticking to ed25519
 * keeps our bundle smaller, but if needed, additional types can be added via
 * libp2p-crypto or tweetnacl.
 * @privateRemarks Separate out the generic PublicKey interface to include signing and
 * encryption methods, and then have this class implement that interface.
 *
 * @example
 * Create a private key, extract the public key string
 * ```typescript
 * import { PrivateKey } from '@textile/hub'
 *
 * function example() {
 *   const identity = PrivateKey.fromRandom()
 *   const publicKey = identity.public.toString()
 *   return publicKey
 * }
 * ```
 *
 * @example
 * Encrypt a message using another person's public key (string)
 * ```typescript
 * import { PublicKey } from '@textile/hub'
 *
 * async function example(publicKey: string) {
 *   const recipient = PublicKey.fromString(publicKey)
 *   const msg = new TextEncoder().encode('howdy!')
 *   const ciphertext = await recipient.encrypt(msg)
 *   return ciphertext
 * }
 * ```
 *
 * @example
 * Decrypt a message sent to the local user with their private key
 * ```typescript
 * import { PrivateKey } from '@textile/hub'
 *
 * async function example(identity: PrivateKey, ciphertext: Uint8Array) {
 *   const plaintext = await identity.decrypt(ciphertext)
 *   return plaintext
 * }
 * ```
 *
 * @example
 * Encrypt the local user's own message for later reading.
 * ```typescript
 * import { PrivateKey } from '@textile/hub'
 *
 * async function example(identity: PrivateKey) {
 *   const msg = new TextEncoder().encode('private message!')
 *   const ciphertext = await identity.public.encrypt(msg)
 *   return ciphertext // can only be decrypted by the local user
 * }
 * ```
 */
class PublicKey {
    constructor(pubKey, type = 'ed25519') {
        this.pubKey = pubKey;
        this.type = type;
        if (type !== 'ed25519') {
            throw new Error('Invalid keys type');
        }
        this.type = type || 'ed25519';
    }
    /**
     * Verifies the signature for the data and returns true if verification
     * succeeded or false if it failed.
     * @param data The data to use for verification.
     * @param sig The signature to verify.
     */
    verify(data, signature) {
        return __awaiter(this, void 0, void 0, function* () {
            return tweetnacl_1.default.sign.detached.verify(data, signature, this.pubKey);
        });
    }
    /**
     * Return the base32-encoded multibase string of the `bytes` of this public
     * key. Useful for encoding the key for sharing etc.
     */
    toString() {
        return utils_1.publicKeyToString(this);
    }
    /**
     * Create a PublicKey from the result of calling `toString()`.
     */
    static fromString(str) {
        const bytes = utils_1.publicKeyBytesFromString(str);
        return new PublicKey(bytes, 'ed25519');
    }
    /**
     * Return the protobuf-encoded bytes of this public key.
     */
    get bytes() {
        return proto_keys_1.encodePublicKey({
            Type: "Ed25519" /* Ed25519 */,
            Data: this.pubKey,
        });
    }
    /**
     * Encrypt the given data using this public key.
     * @param data The input plaintext.
     */
    encrypt(data) {
        return utils_1.encrypt(data, this.pubKey, this.type);
    }
}
exports.PublicKey = PublicKey;
/**
 * Default implementation of the {@link Private} interface, with decryption
 * support.
 * In theory, RSA, ed25519, and secp256k1 key types (and more) should be
 * supported, although currently only ed25519 has full sign and decrypt
 * capabilities.
 * @privateRemarks Support additional key types by default. For now, sticking to ed25519
 * keeps our bundle smaller, but if needed, additional types can be added via
 * libp2p-crypto or tweetnacl.
 * @privateRemarks Separate out the generic PrivateKey interface to include signing and
 * encryption methods, and then have this class implement that interface.
 *
 * @example
 * Create a private key, extract the public key string
 * ```typescript
 * import { PrivateKey } from '@textile/hub'
 *
 * function example() {
 *   const identity = PrivateKey.fromRandom()
 *   const publicKey = identity.public.toString()
 *   return publicKey
 * }
 * ```
 *
 * @example
 * Encrypt a message using another person's public key (string)
 * ```typescript
 * import { PublicKey } from '@textile/hub'
 *
 * async function example(publicKey: string) {
 *   const recipient = PublicKey.fromString(publicKey)
 *   const msg = new TextEncoder().encode('howdy!')
 *   const ciphertext = await recipient.encrypt(msg)
 *   return ciphertext
 * }
 * ```
 *
 * @example
 * Decrypt a message sent to the local user with their private key
 * ```typescript
 * import { PrivateKey } from '@textile/hub'
 *
 * async function example(identity: PrivateKey, ciphertext: Uint8Array) {
 *   const plaintext = await identity.decrypt(ciphertext)
 *   return plaintext
 * }
 * ```
 *
 * @example
 * Encrypt the local user's own message for later reading.
 * ```typescript
 * import { PrivateKey } from '@textile/hub'
 *
 * async function example(identity: PrivateKey) {
 *   const msg = new TextEncoder().encode('private message!')
 *   const ciphertext = await identity.public.encrypt(msg)
 *   return ciphertext // can only be decrypted by the local user
 * }
 * ```
 */
class PrivateKey {
    /**
     * Constructor
     * @param secretKey Raw secret key (32-byte secret seed in ed25519)
     * @param type Public-key signature system name. (currently only `ed25519` keys are supported)
     */
    constructor(secretKey, type = 'ed25519') {
        this.type = type;
        if (type !== 'ed25519') {
            throw new Error('Invalid keys type');
        }
        this.type = type || 'ed25519';
        const secret = Uint8Array.from(secretKey);
        if (secret.length !== 32) {
            throw new Error('secretKey length is invalid');
        }
        const naclKeys = tweetnacl_1.default.sign.keyPair.fromSeed(secret);
        this.seed = secret;
        this.privKey = naclKeys.secretKey;
        this.pubKey = naclKeys.publicKey;
    }
    /**
     * Returns `true` if this key contains a secret key and can sign.
     */
    canSign() {
        return !!this.privKey;
    }
    /**
     * Sign the message using this private key and return the signature.
     * @param data The data (raw bytes) to sign.
     */
    sign(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.canSign()) {
                throw new Error('cannot sign: no secret key available');
            }
            return tweetnacl_1.default.sign.detached(data, this.privKey);
        });
    }
    /**
     * Get the public key associated with this identity.
     */
    get public() {
        return new PublicKey(this.pubKey);
    }
    /**
     * Return the protobuf-encoded bytes of this private key.
     */
    get bytes() {
        return proto_keys_1.encodePrivateKey({
            Type: "Ed25519" /* Ed25519 */,
            Data: this.privKey,
        });
    }
    /**
     * Creates a new PrivateKey from ed25519 secret key seed raw bytes.
     *
     * @param rawSeed Raw 32-byte ed25519 secret key seed.
     */
    static fromRawEd25519Seed(rawSeed) {
        return new this(rawSeed, 'ed25519');
    }
    /**
     * Create a random PrivateKey.
     */
    static fromRandom() {
        const secret = tweetnacl_1.default.randomBytes(32);
        return this.fromRawEd25519Seed(secret);
    }
    /**
     * Return the base32-encoded multibase string of the `bytes` of this private
     * key. Useful for encoding the key for sharing etc.
     */
    toString() {
        return utils_1.privateKeyToString(this);
    }
    /**
     * Create a PrivateKey from the result of calling `toString()`.
     */
    static fromString(str) {
        return new PrivateKey(utils_1.privateKeyFromString(str), 'ed25519');
    }
    /**
     * Decrypt the given ciphertext using this private key.
     * @param ciphertext The input ciphertext (encrypted data)
     */
    decrypt(ciphertext) {
        return utils_1.decrypt(ciphertext, this.privKey, this.type);
    }
}
exports.PrivateKey = PrivateKey;
//# sourceMappingURL=keypair.js.map