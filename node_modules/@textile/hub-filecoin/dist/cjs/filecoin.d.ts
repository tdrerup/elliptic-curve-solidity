import { Identity } from '@textile/crypto';
import { CopyAuthOptions, GrpcAuthentication, WithKeyInfoOptions, WithUserAuthOptions } from '@textile/grpc-authentication';
import { KeyInfo, UserAuth } from '@textile/security';
import { AddressInfo, CidInfo, CidSummary, DealRecordsConfig, RetrievalDealRecord, StorageDealRecord } from './types';
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
export declare class Filecoin extends GrpcAuthentication {
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
    static copyAuth(auth: GrpcAuthentication, options?: CopyAuthOptions): Filecoin;
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
    static withUserAuth(auth: UserAuth | (() => Promise<UserAuth>), options?: WithUserAuthOptions): Filecoin;
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
    static withKeyInfo(key: KeyInfo, options?: WithKeyInfoOptions): Promise<Filecoin>;
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
    getToken(identity: Identity): Promise<string>;
    /**
     * {@inheritDoc @textile/hub#GrpcAuthentication.getToken}
     */
    setToken(token: string): Promise<void>;
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
    getTokenChallenge(publicKey: string, callback: (challenge: Uint8Array) => Uint8Array | Promise<Uint8Array>): Promise<string>;
    /**
     * List all Filecoin wallet addresses associated with the current account or user.
     * @beta
     */
    addresses(): Promise<AddressInfo[]>;
    /**
     * Get the balance for any wallet address.
     * @beta
     * @param address The wallet address to check the balance of.
     */
    balance(address: string): Promise<bigint>;
    /**
     * Get summary information about the storage and storage job state of cids stored by the user.
     * @beta
     * @param cids The cids to get summary info for.
     */
    cidSummary(...cids: string[]): Promise<CidSummary[]>;
    /**
     * Get information about the storage and storage job state of a cid stored by the user.
     * @beta
     * @param cid The cid to get info for.
     */
    cidInfo(cid: string): Promise<CidInfo>;
    /**
     * Query for Filecoin storage deal records for the current account/user.
     * @beta
     * @param config A config object to control the behavior of the query.
     */
    storageDealRecords(config: DealRecordsConfig): Promise<StorageDealRecord[]>;
    /**
     * Query for Filecoin retrieval deal records for the current account/user.
     * @beta
     * @param config A config object to control the behavior of the query.
     */
    retrievalDealRecords(config: DealRecordsConfig): Promise<RetrievalDealRecord[]>;
}
