/**
 * @packageDocumentation
 * @module @textile/threads-client/models
 */
import { grpc } from '@improbable-eng/grpc-web';
import { ContextInterface } from '@textile/context';
import { WriteTransactionReply, WriteTransactionRequest } from '@textile/threads-client-grpc/threads_pb';
import { ThreadID } from '@textile/threads-id';
import { QueryJSON } from './query';
import { Transaction } from './Transaction';
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
export declare class WriteTransaction extends Transaction<WriteTransactionRequest, WriteTransactionReply> {
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
