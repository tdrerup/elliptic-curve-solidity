"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
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
exports.createUserAuth = exports.createAPISig = void 0;
/**
 * Common types/methods for Textile security including authentication and authorization.
 *
 * All methods here should be imported directly from the @textile/hub library.
 *
 * @packageDocumentation
 */
const fast_sha256_1 = require("fast-sha256");
require("fastestsmallesttextencoderdecoder");
const multibase_1 = __importDefault(require("multibase"));
const encoder = new TextEncoder();
const decoder = new TextDecoder();
/**
 * createAPISig generates an authorization signature and message only.
 *
 * This function should NOT be used client-side, as it requires a key secret.
 * @public
 * @example
 * Basic usage
 * ```typescript
 * import {createAPISig, APISig} from '@textile/threads'
 *
 * async function sign (key: string) {
 *   const sig: APISig = await createAPISig(key)
 *   return sig
 * }
 * ```
 * @param {string} secret - The key secret to generate the signature. See KeyInfo for details.
 * @param {Date} date - An optional future Date to use as signature message. Once `date` has passed, this
 * authorization signature and message will expire. Defaults to one minute from `Date.now`.
 */
function createAPISig(secret, date = new Date(Date.now() + 1000 * 60 * 30)) {
    return __awaiter(this, void 0, void 0, function* () {
        const sec = multibase_1.default.decode(secret);
        const msg = date.toISOString();
        const hash = new fast_sha256_1.HMAC(sec);
        const mac = hash.update(encoder.encode(msg)).digest();
        const sig = decoder.decode(multibase_1.default.encode('base32', mac));
        return { sig, msg };
    });
}
exports.createAPISig = createAPISig;
/**
 * Generate a UserAuth containing API key, signature, and message.
 *
 * The gRPC APIs will throw (or return an authorization error) if the message date has passed.
 * This function should NOT be used client-side, as it requires a key secret. The result does
 * not contain the secret and therefor CAN be used client side.
 * @public
 * @example
 * Create a new UserAuth
 * ```typescript
 * import {createUserAuth, KeyInfo, UserAuth} from '@textile/threads';
 *
 * async function auth (keyInfo: KeyInfo) {
 *   // Create an expiration and create a signature. 60s or less is recommended.
 *   const expiration = new Date(Date.now() + 60 * 1000)
 *   // Generate a new UserAuth
 *   const userAuth: UserAuth = await createUserAuth(keyInfo.key, keyInfo.secret ?? '', expiration)
 *   return userAuth
 * }
 * ```
 *
 * @param {string} key - The API key secret to generate the signature. See KeyInfo for details.
 * @param {string} secret - The API key secret to generate the signature. See KeyInfo for details.
 * @param {Date} date - An optional future Date to use as signature message. Default 1 minute from now.
 * @param {string} token - An optional user API token.
 */
function createUserAuth(key, secret, date, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const partial = yield createAPISig(secret, date);
        return Object.assign(Object.assign({}, partial), { key,
            token });
    });
}
exports.createUserAuth = createUserAuth;
__exportStar(require("./key"), exports);
//# sourceMappingURL=index.js.map