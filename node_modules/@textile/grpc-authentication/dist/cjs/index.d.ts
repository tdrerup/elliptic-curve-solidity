import { Identity } from '@textile/crypto';
import { GrpcConnection } from '@textile/grpc-connection';
import { KeyInfo, UserAuth } from '@textile/security';
/**
 * Set the options for authenticating with an API key
 */
export interface WithKeyInfoOptions extends WithUserAuthOptions {
    /**
     * Optional. Get more detailed log information.
     */
    debug?: boolean;
    /**
     * Optional. Future date for the session to expire. Short time periods are strongly recommended. (Default 30 minutes).
     */
    date?: Date;
    /**
     * Development purposes only.
     */
    host?: string;
}
/**
 * Set the options for authenticating with a user auth
 */
export interface WithUserAuthOptions extends CopyAuthOptions {
    /**
     * Optional. Get more detailed log information.
     */
    debug?: boolean;
    /**
     * Development purposes only.
     */
    host?: string;
}
/**
 * Set additional options when copying authentication.
 */
export interface CopyAuthOptions {
    /**
     * Optional. Get more detailed log information.
     */
    debug?: boolean;
}
/**
 * Not for external use. Defines the authorization, authentication, and
 * API scoping methods used by gRPC API client classes such as Users and Buckets.
 *
 * @internal
 */
export declare class GrpcAuthentication extends GrpcConnection {
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
    static copyAuth(auth: GrpcAuthentication, options?: CopyAuthOptions): GrpcAuthentication;
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
    static withUserAuth(auth: UserAuth | (() => Promise<UserAuth>), options?: WithUserAuthOptions): GrpcAuthentication;
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
    static withKeyInfo(key: KeyInfo, options?: WithKeyInfoOptions): Promise<GrpcAuthentication>;
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
    withThread(threadID?: string): void;
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
    getToken(identity: Identity): Promise<string>;
    /**
     * Sets the user token for interacting with the remote API.
     */
    setToken(token: string): Promise<void>;
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
    getTokenChallenge(publicKey: string, callback: (challenge: Uint8Array) => Uint8Array | Promise<Uint8Array>): Promise<string>;
}
