import { Private, Public } from './identity';
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
export declare class PublicKey implements Public {
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
export declare class PrivateKey implements Private {
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
