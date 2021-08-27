"use strict";
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
exports.Filecoin = void 0;
const grpc_authentication_1 = require("@textile/grpc-authentication");
const loglevel_1 = __importDefault(require("loglevel"));
const api_1 = require("./api");
const logger = loglevel_1.default.getLogger('filecoin');
/**
 * Filecoin is a client wrapper for interacting with the Textile Hub Filecoin API.
 * @example
 * Initialize the Bucket API and open an existing bucket (or create if new).
 * ```typescript
 * import { Filecoin, PrivateKey, UserAuth } from '@textile/hub'
 *
 * const getAddresses = async (auth: UserAuth, user: PrivateKey) => {
 *   const filecoin = Filecoin.withUserAuth(auth)
 *   // Scope the API to the current user
 *   await filecoin.getToken(user)
 *   // List wallet addresses
 *   const health = await filecoin.addresses()
 * }
 * ```
 */
class Filecoin extends grpc_authentication_1.GrpcAuthentication {
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.copyAuth}
     *
     * @example
     * Copy an authenticated Users api instance to Filecoin.
     * ```typescript
     * import { Filecoin, Users } from '@textile/hub'
     *
     * const usersToFilecoin = async (user: Users) => {
     *   const filecoin = Filecoin.copyAuth(user)
     *   return filecoin
     * }
     * ```
     *
     * @example
     * Copy an authenticated Filecoin api instance to Users.
     * ```typescript
     * import { Filecoin, Users } from '@textile/hub'
     *
     * const filecoinToUsers = async (filecoin: Filecoin) => {
     *   const user = Users.copyAuth(filecoin)
     *   return user
     * }
     * ```
     */
    static copyAuth(auth, options) {
        return new Filecoin(auth.context, options === null || options === void 0 ? void 0 : options.debug);
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.withUserAuth}
     *
     * @example
     * ```@typescript
     * import { Filecoin, UserAuth } from '@textile/hub'
     *
     * async function example (userAuth: UserAuth) {
     *   const filecoin = await Filecoin.withUserAuth(userAuth)
     * }
     * ```
     */
    static withUserAuth(auth, options) {
        const res = super.withUserAuth(auth, options);
        return this.copyAuth(res, options);
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.withKeyInfo}
     *
     * @example
     * ```@typescript
     * import { Filecoin, KeyInfo } from '@textile/hub'
     *
     * async function start () {
     *   const keyInfo: KeyInfo = {
     *     key: '<api key>',
     *     secret: '<api secret>'
     *   }
     *   const filecoin = await Filecoin.withKeyInfo(keyInfo)
     * }
     * ```
     */
    static withKeyInfo(key, options) {
        const _super = Object.create(null, {
            withKeyInfo: { get: () => super.withKeyInfo }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const auth = yield _super.withKeyInfo.call(this, key, options);
            return this.copyAuth(auth, options);
        });
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.getToken}
     *
     * @example
     * ```@typescript
     * import { Filecoin, PrivateKey } from '@textile/hub'
     *
     * async function example (filecoin: Filecoin, identity: PrivateKey) {
     *   const token = await filecoin.getToken(identity)
     *   return token // already added to `filecoin` scope
     * }
     * ```
     */
    getToken(identity) {
        const _super = Object.create(null, {
            getToken: { get: () => super.getToken }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getToken.call(this, identity);
        });
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.getToken}
     */
    setToken(token) {
        return super.setToken(token);
    }
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.getTokenChallenge}
     *
     * @example
     * ```typescript
     * import { Filecoin, PrivateKey } from '@textile/hub'
     *
     * async function example (filecoin: Filecoin, identity: PrivateKey) {
     *   const token = await filecoin.getTokenChallenge(
     *     identity.public.toString(),
     *     (challenge: Uint8Array) => {
     *       return new Promise((resolve, reject) => {
     *         // This is where you should program PrivateKey to respond to challenge
     *         // Read more here: https://docs.textile.io/tutorials/hub/production-auth/
     *       })
     *     }
     *   )
     *   return token
     * }
     * ```
     */
    getTokenChallenge(publicKey, callback) {
        const _super = Object.create(null, {
            getTokenChallenge: { get: () => super.getTokenChallenge }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getTokenChallenge.call(this, publicKey, callback);
        });
    }
    /**
     * List all Filecoin wallet addresses associated with the current account or user.
     * @beta
     */
    addresses() {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.addresses(this);
        });
    }
    /**
     * Get the balance for any wallet address.
     * @beta
     * @param address The wallet address to check the balance of.
     */
    balance(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.balance(this, address);
        });
    }
    /**
     * Get summary information about the storage and storage job state of cids stored by the user.
     * @beta
     * @param cids The cids to get summary info for.
     */
    cidSummary(...cids) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.cidSummary(this, undefined, ...cids);
        });
    }
    /**
     * Get information about the storage and storage job state of a cid stored by the user.
     * @beta
     * @param cid The cid to get info for.
     */
    cidInfo(cid) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.cidInfo(this, undefined, cid);
        });
    }
    /**
     * Query for Filecoin storage deal records for the current account/user.
     * @beta
     * @param config A config object to control the behavior of the query.
     */
    storageDealRecords(config) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.storageDealRecords(this, config);
        });
    }
    /**
     * Query for Filecoin retrieval deal records for the current account/user.
     * @beta
     * @param config A config object to control the behavior of the query.
     */
    retrievalDealRecords(config) {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.retrievalDealRecords(this, config);
        });
    }
}
exports.Filecoin = Filecoin;
//# sourceMappingURL=filecoin.js.map