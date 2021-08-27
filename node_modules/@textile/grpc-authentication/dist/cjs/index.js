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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcAuthentication = void 0;
const context_1 = require("@textile/context");
const grpc_connection_1 = require("@textile/grpc-connection");
const hub_threads_client_1 = require("@textile/hub-threads-client");
/**
 * Not for external use. Defines the authorization, authentication, and
 * API scoping methods used by gRPC API client classes such as Users and Buckets.
 *
 * @internal
 */
class GrpcAuthentication extends grpc_connection_1.GrpcConnection {
    /**
     * Copies the full scope and authentication from one API instance to this one.
     * This will copy any existing authentication and authorization info, including:
     *
     *   - Information created withKeyInfo and withUserAuth.
     *
     *   - Any token generated from getToken or getTokenChallenge.
     *
     *   - If you scoped the instance to a specific thread using withThread
     *
     * @param auth any authenticated API class such as Users or Buckets.
     *
     * @example
     * Copy an authenticated Users api instance to Buckets.
     * ```typescript
     * import { Buckets, Users } from '@textile/hub'
     *
     * const usersToBuckets = async (user: Users) => {
     *   const buckets = Buckets.copyAuth(user)
     *   return buckets
     * }
     * ```
     *
     * @example
     * Copy an authenticated Buckets api instance to Users.
     * ```typescript
     * import { Buckets, Users } from '@textile/hub'
     *
     * const bucketsToUsers = async (buckets: Buckets) => {
     *   const user = Users.copyAuth(buckets)
     *   return user
     * }
     * ```
     */
    static copyAuth(auth, options = {}) {
        return new GrpcAuthentication(auth.context, options.debug);
    }
    /**
     * Creates a new API client instance for accessing the gRPC API
     * using User Group key authentication. This method is recommended for
     * public apps where API secrets need to remain hidden from end users.
     * @param auth The UserAuth object.
     *
     * @example
     * ```@typescript
     * import { Client, UserAuth } from '@textile/hub'
     *
     * async function example (userAuth: UserAuth) {
     *   const client = await Client.withUserAuth(userAuth)
     * }
     * ```
     */
    static withUserAuth(auth, options = {}) {
        const context = typeof auth === 'object'
            ? context_1.Context.fromUserAuth(auth, options.host)
            : context_1.Context.fromUserAuthCallback(auth, options.host);
        return new GrpcAuthentication(context, options.debug);
    }
    /**
     * Creates a new API client instance for accessing the gRPC API
     * using key & secret based authentication. This method is recommended
     * for admin or insecure implementations where the non-signing keys or
     * key with secret can be embedded directly in an app.
     * @param key The KeyInfo object containing {key: string, secret: string}
     *
     * @example
     * ```@typescript
     * import { Client, KeyInfo } from '@textile/hub'
     *
     * async function start () {
     *   const keyInfo: KeyInfo = {
     *     key: '<api key>',
     *     secret: '<api secret>'
     *   }
     *   const client = await Client.withKeyInfo(keyInfo)
     * }
     * ```
     */
    static withKeyInfo(key, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const context = new context_1.Context(options.host);
            yield context.withKeyInfo(key, options.date);
            return new GrpcAuthentication(context, options.debug);
        });
    }
    /**
     * Scope future API calls to a specific thread.
     * For both Buckets and Threads, many API calls require knowledge
     * about which thread you are making requests against. Use `withThread`
     * to declare your target thread before making those API calls.
     * @param threadId the ID of the thread
     *
     * @example
     * ```@typescript
     * import { Client, ThreadID } from '@textile/hub'
     *
     * async function example (threadID: ThreadID) {
     *   const id = threadID.toString()
     *   const client = await Client.withThread(id)
     * }
     * ```
     */
    withThread(threadID) {
        if (threadID === undefined)
            return;
        this.context.withThread(threadID);
    }
    /**
     * Obtain a token for interacting with the remote API.
     * When your app is creating new private-key based users to interact with
     * the API using User Group keys, you must first create a new token for
     * each new user. Tokens do not change after you create them.
     * @param identity A user identity to use for interacting with APIs.
     *
     * @example
     * ```@typescript
     * import { Client, PrivateKey } from '@textile/hub'
     *
     * async function example (client: Client, identity: PrivateKey) {
     *   const token = await client.getToken(identity)
     *   return token
     * }
     * ```
     */
    getToken(identity) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new hub_threads_client_1.Client(this.context);
            const token = yield client.getToken(identity);
            this.context.withToken(token);
            return token;
        });
    }
    /**
     * Sets the user token for interacting with the remote API.
     */
    setToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.context.withToken(token);
        });
    }
    /**
     * Obtain a token for interacting with the remote API.
     * When your app is creating new private-key based users to interact with
     * the API using User Group keys, you must first create a new token for
     * each new user. Tokens do not change after you create them. This callback
     * method will require you to handle challenge signing.
     * @param identity A user identity to use for interacting with buckets.
     * @param callback A callback function that takes a `challenge` argument and returns a signed
     * message using the input challenge and the private key associated with `publicKey`.
     * @note `publicKey` must be the corresponding public key of the private key used in `callback`.
     *
     * @example
     * ```typescript
     * import { Client, PrivateKey } from '@textile/hub'
     *
     * async function example (client: Client, identity: PrivateKey) {
     *   const token = await client.getTokenChallenge(
     *     identity.pubKey,
     *     (challenge: Uint8Array) => {
     *       return new Promise((resolve, reject) => {
     *         // This is where you should program PrivateKey to respond to challenge
     *         // Read more here: https://docs.textile.io/tutorials/hub/production-auth/
     *       }
     *     }
     *   )
     *   return token
     * }
     * ```
     */
    getTokenChallenge(publicKey, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new hub_threads_client_1.Client(this.context);
            return client.getTokenChallenge(publicKey, callback);
        });
    }
}
exports.GrpcAuthentication = GrpcAuthentication;
//# sourceMappingURL=index.js.map