import { BaseNameOrCode } from 'multibase';
/**
 * Variant denotes Thread variant. Currently only two variants are supported.
 * @public
 */
export declare enum Variant {
    Raw = 85,
    AccessControlled = 112
}
/**
 * ThreadID represents a self-describing Thread identifier.
 *
 * It is formed by a Version, a Variant, and a random number of a given length.
 * @public
 *
 * @example
 * Create a new random ThreadID
 * ```typescript
 * import { ThreadID } from '@textile/threads'
 *
 * const id = ThreadID.fromRandom()
 *
 * console.log(id)
 * ```
 *
 * @example
 * Convert a ThreadID to/from a Base32 string
 * ```typescript
 * import { ThreadID } from '@textile/threads'
 *
 * const id = ThreadID.fromRandom()
 * const str = id.toString()
 * const restored = ThreadID.fromString(str)
 * ```
 */
export declare class ThreadID {
    readonly buf: Uint8Array;
    constructor(buf: Uint8Array);
    /**
     * Versions. Currently only V1 is supported.
     */
    static V1: number;
    static Variant: typeof Variant;
    /**
     * fromRandom creates a new random ID object.
     * @param variant The Thread variant to use. @see Variant
     * @param size The size of the random component to use. Defaults to 32 bytes.
     */
    static fromRandom(variant?: Variant, size?: number): ThreadID;
    /**
     * fromString parses an ID-encoded string and returns an ID object.
     * For IDV1, an ID-encoded string is primarily a multibase string:
     *    <multibase-type-code><base-encoded-string>
     * The base-encoded string represents a:
     *    <version><variant><random-number>
     * @param v The input encoded Thread ID.
     */
    static fromString(v: string | Uint8Array): ThreadID;
    /**
     * fromBytes takes an ID data slice, parses it and returns an ID.
     * For IDV1, the data bytes are arranged as:
     *    <version><variant><random-number>
     * Please use fromEncoded when parsing a regular ID string, as fromBytes does not
     * expect multibase-encoded data. fromBytes accepts the output of ID.bytes().
     * @param data The input Thread ID bytes.
     */
    static fromBytes(data: Uint8Array): ThreadID;
    /**
     * getEncoding returns the multibase encoding for a multibase encoded string.
     * Returns the name of the encoding if it is encoded, and throws an error otherwise.
     * @param v The Thread ID to check.
     */
    static getEncoding(v: string): string;
    /**
     * isDefined returns true if an ID is defined.
     * Calling any other methods on an undefined ID will result in undefined behavior.
     */
    isDefined(): boolean;
    /**
     * toBytes returns the byte representation of an ID.
     * The output of bytes can be parsed back into an ID with fromBytes.
     */
    toBytes(): Uint8Array;
    /**
     * equals checks that two IDs are the same.
     * @param o The other Thread ID.
     */
    equals(o: ThreadID): boolean;
    /**
     * version returns the ID version.
     */
    version(): number;
    /**
     * variant returns the variant of an ID.
     */
    variant(): number;
    /**
     * toString returns the (multibase encoded) string representation of an ID.
     * @param base Name of the base to use for encoding. Defaults to 'base32'.
     */
    toString(base?: BaseNameOrCode): string;
}
export default ThreadID;
