import type { Private, Public } from './identity';
/**
 * Decrypts the given `data` using a Curve25519 variant of the private key.
 *
 * Assumes ciphertext includes ephemeral public key and nonce used in original
 * encryption (e.g., via {@link encrypt} function).
 *
 * @see {@link https://github.com/dchest/ed2curve-js} for conversion details.
 * @param ciphertext Data to decrypt.
 */
export declare function decrypt(ciphertext: Uint8Array, privKey: Uint8Array, type?: string): Promise<Uint8Array>;
/**
 * Encrypts the given `data` using a Curve25519 variant of the public key.
 *
 * The encryption uses an ephemeral private key, which is prepended to the
 * ciphertext, along with a nonce of random bytes.
 *
 * @see {@link https://github.com/dchest/ed2curve-js} for conversion details.
 * @param data Data to encrypt.
 */
export declare function encrypt(data: Uint8Array, pubKey: Uint8Array, type?: string): Promise<Uint8Array>;
/**
 * Encode the given PublicKey's protobuf-encoded bytes to its base-32 encoded
 * multibase representation.
 * @param bytes The protobuf-encoded bytes of a {@link Public} key.
 */
export declare function publicKeyBytesToString(bytes: Uint8Array): string;
/**
 * Encode the given privateKey's protobuf-encoded bytes to its base-32 encoded
 * multibase representation.
 * @param bytes The protobuf-encoded bytes of a {@link Private} key.
 */
export declare function privateKeyBytesToString(bytes: Uint8Array): string;
/**
 * Encode the given PublicKey to its base-32 encoded multibase representation.
 * @param key The {@link Public} key to encode.
 */
export declare function publicKeyToString(key: Public): string;
/**
 * Encode the given PrivateKey to its base-32 encoded multibase representation.
 * @param key The input PrivateKey.
 */
export declare function privateKeyToString(key: Private): string;
/**
 * Decode the given base-32 encoded multibase string into a {@link Public} key.
 * @param str The base-32 encoded multibase string.
 */
export declare function publicKeyBytesFromString(str: string): Uint8Array;
/**
 * Decode the given base-32 encoded multibase string into a {@link Private} key.
 * @param str The base-32 encoded multibase string.
 */
export declare function privateKeyFromString(str: string): Uint8Array;
/**
 * Utility function to extract the raw bytes from a {@link Public} key.
 * @param key The public key from which to extract raw bytes.
 */
export declare function extractPublicKeyBytes(key: Public): Uint8Array;
