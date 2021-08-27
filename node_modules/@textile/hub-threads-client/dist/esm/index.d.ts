import { Context } from "@textile/context";
import { Client } from "@textile/threads-client";
interface GetThreadResponse {
    id: string;
    name?: string;
}
declare module "@textile/threads-client" {
    interface Client {
        getThread(name: string, ctx?: Context): Promise<GetThreadResponse>;
        listThreads(ctx?: Context): Promise<Array<GetThreadResponse>>;
    }
}
/**
 * A web-gRPC wrapper client for communicating with the web-gRPC enabled Threads ove the Hub APIs.
 * @packageDocumentation
 */
export { Action, CollectionConfig, CriterionJSON, DBInfo, Filter, Query, QueryJSON, ReadTransaction, SortJSON, Update, ValueJSON, Where, WriteTransaction } from '@textile/threads-client';
export { Client, GetThreadResponse };
