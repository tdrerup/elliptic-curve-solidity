import { grpc } from '@improbable-eng/grpc-web';
import { ContextInterface } from '@textile/context';
import { GrpcConnection } from '@textile/grpc-connection';
import { GetThreadResponse } from '@textile/hub-threads-client';
/**
 * Global settings for mailboxes
 */
export declare const MailConfig: {
    ThreadName: string;
    InboxCollectionName: string;
    SentboxCollectionName: string;
};
/**
 * The status query filter of an inbox message.
 */
export declare enum Status {
    ALL = 0,
    READ = 1,
    UNREAD = 2
}
/**
 * Sentbox query options
 */
export interface SentboxListOptions {
    seek?: string;
    limit?: number;
    ascending?: boolean;
}
/**
 * Inbox query options
 */
export interface InboxListOptions {
    seek?: string;
    limit?: number;
    ascending?: boolean;
    status?: Status;
}
/**
 * @deprecated
 */
export declare type GetThreadResponseObj = GetThreadResponse;
export interface Usage {
    description: string;
    units: number;
    total: number;
    free: number;
    grace: number;
    cost: number;
    period?: Period;
}
export interface CustomerUsage {
    usageMap: [string, Usage][];
}
/**
 * GetUsage options
 */
export interface UsageOptions {
    /**
     * Public key of the user. Only available when authenticated using an account key.
     */
    dependentUserKey?: string;
}
export interface Period {
    unixStart: number;
    unixEnd: number;
}
/**
 * The response type from getUsage
 */
export interface CustomerResponse {
    key: string;
    customerId: string;
    parentKey: string;
    email: string;
    accountType: number;
    accountStatus: string;
    subscriptionStatus: string;
    balance: number;
    billable: boolean;
    delinquent: boolean;
    createdAt: number;
    gracePeriodEnd: number;
    invoicePeriod?: Period;
    dailyUsageMap: Array<[string, Usage]>;
    dependents: number;
}
export interface GetUsageResponse {
    customer?: CustomerResponse;
    usage?: CustomerUsage;
}
/**
 * The message format returned from inbox or sentbox
 */
export interface UserMessage {
    id: string;
    to: string;
    from: string;
    body: Uint8Array;
    signature: Uint8Array;
    createdAt: number;
    readAt?: number;
}
/**
 * The mailbox event type. CREATE, SAVE, or DELETE
 */
export declare enum MailboxEventType {
    CREATE = 0,
    SAVE = 1,
    DELETE = 2
}
/**
 * The event type returned from inbox and sentbox subscriptions
 */
export interface MailboxEvent {
    type: MailboxEventType;
    messageID: string;
    message?: UserMessage;
}
/**
 * @internal
 */
export declare function listThreads(api: GrpcConnection, ctx?: ContextInterface): Promise<Array<GetThreadResponse>>;
/**
 * @internal
 */
export declare function getThread(api: GrpcConnection, name: string, ctx?: ContextInterface): Promise<GetThreadResponse>;
/**
 * @internal
 */
export declare function setupMailbox(api: GrpcConnection, ctx?: ContextInterface): Promise<string>;
/**
 * @internal
 */
export declare function getMailboxID(api: GrpcConnection, ctx?: ContextInterface): Promise<string>;
/**
 * @internal
 */
export declare function sendMessage(api: GrpcConnection, from: string, to: string, toBody: Uint8Array, toSignature: Uint8Array, fromBody: Uint8Array, fromSignature: Uint8Array, ctx?: ContextInterface): Promise<UserMessage>;
/**
 * @internal
 */
export declare function listInboxMessages(api: GrpcConnection, opts?: InboxListOptions, ctx?: ContextInterface): Promise<Array<UserMessage>>;
/**
 * @internal
 */
export declare function listSentboxMessages(api: GrpcConnection, opts?: SentboxListOptions, ctx?: ContextInterface): Promise<Array<UserMessage>>;
/**
 * @internal
 */
export declare function readInboxMessage(api: GrpcConnection, id: string, ctx?: ContextInterface): Promise<{
    readAt: number;
}>;
/**
 * @internal
 */
export declare function deleteInboxMessage(api: GrpcConnection, id: string, ctx?: ContextInterface): Promise<void>;
/**
 * @internal
 */
export declare function deleteSentboxMessage(api: GrpcConnection, id: string, ctx?: ContextInterface): Promise<void>;
/**
 * @internal
 */
export declare function watchMailbox(api: GrpcConnection, id: string, box: 'inbox' | 'sentbox', callback: (reply?: MailboxEvent, err?: Error) => void, ctx?: ContextInterface): grpc.Request;
/**
 * @internal
 */
export declare function getUsage(api: GrpcConnection, options?: UsageOptions, ctx?: ContextInterface): Promise<GetUsageResponse>;
