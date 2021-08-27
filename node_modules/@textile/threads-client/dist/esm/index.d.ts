/**
 * @packageDocumentation
 * @module @textile/threads-client
 */
import { grpc } from '@improbable-eng/grpc-web';
import { ContextInterface } from '@textile/context';
import { Identity } from '@textile/crypto';
import { KeyInfo, UserAuth } from '@textile/security';
import * as pb from '@textile/threads-client-grpc/threads_pb';
import { ReadTransactionReply, ReadTransactionRequest, WriteTransactionReply, WriteTransactionRequest } from "@textile/threads-client-grpc/threads_pb";
import { ThreadID } from '@textile/threads-id';
import { JSONSchema3or4 } from 'to-json-schema';
/**
 * @packageDocumentation
 * @module @textile/threads-client/models
 */
// import { QueryJSON, SortJSON, CriterionJSON, ComparisonJSON, ValueJSON, Value } from './models'
/**
 * Filter parameters for db subscription
 */
interface Filter {
    /** The collection name */
    collectionName?: string;
    /** The instance ID */
    instanceID?: string;
    /** The action type: ALL (default), CREATE, SAVE, DELETE */
    actionTypes?: string[];
}
/**
 * Value represents a valid JSON data type.
 */
type Value = string | boolean | number;
/**
 * JSONValue is used by the gRPC server to handle JSON data types.
 */
interface ValueJSON {
    string?: string;
    bool?: boolean;
    float?: number;
}
/**
 * JSONOperation defines the set of possible operations to be used in a Query.
 */
declare enum ComparisonJSON {
    Eq = 0,
    Ne = 1,
    Gt = 2,
    Lt = 3,
    Ge = 4,
    Le = 5
}
/**
 * CriterionJSON represents a single Query criteria.
 */
interface CriterionJSON {
    fieldPath?: string;
    operation?: ComparisonJSON;
    value?: ValueJSON;
    query?: QueryJSON;
}
/**
 * SortJSON describes how and what field on which to sort a query.
 */
interface SortJSON {
    fieldPath: string;
    desc: boolean;
}
/**
 * QueryJSON represents a single store Query.
 */
interface QueryJSON {
    ands?: CriterionJSON[];
    ors?: QueryJSON[];
    sort?: SortJSON;
    seek?: string; // instanceId
    limit?: number;
    skip?: number;
    index?: string;
}
/**
 * Criterion is a partial condition that can specify comparison operator for a field.
 */
declare class Criterion implements CriterionJSON {
    fieldPath: string;
    operation?: ComparisonJSON | undefined;
    value?: ValueJSON | undefined;
    query?: Query | undefined;
    constructor(fieldPath: string, operation?: ComparisonJSON | undefined, value?: ValueJSON | undefined, query?: Query | undefined);
    /**
     * eq is an equality operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    eq(value: Value): Query;
    /**
     * ne is a not equal operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    ne(value: Value): Query;
    /**
     * gt is a greater operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    gt(value: Value): Query;
    /** lt is a less operation against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    lt(value: Value): Query;
    /** ge is a greater or equal operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    ge(value: Value): Query;
    /** le is a less or equal operator against a field
     * @param value The value to query against. Must be a valid JSON data type.
     */
    le(value: Value): Query;
    /**
     * create updates this Criterion with a new Operation and returns the corresponding query.
     * @param op
     * @param value
     */
    private create;
    /**
     * toJSON converts the Criterion to JSONCriterion, dropping circular references to internal Queries.
     */
    toJSON(): CriterionJSON;
}
/**
 * Alias Criterion to Where for a slightly nicer API (see example below)
 */
declare const Where: typeof Criterion;
/**
 * Query allows to build queries to be used to fetch data from a model.
 */
declare class Query implements QueryJSON {
    ands: CriterionJSON[];
    ors: QueryJSON[];
    sort?: SortJSON | undefined;
    // Additional query resrictions
    limit?: number;
    skip?: number;
    index?: string;
    seek?: string;
    /**
     * Query creates a new generic query object.
     * @param ands An array of top-level Criterions to be included in the query.
     * @param ors An array of internal queries.
     * @param sort An object describing how to sort the query.
     */
    constructor(ands?: CriterionJSON[], ors?: QueryJSON[], sort?: SortJSON | undefined);
    /**
     * where starts to create a query condition for a field
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    static where(fieldPath: string): Criterion;
    /**
     * and concatenates a new condition in an existing field.
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    and(fieldPath: string): Criterion;
    /**
     * useIndex specifies the index to use when running this query.
     * @param fieldPath The path to the indexed field.
     * @note fieldPath must be a valid field for which an index has been created.
     */
    useIndex(fieldPath: string): Query;
    /**
     * or concatenates a new condition that is sufficient for an instance to
     * satisfy, independent of the current Query. Has left-associativity as:
     * (a And b) Or c
     * @param query The 'sub-query' to concat to the existing query.
     */
    or(query: Query): Query;
    /**
     * orderBy specify ascending order for the query results.
     * On multiple calls, only the last one is considered.
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    orderBy(fieldPath: string): Query;
    /**
     * orderByID specifies ascending ID order for the query results.
     * On multiple calls, only the last one is considered.
     */
    orderByID(): Query;
    /**
     * orderByDesc specify descending order for the query results.
     * On multiple calls, only the last one is considered.
     * @param fieldPath The field name to query on. Can be a hierarchical path.
     */
    orderByDesc(fieldPath: string): Query;
    /**
     * orderByIDDesc specifies descending ID order for the query results.
     * On multiple calls, only the last one is considered.
     */
    orderByIDDesc(): Query;
    /**
     * seekID seeks to the given ID before returning query results.
     * @param id The instance id to seek.
     */
    seekID(id: string): Query;
    /**
     * limitTo sets the maximum number of results.
     * @param limit The max number of instances to return.
     */
    limitTo(limit: number): Query;
    /**
     * skipNum skips the given number of results.
     * @param num The number of instances to skip.
     */
    skipNum(num: number): Query;
}
/**
 * Transaction represents a bulk transaction on a store.
 * @hidden
 */
