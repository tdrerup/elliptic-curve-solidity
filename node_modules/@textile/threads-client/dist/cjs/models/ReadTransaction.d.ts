/**
 * @packageDocumentation
 * @module @textile/threads-client/models
 */
import { grpc } from '@improbable-eng/grpc-web';
import { ContextInterface } from '@textile/context';
import { ReadTransactionReply, ReadTransactionRequest } from '@textile/threads-client-grpc/threads_pb';
import { ThreadID } from '@textile/threads-id';
import { QueryJSON } from './query';
import { Transaction } from './Transaction';
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
export declare class ReadTransaction extends Transaction<ReadTransactionRequest, ReadTransactionReply> {
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
