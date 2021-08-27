export = toString;
/**
 * @typedef {import('./util/bases').SupportedEncodings} SupportedEncodings
 */
/**
 * Turns a `Uint8Array` into a string.
 *
 * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {Uint8Array} array - The array to turn into a string
 * @param {SupportedEncodings} [encoding=utf8] - The encoding to use
 * @returns {string}
 */
declare function toString(array: Uint8Array, encoding?: bases.SupportedEncodings | undefined): string;
declare namespace toString {
    export { SupportedEncodings };
}
import bases = require("./util/bases");
type SupportedEncodings = import('./util/bases').SupportedEncodings;
//# sourceMappingURL=to-string.d.ts.map