declare class Transaction<TRequest extends grpc.ProtobufMessage, TResponse extends grpc.ProtobufMessage> {
    protected readonly client: grpc.Client<TRequest, TResponse>;
    protected readonly threadID: ThreadID;
    protected readonly modelName: string;
    /**
     * Transaction creates a new transaction for the given store using the given model.
     * @param client The gRPC client to use for the transaction.
     * @param threadID the ID of the database
     * @param modelName The human-readable name for the model.
     */
    constructor(client: grpc.Client<TRequest, TResponse>, threadID: ThreadID, modelName: string);
    /**
     * end completes (flushes) the transaction. All operations between start and end will be applied as a single transaction upon a call to end.
     */
    end(): Promise<void>;
    /**
     * setReject rejects the current transaction, rather than flushing the results to the remote store via end.
     * @param reject A function which accepts a reason for rejecting the transaction.
     */
    protected setReject(reject: (reason?: any) => void): void;
}
/**
 * ReadTransaction performs a read-only bulk transaction on the underlying store.
 * {@inheritDoc @textile/threads-client#Transaction}
 * @example
 * Create a new entry and check for it within a transaction
 * ```typescript
 * import {Client, ThreadID} from '@textile/threads'
 *
 * interface Astronaut {
 *   name: string
 *   missions: number
 *   _id: string
 * }
 *
 * async function createAndCheck (client: Client, threadID: ThreadID) {
 *   const buzz: Astronaut = {
 *     name: 'Buzz',
 *     missions: 2,
 *     _id: '',
 *   }
 *
 *   const ids = await client.create(threadID, 'astronauts', [buzz])
 *   // Create and start transaction
 *   const t = client.readTransaction(threadID, 'astronauts')
 *   await t.start()
 *   const has = await t.has(ids)
 *   console.log(has) // true
 *   await t.end() // Finish
 * }
 * ```
 */
declare class ReadTransaction extends Transaction<ReadTransactionRequest, ReadTransactionReply> {
    protected readonly context: ContextInterface;
    protected readonly client: grpc.Client<ReadTransactionRequest, ReadTransactionReply>;
    protected readonly threadID: ThreadID;
    protected readonly modelName: string;
    constructor(context: ContextInterface, client: grpc.Client<ReadTransactionRequest, ReadTransactionReply>, threadID: ThreadID, modelName: string);
    /**
     * start begins the transaction. All operations between start and end will be applied as a single transaction upon a call to end.
     */
    start(): Promise<void>;
    /**
     * has checks whether a given instance exists in the given store.
     * @param IDs An array of instance ids to check for.
     */
    has(IDs: string[]): Promise<boolean>;
    /**
     * find queries the store for entities matching the given query parameters. See Query for options.
     * @param query The object that describes the query. See Query for options. Alternatively, see QueryJSON for the basic interface.
     */
    find<T = unknown>(query: QueryJSON): Promise<Array<T>>;
    /**
     * findByID queries the store for the id of an instance.
     * @param ID The id of the instance to search for.
     */
    findByID<T = unknown>(ID: string): Promise<T | undefined>;
}
/**
 * WriteTransaction performs a mutating bulk transaction on the underlying store.
 * {@inheritDoc @textile/threads-client#Transaction}
 * @example
 * Create a new entry in our collection
 * ```typescript
 * import {Client, ThreadID} from '@textile/threads'
 *
 * interface Astronaut {
 *   name: string
 *   missions: number
 *   _id: string
 * }
 *
 * async function createBuzz (client: Client, threadID: ThreadID) {
 *   const buzz: Astronaut = {
 *     name: 'Buzz',
 *     missions: 2,
 *     _id: '',
 *   }
 *
 *   const t = client.writeTransaction(threadID, 'astronauts')
 *   await t.start()
 *   await t.create([buzz])
 *   await t.end() // Commit
 * }
 * ```
 *
 * @example
 * Abort an in-flight transaction
 * ```typescript
 * import {Client, ThreadID} from '@textile/threads'
 *
 * interface Astronaut {
 *   name: string
 *   missions: number
 *   _id: string
 * }
 *
 * async function createBuzz (client: Client, threadID: ThreadID) {
 *   const buzz: Astronaut = {
 *     name: 'Buzz',
 *     missions: 2,
 *     _id: '',
 *   }
 *
 *   const t = client.writeTransaction(threadID, 'astronauts')
 *   await t.start()
 *   await t.create([buzz])
 *   await t.discard() // Abort
 *   await t.end()
 * }
 * ```
 */
declare class WriteTransaction extends Transaction<WriteTransactionRequest, WriteTransactionReply> {
    protected readonly context: ContextInterface;
    protected readonly client: grpc.Client<WriteTransactionRequest, WriteTransactionReply>;
    protected readonly threadID: ThreadID;
    protected readonly modelName: string;
    constructor(context: ContextInterface, client: grpc.Client<WriteTransactionRequest, WriteTransactionReply>, threadID: ThreadID, modelName: string);
    /**
     * start begins the transaction. All operations between start and end will be applied as a single transaction upon a call to end.
     */
    start(): Promise<void>;
    /**
     * create creates a new model instance in the given store.
     * @param values An array of model instances as JSON/JS objects.
     */
    create<T = unknown>(values: T[]): Promise<string[]>;
    /**
     * verify verifies existing instance changes.
     * @param values An array of instances as JSON/JS objects.
     */
    verify<T = unknown>(values: T[]): Promise<void>;
    /**
     * save saves changes to an existing model instance in the given store.
     * @param values An array of model instances as JSON/JS objects. Each model instance must have a valid existing `ID` property.
     */
    save<T = unknown>(values: T[]): Promise<void>;
    /**
     * delete deletes an existing model instance from the given store.
     * @param IDs An array of instance ids to delete.
     */
    delete(IDs: string[]): Promise<void>;
    /**
     * has checks whether a given instance exists in the given store.
     * @param IDs An array of instance ids to check for.
     */
    has(IDs: string[]): Promise<boolean>;
    /**
     * find queries the store for entities matching the given query parameters. See Query for options.
     * @param query The object that describes the query. See Query for options. Alternatively, see QueryJSON for the basic interface.
     */
    find<T = unknown>(query: QueryJSON): Promise<Array<T>>;
    /**
     * findByID queries the store for the id of an instance.
     * @param ID The id of the instance to search for.
     */
    findByID<T = unknown>(ID: string): Promise<T | undefined>;
    /**
     * Discard drops all active transaction changes.
     * It also invalidates the transaction, so it will fail upon calling end.
     * @example
     * Abort an in-flight transaction
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function example (client: Client, threadID: ThreadID) {
     *   const buzz: Astronaut = {
     *     name: 'Buzz',
     *     missions: 2,
     *     _id: '',
     *   }
     *
     *   const t = client.writeTransaction(threadID, 'astronauts')
     *   await t.start()
     *   await t.create([buzz])
     *   await t.discard() // Abort
     *   await t.end()
     * }
     * ```
     */
    discard(): Promise<void>;
}
/**
 * Event represents an update event.
 * It contains information about when the update occurred, the instance id, the collection name,
 * and the update patch itself.
 */
interface Event {
    /**
     * Unix timestamp.
     */
    timestamp: number;
    /**
     * The instance identifier (_id).
     */
    _id: string;
    /**
     * The collection to which the updated instance belongs.
     */
    collection_name: string;
    /**
     * The underlying patch update information. See {@link Patch} for details.
     */
    patch: Patch;
}
/**
 * PatchType represents the type of instance update. One of delete, create, or save.
 */
