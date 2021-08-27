export = fromString;
/**
 * @typedef {import('./util/bases').SupportedEncodings} SupportedEncodings
 */
/**
 * Create a `Uint8Array` from the passed string
 *
 * Supports `utf8`, `utf-8`, `hex`, and any encoding supported by the multiformats module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {string} string
 * @param {SupportedEncodings} [encoding=utf8] - utf8, base16, base64, base64urlpad, etc
 * @returns {Uint8Array}
 */
declare function fromString(string: string, encoding?: bases.SupportedEncodings | undefined): Uint8Array;
declare namespace fromString {
    export { SupportedEncodings };
}
import bases = require("./util/bases");
type SupportedEncodings = import('./util/bases').SupportedEncodings;
//# sourceMappingURL=from-string.d.ts.map