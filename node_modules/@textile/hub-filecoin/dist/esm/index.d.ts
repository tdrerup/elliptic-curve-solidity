import { Identity } from "@textile/crypto";
import { CopyAuthOptions, GrpcAuthentication, WithKeyInfoOptions, WithUserAuthOptions } from "@textile/grpc-authentication";
import { KeyInfo, UserAuth } from "@textile/security";
/**
 * Information about a wallet address.
 */
interface AddressInfo {
    /**
     * Human readable name.
     */
    name: string;
    /**
     * The address.
     */
    address: string;
    /**
     * The type of wallet address.
     */
    type: string;
    /**
     * The wallet address balance in attoFIL.
     */
    balance: bigint;
}
/**
 * IPFS related storage configuration.
 */
interface IpfsConfig {
    /**
     * Upper bound on adding data to IPFS node from the network before failing.
     */
    addTimeout: number;
}
/**
 * Hot storage configuration.
 */
interface HotConfig {
    /**
     * Whether or not to enable hot storage.
     */
    enabled: boolean;
    /**
     * Indicates that if data isn't available in hot storage, it's allowed to be fed by Cold Storage if available.
     */
    allowUnfreeze: boolean;
    /**
     * Maximum amount of attoFil to pay for retrieval of data to unfreeze.
     */
    unfreezeMaxPrice: number;
    /**
     * IPFS related storage configuration.
     */
    ipfs?: IpfsConfig;
}
/**
 * Filecoin storage renew configuration.
 */
interface FilRenew {
    /**
     * Whether or not to enable automatic renew of storage deals.
     */
    enabled: boolean;
    /**
     * In epochs, how soon before expiration to renew storage deals.
     */
    threshold: number;
}
/**
 * Filecoin storage configuration.
 */
interface FilConfig {
    /**
     * How many miners to store the data with.
     */
    replicationFactor: number;
    /**
     * Minimum number of epochs to store the data.
     */
    dealMinDuration: number;
    /**
     * Miners to exclude from storage deals.
     */
    excludedMiners: string[];
    /**
     * Miners to prefer for deal making.
     */
    trustedMiners: string[];
    /**
     * Preferred locations of minders to store data with.
     */
    countryCodes: string[];
    /**
     * Storage renew configuration.
     */
    renew?: FilRenew;
    /**
     * The wallet address to pay for storage.
     */
    address: string;
    /**
     * The max price to pay for storage in units of attoFIL per GiB per epoch.
     */
    maxPrice: number;
    /**
     * Whether or not to enable fast retrieval feature.
     */
    fastRetrieval: boolean;
    /**
     * How many epochs in the future impose a deadline to new deals being active on-chain.
     * This value might influence if miners accept deals, since they should seal fast enough to satisfy this constraint.
     */
    dealStartOffset: number;
}
/**
 * Cold storage configuration.
 */
interface ColdConfig {
    /**
     * Whether or not to enable cold storage.
     */
    enabled: boolean;
    /**
     * Filecoin storage configuration.
     */
    filecoin?: FilConfig;
}
/**
 * Configuration for storing data in Powergate.
 */
interface StorageConfig {
    /**
     * Hot storage configuration.
     */
    hot?: HotConfig;
    /**
     * Cold storage configuration.
     */
    cold?: ColdConfig;
    /**
     * Whether or not to enable storage auto repair.
     */
    repairable: boolean;
}
/**
 * Current IPFS storage state.
 */
interface IpfsHotInfo {
    /**
     * When the data was stored in IPFS.
     */
    created: Date;
}
/**
 * Current hot storage state.
 */
interface HotInfo {
    /**
     * Whether or not hot storage is enabled.
     */
    enabled: boolean;
    /**
     * The size of the data in bytes.
     */
    size: number;
    /**
     * Current IPFS storage state.
     */
    ipfs?: IpfsHotInfo;
}
/**
 * Current Filecoin storage state with a single miner.
 */
interface FilStorage {
    /**
     * The unique deal id.
     */
    dealId: number;
    /**
     * Whether or not the current storage is a renewal.
     */
    renewed: boolean;
    /**
     * The number of epochs the data is being stored for.
     */
    duration: number;
    /**
     * The starting epoch in which the deal is considered active on-chain.
     */
    startEpoch: number;
    /**
     * The miner the data is stored with.
     */
    miner: string;
    /**
     * The storage price in attoFIL per GiB per epoch.
     */
    epochPrice: number;
    /**
     * The piece cid.
     */
    pieceCid: string;
}
/**
 * Current Filecoin storage state.
 */
interface FilInfo {
    /**
     * The cid of the data being stored.
     */
    dataCid: string;
    /**
     * The size of the data being stored.
     */
    size: number;
    /**
     * Current Filecoin storage state with each miner.
     */
    proposals: FilStorage[];
}
/**
 * Current cold storage state.
 */
interface ColdInfo {
    /**
     * Whether or not cold storage is enabled.
     */
    enabled: boolean;
    /**
     * Current Filecoin storage state.
     */
    filecoin?: FilInfo;
}
/**
 * Current data storage state.
 */
interface StorageInfo {
    /**
     * The id of the job that executed the data storage.
     */
    jobId: string;
    /**
     * The data cid.
     */
    cid: string;
    /**
     * The timestamp of when the data was stored.
     */
    created: Date;
    /**
     * Current hot storage state.
     */
    hot?: HotInfo;
    /**
     * Current cold storage state.
     */
    cold?: ColdInfo;
}
/**
 * Information about a Filecoin storage deal.
 */
