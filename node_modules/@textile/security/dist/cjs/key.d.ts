export declare const errors: {
    invalidKeyError: Error;
};
export declare const randomBytes: (byteLength: number) => Uint8Array;
/**
 * keyFromString returns a key by decoding a base32-encoded string.
 * @param k Input base32-encoded string.
 */
export declare const keyFromString: (k: string) => Uint8Array;
/**
 * String returns the base32-encoded string representation of raw key bytes.
 * @param k Input key bytes.
 */
export declare const keyToString: (k: Uint8Array) => string;
/**
 * Key is a thread encryption key with two components.
 * @param sk Network key is used to encrypt outer log record linkages.
 * @param rk Read key is used to encrypt inner record events.
 */
export declare class ThreadKey {
    readonly service: Uint8Array;
    readonly read?: Uint8Array | undefined;
    constructor(service: Uint8Array, read?: Uint8Array | undefined);
    /**
     * Create a new set of keys.
     * @param withRead Whether to also include a random read key.
     */
    static fromRandom(withRead?: boolean): ThreadKey;
    /**
     * Create Key from bytes.
     * @param bytes Input bytes of (possibly both) key(s).
     */
    static fromBytes(bytes: Uint8Array): ThreadKey;
    /**
     * Create Key by decoding a base32-encoded string.
     * @param s The base32-encoded string.
     */
    static fromString(s: string): ThreadKey;
    isDefined(): boolean;
    canRead(): boolean;
    toBytes(): Uint8Array;
    /**
     * Return the base32-encoded string representation of raw key bytes.
     * For example:
     * Full: "brv7t5l2h55uklz5qwpntcat26csaasfchzof3emmdy6povabcd3a2to2qdkqdkto2prfhizerqqudqsdvwherbiy4nazqxjejgdr4oy"
     * Network: "bp2vvqody5zm6yqycsnazb4kpqvycbdosos352zvpsorxce5koh7q"
     */
    toString(): string;
}