type PatchType = "delete" | "create" | "save";
/**
 * Patch represents an update to an instance.
 * It contains information about the update type, the instance that was updated, and the update operation.
 */
interface Patch {
    /**
     * The type of operation. One of delete, create, or save.
     */
    type: PatchType;
    /**
     * The instance identifier (_id).
     */
    instance_id: string;
    /**
     * The actual JSON patch document or undefined for a delete operation.
     * The patch can either be the state of an instance in the case of a create operation,
     * or a json patch document/array as defined in https://tools.ietf.org/html/rfc6902.
     * See {@link https://github.com/evanphx/json-patch} for implementation details.
     */
    json_patch?: any;
}
declare function getFunctionBody(fn: ((...args: any[]) => any) | string): string;
/**
 * CollectionConfig is the configuration options for creating and updating a Collection.
 * It supports the following configuration options:
 *   - Name: The name of the collection, e.g, "Animals" (must be unique per DB).
 *   - Schema: A JSON Schema), which is used for instance validation.
 *   - Indexes: An optional list of index configurations, which define how instances are indexed.
 *   - WriteValidator: An optional JavaScript (ECMAScript 5.1) function that is used to validate
 *     instances on write.
 *   - ReadFilter: An optional JavaScript (ECMAScript 5.1) function that is used to filter
 *     instances on read.
 *
 * The `writeValidator` function receives three arguments:
 *   - writer: The multibase-encoded public key identity of the writer.
 *   - event: An object describing the update event (see core.Event).
 *   - instance: The current instance as a JavaScript object before the update event is applied.
 *
 * A falsy return value indicates a failed validation. Note that the function arguments must
 * be named as documented here (writer, event, instance). These functions run in a secure sandbox
 * where these argument names are specified.
 *
 * Having access to writer, event, and instance opens the door to a variety of app-specific logic.
 * Textile Buckets file-level access roles are implemented in part with a write validator.
 *
 * The `readFilter` function receives three arguments:
 *   - reader: The multibase-encoded public key identity of the reader.
 *   - instance: The current instance as a JavaScript object.
 *
 * The function must return a JavaScript object. Most implementations will modify and return the
 * current instance. Note that the function arguments must be named as documented here (reader,
 * instance). These functions run in a secure sandbox where these argument names are specified.
 * Like write validation, read filtering opens the door to a variety of app-specific logic.
 * Textile Buckets file-level access roles are implemented in part with a read filter.
 */
interface CollectionConfig<W = any, R = W> {
    name: string;
    schema?: JSONSchema3or4 | any;
    indexes?: pb.Index.AsObject[];
    writeValidator?: ((writer: string, event: Event, instance: W) => boolean) | string;
    readFilter?: ((reader: string, instance: R) => R) | string;
}
declare function maybeLocalAddr(ip: string): boolean | RegExpMatchArray;
declare enum Action {
    CREATE = 0,
    SAVE = 1,
    DELETE = 2
}
interface Update<T = unknown> {
    instance: T | undefined;
    collectionName: string;
    instanceID: string;
    action: Action;
}
/**
 * DBInfo contains joining/sharing information for a Thread/DB.
 */
interface DBInfo {
    /**
     * The Thread Key, encoded as a base32 string.
     * @see {@link ThreadKey} for details.
     */
    key: string;
    /**
     * The Multiaddrs for a peer hosting the given Thread/DB.
     */
    addrs: string[];
}
/**
 * Client is a web-gRPC wrapper client for communicating with a webgRPC-enabled Threads server.
 * This client library can be used to interact with a local or remote Textile gRPC-service
 * It is a wrapper around Textile Thread's 'DB' API, which is defined here:
 * https://github.com/textileio/go-threads/blob/master/api/pb/api.proto.
 *
 * @example
 * ```typescript
 * import {Client, Identity, UserAuth} from '@textile/threads'
 *
 * async function setupDB(auth: UserAuth, identity: Identity) {
 *   // Initialize the client
 *   const client = Client.withUserAuth(auth)
 *
 *   // Connect the user to your API
 *   const userToken = await client.getToken(identity)
 *
 *   // Create a new DB
 *   const threadID = await client.newDB(undefined, 'nasa')
 *
 *   // Create a new Collection from an Object
 *   const buzz = {
 *     name: 'Buzz',
 *     missions: 2,
 *     _id: '',
 *   }
 *   await client.newCollectionFromObject(threadID, buzz, { name: 'astronauts' })
 *
 *   // Store the buzz object in the new collection
 *   await client.create(threadID, 'astronauts', [buzz])
 *
 *   return threadID
 * }
 * ```
 */