interface StorageDealInfo {
    /**
     * The cid of the deal proposal.
     */
    proposalCid: string;
    /**
     * The id of the current deal state.
     */
    stateId: number;
    /**
     * The name of the current deal state.
     */
    stateName: string;
    /**
     * The id of the miner for the deal.
     */
    miner: string;
    /**
     * The piece cid.
     */
    pieceCid: string;
    /**
     * The size of the stored data in bytes, including padding.
     */
    size: number;
    /**
     * The storage price in units of attoFIL per GiB per epoch.
     */
    pricePerEpoch: number;
    /**
     * The start epoch of the deal.
     */
    startEpoch: number;
    /**
     * The duration of the deal in epochs.
     */
    duration: number;
    /**
     * The deal id.
     */
    dealId: number;
    /**
     * The epoch in which the deal became active, or 0 if it is not yet active.
     */
    activationEpoch: number;
    /**
     * A message from the miner.
     */
    message: string;
}
/**
 * Information about a deal error.
 */
interface DealError {
    /**
     * The proposal cid.
     */
    proposalCid: string;
    /**
     * The miner.
     */
    miner: string;
    /**
     * A message describing the error.
     */
    message: string;
}
/**
 * Storage job status codes
 */
declare enum JobStatus {
    /**
     * Status is not specified.
     */
    Unspecified = 0,
    /**
     * The job is queued.
     */
    Queued = 1,
    /**
     * The job is executing.
     */
    Executing = 2,
    /**
     * The job has failed.
     */
    Failed = 3,
    /**
     * The job was canceled.
     */
    Canceled = 4,
    /**
     * The job succeeded.
     */
    Success = 5
}
/**
 * Information about a storage job.
 */
interface StorageJob {
    /**
     * The job id.
     */
    id: string;
    /**
     * An internal id associated with the user.
     */
    apiId: string;
    /**
     * The data cid the job is operating on.
     */
    cid: string;
    /**
     * The current job status.
     */
    status: JobStatus;
    /**
     * In case of failed job, a message describing the cause.
     */
    errorCause: string;
    /**
     * Information about Filecoin storage deals the job is managing.
     */
    dealInfo: StorageDealInfo[];
    /**
     * Information about any Filecoin deal errors that occurred.
     */
    dealErrors: DealError[];
    /**
     * The time the job was created.
     */
    createdAt: Date;
}
/**
 * Summary information about a cid in Powergate.
 */
interface CidSummary {
    /**
     * The cid.
     */
    cid: string;
    /**
     * Whether or not the data is already stored by Powergate.
     */
    stored: boolean;
    /**
     * A list of queued job ids for the cid.
     */
    queuedJobs: string[];
    /**
     * The id of the executing job for the cid if there is one.
     */
    executingJob?: string;
}
/**
 * Information about the current jobs and storage state of a data cid.
 */
interface CidInfo {
    /**
     * The data cid.
     */
    cid: string;
    /**
     * The latest storage configuration applied, or undefined if there isn't one.
     */
    latestStorageConfig?: StorageConfig;
    /**
     * Current data storage state, or undefined if there is none.
     */
    currentStorageInfo?: StorageInfo;
    /**
     * Information about queued storage jobs.
     */
    queuedStorageJobs: StorageJob[];
    /**
     * Information about the executing storage job or undefined if there isn't one.
     */
    executingStorageJob?: StorageJob;
}
/**
 * A record of a single storage deal.
 */
interface StorageDealRecord {
    /**
     * The data cid.
     */
    rootCid: string;
    /**
     * The wallet address used to pay for the deal.
     */
    address: string;
    /**
     * The timestamp of the deal.
     */
    time: Date;
    /**
     * Whether or not the deal is processing or final.
     */
    pending: boolean;
    /**
     * The current state of the deal.
     */
    dealInfo?: StorageDealInfo;
}
/**
 * Information about a retrieval deal.
 */
interface RetrievalDealInfo {
    /**
     * The data cid.
     */
    rootCid: string;
    /**
     * The size of the data in bytes.
     */
    size: number;
    minPrice: number;
    paymentInterval: number;
    paymentIntervalIncrease: number;
    miner: string;
    minerPeerId: string;
}
/**
 * A record of a single retrieval deal.
 */
interface RetrievalDealRecord {
    address: string;
    time: Date;
    dealInfo?: RetrievalDealInfo;
}
/**
 * A configuration object to control the behavior of querying for deal records.
 */
interface DealRecordsConfig {
    /**
     * Filter of wallet addressed used to fund the deals.
     */
    fromAddrs: string[];
    /**
     * Filter of data cids of the deals.
     */
    dataCids: string[];
    /**
     * Whether or not to include pending deals, default false.
     */
    includePending: boolean;
    /**
     * Whether or not to include final deals, default false.
     */
    includeFinal: boolean;
    /**
     * Whether or not to sort results by timestamp ascending, default descending.
     */
    ascending: boolean;
}
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
declare class Filecoin extends GrpcAuthentication {
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
export { Filecoin, AddressInfo, IpfsConfig, HotConfig, FilRenew, FilConfig, ColdConfig, StorageConfig, IpfsHotInfo, HotInfo, FilStorage, FilInfo, ColdInfo, StorageInfo, StorageDealInfo, DealError, JobStatus, StorageJob, CidSummary, CidInfo, StorageDealRecord, RetrievalDealInfo, RetrievalDealRecord, DealRecordsConfig };
