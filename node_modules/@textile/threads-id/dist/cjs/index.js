"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadID = exports.Variant = void 0;
const sync_randombytes_1 = __importDefault(require("@consento/sync-randombytes"));
const multibase_1 = __importDefault(require("multibase"));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore // Only used internally, so we can ignore types here
const varint_1 = require("varint");
/**
 * Returns true if the two passed Uint8Arrays have the same content
 * @see {@link https://github.com/achingbrain/uint8arrays/blob/master/equals.js}
 */
function equals(a, b) {
    if (a === b) {
        return true;
    }
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    for (let i = 0; i < a.byteLength; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Variant denotes Thread variant. Currently only two variants are supported.
 * @public
 */
var Variant;
(function (Variant) {
    Variant[Variant["Raw"] = 85] = "Raw";
    Variant[Variant["AccessControlled"] = 112] = "AccessControlled";
})(Variant = exports.Variant || (exports.Variant = {}));
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
class ThreadID {
    constructor(buf) {
        this.buf = buf;
    }
    /**
     * fromRandom creates a new random ID object.
     * @param variant The Thread variant to use. @see Variant
     * @param size The size of the random component to use. Defaults to 32 bytes.
     */
    static fromRandom(variant = ThreadID.Variant.Raw, size = 32) {
        // two 8 bytes (max) numbers plus random bytes
        const bytes = Uint8Array.from([
            ...varint_1.encode(ThreadID.V1),
            ...varint_1.encode(variant),
            ...sync_randombytes_1.default(new Uint8Array(size)),
        ]);
        return new ThreadID(bytes);
    }
    /**
     * fromString parses an ID-encoded string and returns an ID object.
     * For IDV1, an ID-encoded string is primarily a multibase string:
     *    <multibase-type-code><base-encoded-string>
     * The base-encoded string represents a:
     *    <version><variant><random-number>
     * @param v The input encoded Thread ID.
     */
    static fromString(v) {
        if (v.length < 2) {
            throw new Error('id too short');
        }
        const data = multibase_1.default.decode(v);
        return ThreadID.fromBytes(data);
    }
    /**
     * fromBytes takes an ID data slice, parses it and returns an ID.
     * For IDV1, the data bytes are arranged as:
     *    <version><variant><random-number>
     * Please use fromEncoded when parsing a regular ID string, as fromBytes does not
     * expect multibase-encoded data. fromBytes accepts the output of ID.bytes().
     * @param data The input Thread ID bytes.
     */
    static fromBytes(data) {
        let copy = new Uint8Array(data);
        const version = varint_1.decode(copy);
        if (version != 1) {
            throw new Error(`expected 1 as the id version number, got: ${version}.`);
        }
        copy = copy.slice(varint_1.decode.bytes, copy.length);
        const variant = varint_1.decode(copy);
        if (!(variant in ThreadID.Variant)) {
            throw new Error('invalid variant.');
        }
        const id = copy.slice(varint_1.decode.bytes, copy.length);
        if (id.length < 16) {
            throw new Error('random component too small.');
        }
        return new ThreadID(data);
    }
    /**
     * getEncoding returns the multibase encoding for a multibase encoded string.
     * Returns the name of the encoding if it is encoded, and throws an error otherwise.
     * @param v The Thread ID to check.
     */
    static getEncoding(v) {
        if (v.length < 2) {
            throw new Error('Too Short');
        }
        const encoding = multibase_1.default.isEncoded(v);
        // check encoding is valid
        if (encoding === false) {
            throw new Error('Invalid Encoding');
        }
        return encoding;
    }
    /**
     * isDefined returns true if an ID is defined.
     * Calling any other methods on an undefined ID will result in undefined behavior.
     */
    isDefined() {
        return this.buf.length > 0;
    }
    /**
     * toBytes returns the byte representation of an ID.
     * The output of bytes can be parsed back into an ID with fromBytes.
     */
    toBytes() {
        return this.buf; // These should not be mutated directly!
    }
    /**
     * equals checks that two IDs are the same.
     * @param o The other Thread ID.
     */
    equals(o) {
        return equals(this.buf, o.buf);
    }
    /**
     * version returns the ID version.
     */
    version() {
        return varint_1.decode(this.buf);
    }
    /**
     * variant returns the variant of an ID.
     */
    variant() {
        let copy = new Uint8Array(this.buf);
        varint_1.decode(copy);
        copy = copy.slice(varint_1.decode.bytes);
        return varint_1.decode(copy);
    }
    /**
     * toString returns the (multibase encoded) string representation of an ID.
     * @param base Name of the base to use for encoding. Defaults to 'base32'.
     */
    toString(base = 'base32') {
        const decoder = new TextDecoder();
        switch (this.version()) {
            case ThreadID.V1:
                return decoder.decode(multibase_1.default.encode(base, this.buf));
            default:
                throw new Error('unknown ID version.');
        }
    }
}
exports.ThreadID = ThreadID;
/**
 * Versions. Currently only V1 is supported.
 */
ThreadID.V1 = 0x01;
ThreadID.Variant = Variant;
exports.default = ThreadID;
//# sourceMappingURL=index.js.map