declare class Client {
    context: ContextInterface;
    serviceHost: string;
    rpcOptions: grpc.RpcOptions;
    /**
     * Creates a new gRPC client instance for accessing the Textile Threads API.
     * @param context The context to use for interacting with the APIs. Can be modified later.
     * @param debug Should we run in debug mode. Defaults to false.
     */
    /**
     * Creates a new gRPC client instance for accessing the Textile Threads API.
     * @param context The context to use for interacting with the APIs. Can be modified later.
     * @param debug Should we run in debug mode. Defaults to false.
     */
    constructor(context?: ContextInterface, debug?: boolean);
    /**
     * Create a new gRPC client instance from a supplied user auth object.
     * Assumes all default gRPC settlings. For customization options, use a context object directly.
     * The callback method will automatically refresh expiring credentials.
     * @param auth The user auth object or an async callback that returns a user auth object.
     * @example
     * ```typescript
     * import {UserAuth, Client} from '@textile/threads'
     *
     * function create (auth: UserAuth) {
     *   return Client.withUserAuth(auth)
     * }
     * ```
     * @example
     * ```typescript
     * import {UserAuth, Client} from '@textile/threads'
     *
     * function setCallback (callback: () => Promise<UserAuth>) {
     *   return Client.withUserAuth(callback)
     * }
     * ```
     */
    /**
     * Create a new gRPC client instance from a supplied user auth object.
     * Assumes all default gRPC settlings. For customization options, use a context object directly.
     * The callback method will automatically refresh expiring credentials.
     * @param auth The user auth object or an async callback that returns a user auth object.
     * @example
     * ```typescript
     * import {UserAuth, Client} from '@textile/threads'
     *
     * function create (auth: UserAuth) {
     *   return Client.withUserAuth(auth)
     * }
     * ```
     * @example
     * ```typescript
     * import {UserAuth, Client} from '@textile/threads'
     *
     * function setCallback (callback: () => Promise<UserAuth>) {
     *   return Client.withUserAuth(callback)
     * }
     * ```
     */
    static withUserAuth(auth: UserAuth | (() => Promise<UserAuth>), host?: string, debug?: boolean): Client;
    /**
     * Create a new gRPC client instance from a supplied key and secret
     * @param key The KeyInfo object containing {key: string, secret: string, type: 0}. 0 === User Group Key, 1 === Account Key
     * @param host The remote gRPC host to connect with. Should be left as default.
     * @param debug Whether to run in debug mode. Defaults to false.
     * @example
     * ```typescript
     * import {KeyInfo, Client} from '@textile/threads'
     *
     * async function create (keyInfo: KeyInfo) {
     *   return await Client.withKeyInfo(keyInfo)
     * }
     * ```
     */
    /**
     * Create a new gRPC client instance from a supplied key and secret
     * @param key The KeyInfo object containing {key: string, secret: string, type: 0}. 0 === User Group Key, 1 === Account Key
     * @param host The remote gRPC host to connect with. Should be left as default.
     * @param debug Whether to run in debug mode. Defaults to false.
     * @example
     * ```typescript
     * import {KeyInfo, Client} from '@textile/threads'
     *
     * async function create (keyInfo: KeyInfo) {
     *   return await Client.withKeyInfo(keyInfo)
     * }
     * ```
     */
    static withKeyInfo(key: KeyInfo, host?: string, debug?: boolean): Promise<Client>;
    /**
     * Obtain a token per user (identity) for interacting with the remote API.
     * @param identity A user identity to use for creating records in the database. A random identity
     * can be created with `Client.randomIdentity(), however, it is not easy/possible to migrate
     * identities after the fact. Please store or otherwise persist any identity information if
     * you wish to retrieve user data later, or use an external identity provider.
     * @param ctx Context object containing web-gRPC headers and settings.
     * @example
     * ```typescript
     * import {Client, Identity} from '@textile/threads'
     *
     * async function newToken (client: Client, user: Identity) {
     *   // Token is added to the client connection at the same time
     *   const token = await client.getToken(user)
     *   return token
     * }
     * ```
     */
    /**
     * Obtain a token per user (identity) for interacting with the remote API.
     * @param identity A user identity to use for creating records in the database. A random identity
     * can be created with `Client.randomIdentity(), however, it is not easy/possible to migrate
     * identities after the fact. Please store or otherwise persist any identity information if
     * you wish to retrieve user data later, or use an external identity provider.
     * @param ctx Context object containing web-gRPC headers and settings.
     * @example
     * ```typescript
     * import {Client, Identity} from '@textile/threads'
     *
     * async function newToken (client: Client, user: Identity) {
     *   // Token is added to the client connection at the same time
     *   const token = await client.getToken(user)
     *   return token
     * }
     * ```
     */
    getToken(identity: Identity, ctx?: ContextInterface): Promise<string>;
    /**
     * Obtain a token per user (identity) for interacting with the remote API.
     * @param publicKey The public key of a user identity to use for creating records in the database.
     * A random identity can be created with `Client.randomIdentity(), however, it is not
     * easy/possible to migrate identities after the fact. Please store or otherwise persist any
     * identity information if you wish to retrieve user data later, or use an external identity
     * provider.
     * @param callback A callback function that takes a `challenge` argument and returns a signed
     * message using the input challenge and the private key associated with `publicKey`.
     * @param ctx Context object containing web-gRPC headers and settings.
     * @remarks `publicKey` must be the corresponding public key of the private key used in `callback`.
     */
    /**
     * Obtain a token per user (identity) for interacting with the remote API.
     * @param publicKey The public key of a user identity to use for creating records in the database.
     * A random identity can be created with `Client.randomIdentity(), however, it is not
     * easy/possible to migrate identities after the fact. Please store or otherwise persist any
     * identity information if you wish to retrieve user data later, or use an external identity
     * provider.
     * @param callback A callback function that takes a `challenge` argument and returns a signed
     * message using the input challenge and the private key associated with `publicKey`.
     * @param ctx Context object containing web-gRPC headers and settings.
     * @remarks `publicKey` must be the corresponding public key of the private key used in `callback`.
     */
    getTokenChallenge(publicKey: string, callback: (challenge: Uint8Array) => Uint8Array | Promise<Uint8Array>, ctx?: ContextInterface): Promise<string>;
    /**
     * newDB creates a new store on the remote node.
     * @param threadID the ID of the database
     * @param name The human-readable name for the database
     * @example
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function createDB (client: Client) {
     *   const threadID: ThreadID = await client.newDB()
     *   return threadID
     * }
     * ```
     */
    /**
     * newDB creates a new store on the remote node.
     * @param threadID the ID of the database
     * @param name The human-readable name for the database
     * @example
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function createDB (client: Client) {
     *   const threadID: ThreadID = await client.newDB()
     *   return threadID
     * }
     * ```
     */
    newDB(threadID?: ThreadID, name?: string): Promise<ThreadID>;
    /**
     * open creates and enters a new store on the remote node.
     * @param threadID the ID of the database
     * @param name The human-readable name for the database
     * @example
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function openDB (client: Client, threadID: ThreadID) {
     *   await client.open(threadID)
     * }
     * ```
     */
    /**
     * open creates and enters a new store on the remote node.
     * @param threadID the ID of the database
     * @param name The human-readable name for the database
     * @example
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function openDB (client: Client, threadID: ThreadID) {
     *   await client.open(threadID)
     * }
     * ```
     */
    open(threadID: ThreadID, name?: string): Promise<void>;
    /**
     * Deletes an entire DB.
     * @param threadID the ID of the database.
     * @example
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function deleteDB (client: Client, threadID: ThreadID) {
     *   await client.deleteDB(threadID)
     *   return
     * }
     * ```
     */
    /**
     * Deletes an entire DB.
     * @param threadID the ID of the database.
     * @example
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function deleteDB (client: Client, threadID: ThreadID) {
     *   await client.deleteDB(threadID)
     *   return
     * }
     * ```
     */
    deleteDB(threadID: ThreadID): Promise<void>;
    /**
     * Lists all known DBs.
     */
    /**
     * Lists all known DBs.
     */
    listDBs(): Promise<Array<{
        id: string;
        name?: string;
    }>>;
    /**
     * Lists the collections in a thread
     * @param thread the ID of the database
     */
    /**
     * Lists the collections in a thread
     * @param thread the ID of the database
     */
    listCollections(thread: ThreadID): Promise<Array<pb.GetCollectionInfoReply.AsObject>>;
    /**
     * newCollection registers a new collection schema under the given name.
     * The schema must be a valid json-schema.org schema, and can be a JSON string or object.
     * @param threadID the ID of the database
     * @param config A configuration object for the collection. See {@link CollectionConfig}. Note
     * that the validator and filter functions can also be provided as strings.
     *
     * @example
     * Create a new astronauts collection
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * const astronauts = {
     *   title: "Astronauts",
     *   type: "object",
     *   required: ["_id"],
     *   properties: {
     *     _id: {
     *       type: "string",
     *       description: "The instance's id.",
     *     },
     *     name: {
     *       type: "string",
     *       description: "The astronauts name.",
     *     },
     *     missions: {
     *       description: "The number of missions.",
     *       type: "integer",
     *       minimum: 0,
     *     },
     *   },
     * }
     *
     * async function newCollection (client: Client, threadID: ThreadID) {
     *   return await client.updateCollection(threadID, { name: 'astronauts', schema: astronauts })
     * }
     * ```
     * @example
     * Create a collection with writeValidator and readFilter functions
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * const schema = {
     *   title: "Person",
     *   type: "object",
     *   required: ["_id"],
     *   properties: {
     *     _id: { type: "string" },
     *     name: { type: "string" },
     *     age: { type: "integer" },
     *   },
     * }
     *
     * // We'll create a helper interface for type-safety
     * interface Person {
     *   _id: string
     *   age: number
     *   name: string
     * }
     *
     * const writeValidator = (writer: string, event: any, instance: Person) => {
     *   var type = event.patch.type
     *   var patch = event.patch.json_patch
     *   switch (type) {
     *     case "delete":
     *       if (writer != "the_boss") {
     *         return false // Not the boss? No deletes for you.
     *       }
     *     default:
     *       return true
     *   }
     * }
     *
     * const readFilter = (reader: string, instance: Person) => {
     *   if (instance.age > 50) {
     *     delete instance.age // Let's just hide their age for them ;)
     *   }
     *   return instance
     * }
     *
     * async function newCollection (client: Client, threadID: ThreadID) {
     *   return await client.updateCollection(threadID, {
     *     name: 'Person', schema, writeValidator, readFilter
     *   })
     * }
     * ```
     */
    /**
     * newCollection registers a new collection schema under the given name.
     * The schema must be a valid json-schema.org schema, and can be a JSON string or object.
     * @param threadID the ID of the database
     * @param config A configuration object for the collection. See {@link CollectionConfig}. Note
     * that the validator and filter functions can also be provided as strings.
     *
     * @example
     * Create a new astronauts collection
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * const astronauts = {
     *   title: "Astronauts",
     *   type: "object",
     *   required: ["_id"],
     *   properties: {
     *     _id: {
     *       type: "string",
     *       description: "The instance's id.",
     *     },
     *     name: {
     *       type: "string",
     *       description: "The astronauts name.",
     *     },
     *     missions: {
     *       description: "The number of missions.",
     *       type: "integer",
     *       minimum: 0,
     *     },
     *   },
     * }
     *
     * async function newCollection (client: Client, threadID: ThreadID) {
     *   return await client.updateCollection(threadID, { name: 'astronauts', schema: astronauts })
     * }
     * ```
     * @example
     * Create a collection with writeValidator and readFilter functions
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * const schema = {
     *   title: "Person",
     *   type: "object",
     *   required: ["_id"],
     *   properties: {
     *     _id: { type: "string" },
     *     name: { type: "string" },
     *     age: { type: "integer" },
     *   },
     * }
     *
     * // We'll create a helper interface for type-safety
     * interface Person {
     *   _id: string
     *   age: number
     *   name: string
     * }
     *
     * const writeValidator = (writer: string, event: any, instance: Person) => {
     *   var type = event.patch.type
     *   var patch = event.patch.json_patch
     *   switch (type) {
     *     case "delete":
     *       if (writer != "the_boss") {
     *         return false // Not the boss? No deletes for you.
     *       }
     *     default:
     *       return true
     *   }
     * }
     *
     * const readFilter = (reader: string, instance: Person) => {
     *   if (instance.age > 50) {
     *     delete instance.age // Let's just hide their age for them ;)
     *   }
     *   return instance
     * }
     *
     * async function newCollection (client: Client, threadID: ThreadID) {
     *   return await client.updateCollection(threadID, {
     *     name: 'Person', schema, writeValidator, readFilter
     *   })
     * }
     * ```
     */
    newCollection(threadID: ThreadID, config: CollectionConfig): Promise<void>;
    /**
     * newCollectionFromObject creates and registers a new collection under the given name.
     * The input object must be serializable to JSON, and contain only json-schema.org types.
     * @param threadID the ID of the database
     * @param obj The actual object to attempt to extract a schema from.
     * @param config A configuration object for the collection. See {@link CollectionConfig}.
     *
     * @example
     * Change a new astronauts collection based of Buzz
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function newCollection (client: Client, threadID: ThreadID) {
     *   const buzz = {
     *     name: 'Buzz',
     *     missions: 2,
     *     _id: '',
     *   }
     *   return await client.newCollectionFromObject(threadID, buzz, { name: 'astronauts' })
     * }
     * ```
     */
    /**
     * newCollectionFromObject creates and registers a new collection under the given name.
     * The input object must be serializable to JSON, and contain only json-schema.org types.
     * @param threadID the ID of the database
     * @param obj The actual object to attempt to extract a schema from.
     * @param config A configuration object for the collection. See {@link CollectionConfig}.
     *
     * @example
     * Change a new astronauts collection based of Buzz
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function newCollection (client: Client, threadID: ThreadID) {
     *   const buzz = {
     *     name: 'Buzz',
     *     missions: 2,
     *     _id: '',
     *   }
     *   return await client.newCollectionFromObject(threadID, buzz, { name: 'astronauts' })
     * }
     * ```
     */
    newCollectionFromObject(threadID: ThreadID, obj: Record<string, any>, config: Omit<CollectionConfig, 'schema'>): Promise<void>;
    /**
     * updateCollection updates an existing collection.
     * Currently, updates can include name and schema.
     * @todo Allow update of indexing information.
     * @param threadID the ID of the database
     * @param config A configuration object for the collection. See {@link CollectionConfig}.
     *
     * @example
     * Change the name of our astronauts collection
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * const astronauts = {
     *   title: "Astronauts",
     *   type: "object",
     *   required: ["_id"],
     *   properties: {
     *     _id: {
     *       type: "string",
     *       description: "The instance's id.",
     *     },
     *     name: {
     *       type: "string",
     *       description: "The astronauts name.",
     *     },
     *     missions: {
     *       description: "The number of missions.",
     *       type: "integer",
     *       minimum: 0,
     *     },
     *   },
     * }
     *
     * async function changeName (client: Client, threadID: ThreadID) {
     *   return await client.updateCollection(threadID, { name: 'toy-story-characters', schema: astronauts })
     * }
     * ```
     */
    /**
     * updateCollection updates an existing collection.
     * Currently, updates can include name and schema.
     * @todo Allow update of indexing information.
     * @param threadID the ID of the database
     * @param config A configuration object for the collection. See {@link CollectionConfig}.
     *
     * @example
     * Change the name of our astronauts collection
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * const astronauts = {
     *   title: "Astronauts",
     *   type: "object",
     *   required: ["_id"],
     *   properties: {
     *     _id: {
     *       type: "string",
     *       description: "The instance's id.",
     *     },
     *     name: {
     *       type: "string",
     *       description: "The astronauts name.",
     *     },
     *     missions: {
     *       description: "The number of missions.",
     *       type: "integer",
     *       minimum: 0,
     *     },
     *   },
     * }
     *
     * async function changeName (client: Client, threadID: ThreadID) {
     *   return await client.updateCollection(threadID, { name: 'toy-story-characters', schema: astronauts })
     * }
     * ```
     */
    updateCollection(threadID: ThreadID, config: CollectionConfig): Promise<void>;
    /**
     * Deletes an existing collection.
     * @param threadID the ID of the database.
     * @param name The human-readable name for the collection.
     * @param schema The actual json-schema.org compatible schema object.
     * @example
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function deleteAstronauts (client: Client, thread: ThreadID) {
     *   await client.deleteCollection(thread, 'astronauts')
     *   return
     * }
     * ```
     */
    /**
     * Deletes an existing collection.
     * @param threadID the ID of the database.
     * @param name The human-readable name for the collection.
     * @param schema The actual json-schema.org compatible schema object.
     * @example
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function deleteAstronauts (client: Client, thread: ThreadID) {
     *   await client.deleteCollection(thread, 'astronauts')
     *   return
     * }
     * ```
     */
    deleteCollection(threadID: ThreadID, name: string): Promise<void>;
    /**
     * Returns an existing indexes for a collection.
     * @param threadID the ID of the database.
     * @param name The human-readable name for the collection.
     *
     * @example
     * Return a set of indexes for our astronauts collection
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function getIndexes (client: Client, threadID: ThreadID) {
     *   return await client.getCollectionIndexes(threadID, 'astronauts')
     * }
     * ```
     */
    /**
     * Returns an existing indexes for a collection.
     * @param threadID the ID of the database.
     * @param name The human-readable name for the collection.
     *
     * @example
     * Return a set of indexes for our astronauts collection
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function getIndexes (client: Client, threadID: ThreadID) {
     *   return await client.getCollectionIndexes(threadID, 'astronauts')
     * }
     * ```
     */
    getCollectionIndexes(threadID: ThreadID, name: string): Promise<pb.Index.AsObject[]>;
    getCollectionInfo(threadID: ThreadID, name: string): Promise<CollectionConfig>;
    /**
     * newDBFromAddr initializes the client with the given store, connecting to the given
     * thread address (database). It should be called before any operation on the store, and is an
     * alternative to start, which creates a local store. newDBFromAddr should also include the
     * read/follow key, which should be a Uint8Array or base32-encoded string.
     * @remarks
     * See getDBInfo for a possible source of the address and keys. See {@link ThreadKey} for
     * information about thread keys.
     * @param address The address for the thread with which to connect.
     * Should be of the form /ip4/<url/ip-address>/tcp/<port>/p2p/<peer-id>/thread/<thread-id>
     * @param key The set of keys to use to connect to the database
     * @param collections Array of CollectionConfig objects for seeding the DB with collections.
     */
    /**
     * newDBFromAddr initializes the client with the given store, connecting to the given
     * thread address (database). It should be called before any operation on the store, and is an
     * alternative to start, which creates a local store. newDBFromAddr should also include the
     * read/follow key, which should be a Uint8Array or base32-encoded string.
     * @remarks
     * See getDBInfo for a possible source of the address and keys. See {@link ThreadKey} for
     * information about thread keys.
     * @param address The address for the thread with which to connect.
     * Should be of the form /ip4/<url/ip-address>/tcp/<port>/p2p/<peer-id>/thread/<thread-id>
     * @param key The set of keys to use to connect to the database
     * @param collections Array of CollectionConfig objects for seeding the DB with collections.
     */
    newDBFromAddr(address: string, key: string | Uint8Array, collections?: Array<CollectionConfig>): Promise<ThreadID>;
    /**
     * Connect client to an existing database using information in the DBInfo object
     * This should be called before any operation on the store, and is an alternative
     * to open, which re-opens a database already opened by the user.
     * @remarks This is a helper method around newDBFromAddr, which takes the 'raw' output
     * from getDBInfo. See getDBInfo for a possible source of the address and keys.
     * @param info The output from a call to getDBInfo on a separate peer.
     * @param includeLocal Whether to try dialing addresses that appear to be on the local host.
     * Defaults to false, preferring to add from public ip addresses.
     * @param collections Array of `name` and JSON schema pairs for seeding the DB with collections.
     *
     * @example
     * Get DB info and use DB info to join an existing remote thread (e.g. invited)
     * ```typescript
     * import {Client, DBInfo, ThreadID} from '@textile/threads'
     *
     * async function getInfo (client: Client, threadID: ThreadID): Promise<DBInfo> {
     *   return await client.getDBInfo(threadID)
     * }
     *
     * async function joinFromInfo (client: Client, info: DBInfo) {
     *   return await client.joinFromInfo(info)
     * }
     * ```
     */
    /**
     * Connect client to an existing database using information in the DBInfo object
     * This should be called before any operation on the store, and is an alternative
     * to open, which re-opens a database already opened by the user.
     * @remarks This is a helper method around newDBFromAddr, which takes the 'raw' output
     * from getDBInfo. See getDBInfo for a possible source of the address and keys.
     * @param info The output from a call to getDBInfo on a separate peer.
     * @param includeLocal Whether to try dialing addresses that appear to be on the local host.
     * Defaults to false, preferring to add from public ip addresses.
     * @param collections Array of `name` and JSON schema pairs for seeding the DB with collections.
     *
     * @example
     * Get DB info and use DB info to join an existing remote thread (e.g. invited)
     * ```typescript
     * import {Client, DBInfo, ThreadID} from '@textile/threads'
     *
     * async function getInfo (client: Client, threadID: ThreadID): Promise<DBInfo> {
     *   return await client.getDBInfo(threadID)
     * }
     *
     * async function joinFromInfo (client: Client, info: DBInfo) {
     *   return await client.joinFromInfo(info)
     * }
     * ```
     */
    joinFromInfo(info: DBInfo, includeLocal?: boolean, collections?: Array<CollectionConfig>): Promise<ThreadID>;
    /**
     * Returns a DBInfo objection containing metadata required to invite other peers to join a given thread.
     * @param threadID the ID of the database
     * @returns An object with an encoded thread key, and a list of multiaddrs.
     *
     * @example
     * Get DB info and use DB info to join an existing remote thread (e.g. invited)
     * ```typescript
     * import {Client, DBInfo, ThreadID} from '@textile/threads'
     *
     * async function getInfo (client: Client, threadID: ThreadID): Promise<DBInfo> {
     *   return await client.getDBInfo(threadID)
     * }
     *
     * async function joinFromInfo (client: Client, info: DBInfo) {
     *   return await client.joinFromInfo(info)
     * }
     * ```
     */
    /**
     * Returns a DBInfo objection containing metadata required to invite other peers to join a given thread.
     * @param threadID the ID of the database
     * @returns An object with an encoded thread key, and a list of multiaddrs.
     *
     * @example
     * Get DB info and use DB info to join an existing remote thread (e.g. invited)
     * ```typescript
     * import {Client, DBInfo, ThreadID} from '@textile/threads'
     *
     * async function getInfo (client: Client, threadID: ThreadID): Promise<DBInfo> {
     *   return await client.getDBInfo(threadID)
     * }
     *
     * async function joinFromInfo (client: Client, info: DBInfo) {
     *   return await client.joinFromInfo(info)
     * }
     * ```
     */
    getDBInfo(threadID: ThreadID): Promise<DBInfo>;
    /**
     * Creates a new model instance in the given store.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param values An array of model instances as JSON/JS objects.
     *
     * @example
     * Create a new entry in our collection
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function createBuzz (client: Client, threadID: ThreadID) {
     *   const buzz: Astronaut = {
     *     name: 'Buzz',
     *     missions: 2,
     *     _id: '',
     *   }
     *
     *   await client.create(threadID, 'astronauts', [buzz])
     * }
     * ```
     */
    /**
     * Creates a new model instance in the given store.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param values An array of model instances as JSON/JS objects.
     *
     * @example
     * Create a new entry in our collection
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function createBuzz (client: Client, threadID: ThreadID) {
     *   const buzz: Astronaut = {
     *     name: 'Buzz',
     *     missions: 2,
     *     _id: '',
     *   }
     *
     *   await client.create(threadID, 'astronauts', [buzz])
     * }
     * ```
     */
    create(threadID: ThreadID, collectionName: string, values: any[]): Promise<string[]>;
    /**
     * Saves changes to an existing model instance in the given store.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param values An array of model instances as JSON/JS objects.
     * Each model instance must have a valid existing `_id` property.
     *
     * @example
     * Update an existing instance
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function updateBuzz (client: Client, threadID: ThreadID) {
     *   const query = new Where('name').eq('Buzz')
     *   const result = await client.find<Astronaut>(threadID, 'astronauts', query)
     *
     *   if (result.length < 1) return
     *
     *   const buzz = result[0]
     *   buzz.missions += 1
     *
     *   return await client.save(threadID, 'astronauts', [buzz])
     * }
     * ```
     */
    /**
     * Saves changes to an existing model instance in the given store.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param values An array of model instances as JSON/JS objects.
     * Each model instance must have a valid existing `_id` property.
     *
     * @example
     * Update an existing instance
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function updateBuzz (client: Client, threadID: ThreadID) {
     *   const query = new Where('name').eq('Buzz')
     *   const result = await client.find<Astronaut>(threadID, 'astronauts', query)
     *
     *   if (result.length < 1) return
     *
     *   const buzz = result[0]
     *   buzz.missions += 1
     *
     *   return await client.save(threadID, 'astronauts', [buzz])
     * }
     * ```
     */
    save(threadID: ThreadID, collectionName: string, values: any[]): Promise<void>;
    /**
     * Deletes an existing model instance from the given store.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param IDs An array of instance ids to delete.
     *
     * @example
     * Delete any instances that return from a query
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function deleteBuzz (client: Client, threadID: ThreadID) {
     *   const query = new Where('name').eq('Buzz')
     *   const result = await client.find<Astronaut>(threadID, 'astronauts', query)
     *
     *   if (result.length < 1) return
     *
     *   const ids = await result.map((instance) => instance._id)
     *   await client.delete(threadID, 'astronauts', ids)
     * }
     * ```
     */
    /**
     * Deletes an existing model instance from the given store.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param IDs An array of instance ids to delete.
     *
     * @example
     * Delete any instances that return from a query
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function deleteBuzz (client: Client, threadID: ThreadID) {
     *   const query = new Where('name').eq('Buzz')
     *   const result = await client.find<Astronaut>(threadID, 'astronauts', query)
     *
     *   if (result.length < 1) return
     *
     *   const ids = await result.map((instance) => instance._id)
     *   await client.delete(threadID, 'astronauts', ids)
     * }
     * ```
     */
    delete(threadID: ThreadID, collectionName: string, IDs: string[]): Promise<void>;
    /**
     * Check if a given instance exists in the collection.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param IDs An array of instance ids to check for.
     *
     * @example
     * Check if an instance exists
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * async function instanceExists (client: Client, threadID: ThreadID, id: string) {
     *   return await client.has(threadID, 'astronauts', [id])
     * }
     * ```
     */
    /**
     * Check if a given instance exists in the collection.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param IDs An array of instance ids to check for.
     *
     * @example
     * Check if an instance exists
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * async function instanceExists (client: Client, threadID: ThreadID, id: string) {
     *   return await client.has(threadID, 'astronauts', [id])
     * }
     * ```
     */
    has(threadID: ThreadID, collectionName: string, IDs: string[]): Promise<boolean>;
    /**
     * Queries a collection for entities matching the given query parameters.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param query The object that describes the query. User Query class or primitive QueryJSON type.
     *
     * @example
     * Query with return type
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function getAstronautByName (client: Client, threadID: ThreadID, name: string) {
     *   const query = new Where('name').eq(name)
     *   const astronaut = await client.find<Astronaut>(threadID, 'astronauts', query)
     *   return astronaut
     * }
     * ```
     */
    /**
     * Queries a collection for entities matching the given query parameters.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param query The object that describes the query. User Query class or primitive QueryJSON type.
     *
     * @example
     * Query with return type
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function getAstronautByName (client: Client, threadID: ThreadID, name: string) {
     *   const query = new Where('name').eq(name)
     *   const astronaut = await client.find<Astronaut>(threadID, 'astronauts', query)
     *   return astronaut
     * }
     * ```
     */
    find<T = unknown>(threadID: ThreadID, collectionName: string, query: QueryJSON): Promise<T[]>;
    /**
     * Queries the collection by a known instance ID.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param ID The id of the instance to search for.
     *
     * @example
     * Find and cast a known model by instance ID.
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function getAstronaut (client: Client, threadID: ThreadID, id: string) {
     *   const astronaut = await client.findByID<Astronaut>(threadID, 'astronauts', id)
     *   return astronaut
     * }
     * ```
     *
     * @example
     * Simple find and return any instance
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function getInstance (client: Client, threadID: ThreadID, id: string) {
     *   return await client.findByID(threadID, 'astronauts', id)
     * }
     * ```
     */
    /**
     * Queries the collection by a known instance ID.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param ID The id of the instance to search for.
     *
     * @example
     * Find and cast a known model by instance ID.
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function getAstronaut (client: Client, threadID: ThreadID, id: string) {
     *   const astronaut = await client.findByID<Astronaut>(threadID, 'astronauts', id)
     *   return astronaut
     * }
     * ```
     *
     * @example
     * Simple find and return any instance
     * ```typescript
     * import {Client, ThreadID} from '@textile/threads'
     *
     * async function getInstance (client: Client, threadID: ThreadID, id: string) {
     *   return await client.findByID(threadID, 'astronauts', id)
     * }
     * ```
     */
    findByID<T = unknown>(threadID: ThreadID, collectionName: string, ID: string): Promise<T>;
    /**
     * Verify checks existing instance changes.
     * Each model instance must have a valid existing `_id` property.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param values An array of model instances as JSON/JS objects.
     *
     * @example
     * Update an existing instance
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function verifyBuzz (client: Client, threadID: ThreadID) {
     *   const query = new Where('name').eq('Buzz')
     *   const result = await client.find<Astronaut>(threadID, 'astronauts', query)
     *
     *   if (result.length < 1) return
     *
     *   const buzz = result[0]
     *   buzz.missions += 1
     *
     *   // Is this going to be a valid update?
     *   return await client.verify(threadID, 'astronauts', [buzz])
     * }
     * ```
     */
    /**
     * Verify checks existing instance changes.
     * Each model instance must have a valid existing `_id` property.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     * @param values An array of model instances as JSON/JS objects.
     *
     * @example
     * Update an existing instance
     * ```typescript
     * import {Client, ThreadID, Where} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     *
     * async function verifyBuzz (client: Client, threadID: ThreadID) {
     *   const query = new Where('name').eq('Buzz')
     *   const result = await client.find<Astronaut>(threadID, 'astronauts', query)
     *
     *   if (result.length < 1) return
     *
     *   const buzz = result[0]
     *   buzz.missions += 1
     *
     *   // Is this going to be a valid update?
     *   return await client.verify(threadID, 'astronauts', [buzz])
     * }
     * ```
     */
    verify(threadID: ThreadID, collectionName: string, values: any[]): Promise<void>;
    /**
     * readTransaction creates a new read-only transaction object. See ReadTransaction for details.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     */
    /**
     * readTransaction creates a new read-only transaction object. See ReadTransaction for details.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     */
    readTransaction(threadID: ThreadID, collectionName: string): ReadTransaction;
    /**
     * writeTransaction creates a new writeable transaction object. See WriteTransaction for details.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     */
    /**
     * writeTransaction creates a new writeable transaction object. See WriteTransaction for details.
     * @param threadID the ID of the database
     * @param collectionName The human-readable name of the model to use.
     */
    writeTransaction(threadID: ThreadID, collectionName: string): WriteTransaction;
    /**
     * listen opens a long-lived connection with a remote node, running the given callback on each new update to the given instance.
     * The return value is a `close` function, which cleanly closes the connection with the remote node.
     * @param threadID the ID of the database
     * @param filters contains an array of Filters
     * @param callback The callback to call on each update to the given instance.
     *
     * @example
     * ```typescript
     * import {Client, ThreadID, Update} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     * function setupListener (client: Client, threadID: ThreadID) {
     *   const callback = (update?: Update<Astronaut>) => {
     *     // Not safe if more than the Astronauts collection existed in the same DB
     *     if (!update || !update.instance) return
     *     console.log('New update:', update.instance.name, update.instance.missions)
     *   }
     *   const closer = client.listen(threadID, [], callback)
     *   return closer
     * }
     * ```
     *
     * @example
     * Listen to only CREATE events on a specific Collection.
     * ```typescript
     * import {Client, ThreadID, Update} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     * function setupListener (client: Client, threadID: ThreadID) {
     *   const callback = (update?: Update<Astronaut>) => {
     *     if (!update || !update.instance) return
     *     console.log('New update:', update.instance.name, update.instance.missions)
     *   }
     *   const filters = [
     *     {collectionName: 'Astronauts'},
     *     {actionTypes: ['CREATE']}
     *   ]
     *   const closer = client.listen(threadID, filters, callback)
     *   return closer
     * }
     * ```
     */
    /**
     * listen opens a long-lived connection with a remote node, running the given callback on each new update to the given instance.
     * The return value is a `close` function, which cleanly closes the connection with the remote node.
     * @param threadID the ID of the database
     * @param filters contains an array of Filters
     * @param callback The callback to call on each update to the given instance.
     *
     * @example
     * ```typescript
     * import {Client, ThreadID, Update} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     * function setupListener (client: Client, threadID: ThreadID) {
     *   const callback = (update?: Update<Astronaut>) => {
     *     // Not safe if more than the Astronauts collection existed in the same DB
     *     if (!update || !update.instance) return
     *     console.log('New update:', update.instance.name, update.instance.missions)
     *   }
     *   const closer = client.listen(threadID, [], callback)
     *   return closer
     * }
     * ```
     *
     * @example
     * Listen to only CREATE events on a specific Collection.
     * ```typescript
     * import {Client, ThreadID, Update} from '@textile/threads'
     *
     * interface Astronaut {
     *   name: string
     *   missions: number
     *   _id: string
     * }
     * function setupListener (client: Client, threadID: ThreadID) {
     *   const callback = (update?: Update<Astronaut>) => {
     *     if (!update || !update.instance) return
     *     console.log('New update:', update.instance.name, update.instance.missions)
     *   }
     *   const filters = [
     *     {collectionName: 'Astronauts'},
     *     {actionTypes: ['CREATE']}
     *   ]
     *   const closer = client.listen(threadID, filters, callback)
     *   return closer
     * }
     * ```
     */
    listen<T = any>(threadID: ThreadID, filters: Filter[], callback: (reply?: Update<T>, err?: Error) => void): grpc.Request;
    private unary;
}
export { Client as default, Client, Filter, Query, Where, WriteTransaction, ReadTransaction, QueryJSON, ValueJSON, ComparisonJSON, CriterionJSON, SortJSON, JSONSchema3or4, Event, Patch, PatchType, getFunctionBody, CollectionConfig, maybeLocalAddr, Action, Update, DBInfo };
