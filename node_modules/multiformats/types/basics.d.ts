import { CID } from "./index.js";
import { hasher } from "./index.js";
import { digest } from "./index.js";
import { varint } from "./index.js";
import { bytes } from "./index.js";
export const hashes: {
    identity: hasher.Hasher<"identity", 0>;
    sha256: hasher.Hasher<"sha2-256", 18>;
    sha512: hasher.Hasher<"sha2-512", 19>;
};
export const bases: {
    base64: import("./bases/base.js").Codec<string, string>;
    base64pad: import("./bases/base.js").Codec<string, string>;
    base64url: import("./bases/base.js").Codec<string, string>;
    base64urlpad: import("./bases/base.js").Codec<string, string>;
    base58btc: import("./bases/base.js").Codec<"base58btc", "z">;
    base58flickr: import("./bases/base.js").Codec<"base58flickr", "Z">;
    base36: import("./bases/base.js").Codec<"base36", "k">;
    base36upper: import("./bases/base.js").Codec<"base36upper", "K">;
    base32: import("./bases/base.js").Codec<string, string>;
    base32upper: import("./bases/base.js").Codec<string, string>;
    base32pad: import("./bases/base.js").Codec<string, string>;
    base32padupper: import("./bases/base.js").Codec<string, string>;
    base32hex: import("./bases/base.js").Codec<string, string>;
    base32hexupper: import("./bases/base.js").Codec<string, string>;
    base32hexpad: import("./bases/base.js").Codec<string, string>;
    base32hexpadupper: import("./bases/base.js").Codec<string, string>;
    base32z: import("./bases/base.js").Codec<string, string>;
    base16: import("./bases/base.js").Codec<string, string>;
    base16upper: import("./bases/base.js").Codec<string, string>;
    base10: import("./bases/base.js").Codec<"base10", "9">;
    base8: import("./bases/base.js").Codec<string, string>;
    base2: import("./bases/base.js").Codec<string, string>;
    identity: import("./bases/base.js").Codec<"identity", "\0">;
};
export namespace codecs {
    export { raw };
    export { json };
}
import * as raw from "./codecs/raw.js";
import * as json from "./codecs/json.js";
export { CID, hasher, digest, varint, bytes };
//# sourceMappingURL=basics.d.ts.map