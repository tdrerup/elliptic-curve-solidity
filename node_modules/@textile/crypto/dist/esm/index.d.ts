/**
 * Identity represents an entity capable of signing a message.
 * This is a simple "private key" interface that must be capable of returning
 * the associated "public key" for verification. In many cases, the Identity
 * will just be a private key, but callers can use any setup that suits their
 * needs. The interface is currently modeled after `libp2p-crypto` keys.
 * It is meant to be implemented by external libraries, though in practice,
 * implementations are provided by the `@textile/crypto` library.
 *
 * If using in your own application, see the {@link PrivateKey} class.
 */
interface Identity {
    /**
     * Sign the message using this identity and return the signature.
     * @param data The data (raw bytes) to sign.
     */
    sign(data: Uint8Array): Promise<Uint8Array>;
    /**
     * Get the public key associated with this identity. This can be any object
     * that satisfies the {@link Public} interface.
     */
    public: Public;
}
/**
 * Private is an alias for the {@link Identity} interface.
 */
interface Private extends Identity {
    /**
     * Return the protobuf-encoded bytes of this private key.
     */
    bytes: Uint8Array;
}
/**
 * Public is any entity associated with a given {@link Identity} that is
 * capable of verifying a signature produced by said identity. In most cases,
 * a public key will be obtained as a property of an object implementing the
 * {@link Identity} and/or {@link Private} key interface.
 */
interface Public {
    /**
     * Verifies the signature for the data and returns true if verification
     * succeeded or false if it failed.
     * @param data The data to use for verification.
     * @param sig The signature to verify.
     */
    verify(data: Uint8Array, sig: Uint8Array): Promise<boolean>;
    /**
     * Return the protobuf-encoded bytes of this public key.
     */
    bytes: Uint8Array;
}
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
declare class PublicKey implements Public {
    pubKey: Uint8Array;
    type: string;
    constructor(pubKey: Uint8Array, type?: string);
    /**
     * Verifies the signature for the data and returns true if verification
     * succeeded or false if it failed.
     * @param data The data to use for verification.
     * @param sig The signature to verify.
     */
    verify(data: Uint8Array, signature: Uint8Array): Promise<boolean>;
    /**
     * Return the base32-encoded multibase string of the `bytes` of this public
     * key. Useful for encoding the key for sharing etc.
     */
    toString(): string;
    /**
     * Create a PublicKey from the result of calling `toString()`.
     */
    static fromString(str: string): PublicKey;
    /**
     * Return the protobuf-encoded bytes of this public key.
     */
    get bytes(): Uint8Array;
    /**
     * Encrypt the given data using this public key.
     * @param data The input plaintext.
     */
    encrypt(data: Uint8Array): Promise<Uint8Array>;
}
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
declare class PrivateKey implements Private {
    type: string;
    /**
     * The raw public key bytes.
     */
    pubKey: Uint8Array;
    /**
     * The raw 32-byte secret seed
     */
    seed: Uint8Array;
    /**
     * The raw private key bytes.
     */
    privKey: Uint8Array;
    /**
     * Constructor
     * @param secretKey Raw secret key (32-byte secret seed in ed25519)
     * @param type Public-key signature system name. (currently only `ed25519` keys are supported)
     */
    constructor(secretKey: Uint8Array, type?: string);
    /**
     * Returns `true` if this key contains a secret key and can sign.
     */
    canSign(): boolean;
    /**
     * Sign the message using this private key and return the signature.
     * @param data The data (raw bytes) to sign.
     */
    sign(data: Uint8Array): Promise<Uint8Array>;
    /**
     * Get the public key associated with this identity.
     */
    get public(): PublicKey;
    /**
     * Return the protobuf-encoded bytes of this private key.
     */
    get bytes(): Uint8Array;
    /**
     * Creates a new PrivateKey from ed25519 secret key seed raw bytes.
     *
     * @param rawSeed Raw 32-byte ed25519 secret key seed.
     */
    static fromRawEd25519Seed(rawSeed: Uint8Array): PrivateKey;
    /**
     * Create a random PrivateKey.
     */
    static fromRandom(): PrivateKey;
    /**
     * Return the base32-encoded multibase string of the `bytes` of this private
     * key. Useful for encoding the key for sharing etc.
     */
    toString(): string;
    /**
     * Create a PrivateKey from the result of calling `toString()`.
     */
    static fromString(str: string): PrivateKey;
    /**
     * Decrypt the given ciphertext using this private key.
     * @param ciphertext The input ciphertext (encrypted data)
     */
    decrypt(ciphertext: Uint8Array): Promise<Uint8Array>;
}
/**
 * Decrypts the given `data` using a Curve25519 variant of the private key.
 *
 * Assumes ciphertext includes ephemeral public key and nonce used in original
 * encryption (e.g., via {@link encrypt} function).
 *
 * @see {@link https://github.com/dchest/ed2curve-js} for conversion details.
 * @param ciphertext Data to decrypt.
 */
declare function decrypt(ciphertext: Uint8Array, privKey: Uint8Array, type?: string): Promise<Uint8Array>;
/**
 * Encrypts the given `data` using a Curve25519 variant of the public key.
 *
 * The encryption uses an ephemeral private key, which is prepended to the
 * ciphertext, along with a nonce of random bytes.
 *
 * @see {@link https://github.com/dchest/ed2curve-js} for conversion details.
 * @param data Data to encrypt.
 */
declare function encrypt(data: Uint8Array, pubKey: Uint8Array, type?: string): Promise<Uint8Array>;
/**
 * Encode the given PublicKey's protobuf-encoded bytes to its base-32 encoded
 * multibase representation.
 * @param bytes The protobuf-encoded bytes of a {@link Public} key.
 */
declare function publicKeyBytesToString(bytes: Uint8Array): string;
/**
 * Encode the given privateKey's protobuf-encoded bytes to its base-32 encoded
 * multibase representation.
 * @param bytes The protobuf-encoded bytes of a {@link Private} key.
 */
declare function privateKeyBytesToString(bytes: Uint8Array): string;
/**
 * Encode the given PublicKey to its base-32 encoded multibase representation.
 * @param key The {@link Public} key to encode.
 */
declare function publicKeyToString(key: Public): string;
/**
 * Encode the given PrivateKey to its base-32 encoded multibase representation.
 * @param key The input PrivateKey.
 */
declare function privateKeyToString(key: Private): string;
/**
 * Decode the given base-32 encoded multibase string into a {@link Public} key.
 * @param str The base-32 encoded multibase string.
 */
declare function publicKeyBytesFromString(str: string): Uint8Array;
/**
 * Decode the given base-32 encoded multibase string into a {@link Private} key.
 * @param str The base-32 encoded multibase string.
 */
declare function privateKeyFromString(str: string): Uint8Array;
/**
 * Utility function to extract the raw bytes from a {@link Public} key.
 * @param key The public key from which to extract raw bytes.
 */
declare function extractPublicKeyBytes(key: Public): Uint8Array;
export { Identity, Private, Public, PrivateKey, PublicKey, decrypt, encrypt, extractPublicKeyBytes, privateKeyBytesToString, privateKeyFromString, privateKeyToString, publicKeyBytesFromString, publicKeyBytesToString, publicKeyToString };
