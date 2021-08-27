import { grpc } from '@improbable-eng/grpc-web';
import { KeyInfo, UserAuth } from '@textile/security';
export declare const errors: {
    /**
     * expirationError is an error your app will receive anytime your credentials have expired.
     * @public
     */
    expirationError: Error;
};
/**
 * The set of host strings used by any gPRC clients.
 */
export declare type HostString = 'https://webapi.hub.textile.io' | 'http://127.0.0.1:3007' | string;
export declare const defaultHost: HostString;
/**
 * Interface describing the set of default context keys.
 */
export interface ContextKeys {
    /**
     * Thread name. Specifies a mapping between human-readable name and a ThreadID.
     */
    ['x-textile-thread-name']?: string;
    /**
     * ThreadID as a string. Should be generated with `ThreadID.toString()` method.
     */
    ['x-textile-thread']?: string;
    /**
     * Session key. Used for various session contexts.
     */
    ['x-textile-session']?: string;
    /**
     * Org slug/name. Used for various org session operations.
     */
    ['x-textile-org']?: string;
    /**
     * API key. Used for user group/account authentication.
     */
    ['x-textile-api-key']?: string;
    /**
     * Authorization token for interacting with remote APIs.
     */
    authorization?: string;
    /**
     * API signature used to authenticate with remote APIs.
     */
    ['x-textile-api-sig']?: string;
    /**
     * Raw message (date as ISO string) used to generate API signature.
     */
    ['x-textile-api-sig-msg']?: string;
    /**
     * The service host address/url. Defaults to https://webapi.hub.textile.io.
     */
    host?: HostString;
    /**
     * ContextKeys may also contain any number of additional custom keys.
     */
    [key: string]: any;
}
/**
 * Interface describing the required methods for a full ContextInterface.
 * Users of ContextInterface may only require a subset of these methods, in which case, they should
 * specify their own interface, ensuring that ContextInterface is able to satisfy it.
 */
export interface ContextInterface {
    /**
     * The service host address/url. Defaults to https://webapi.hub.textile.io.
     */
    host: HostString;
    /**
     * Set the session key. Used for various session contexts.
     */
    withSession(value?: string): ContextInterface;
    /**
     * Set the thread ID as a string. Should be generated with `ThreadID.toString()` method.
     */
    withThread(value?: string): ContextInterface;
    /**
     * Set the thread name. Specifies a mapping between human-readable name and a ThreadID.
     */
    withThreadName(value?: string): ContextInterface;
    /**
     * Set the org slug/name. Used for various org session operations.
     */
    withOrg(value?: string): ContextInterface;
    /**
     * Set the authorization token for interacting with remote APIs.
     */
    withToken(value?: string): ContextInterface;
    /**
     * Set the API key. Used for user group/account authentication.
     */
    withAPIKey(value?: string): ContextInterface;
    /**
     * Set the API signature used to authenticate with remote APIs.
     */
    withAPISig(value?: {
        sig: string;
        msg: string;
    }): ContextInterface;
    /**
     * Compute the API signature and message.
     * @param key User group/account key information.
     * @param date Optional future Date for computing the authorization signature.
     */
    withKeyInfo(key?: KeyInfo, date?: Date): Promise<ContextInterface>;
    /**
     * Merge another context with this one.
     */
    withContext(value?: ContextInterface): ContextInterface;
    /**
     * Export this context to a JS Object useful for exporting to JSON.
     */
    toJSON(): any;
    /**
     * Export this context as gRPC Metadata.
     */
    toMetadata(ctx?: ContextInterface): Promise<grpc.Metadata>;
    /**
     * Set arbitrary key/value context pairs.
     * @param key The key to set.
     * @param value The value to specify under `key`.
     */
    set(key: keyof ContextKeys, value?: any): ContextInterface;
    /**
     * Get arbitrary key/value context pairs.
     * @param key The key to get.
     */
    get(key: keyof ContextKeys): any;
}
/**
 * Context provides context management for gRPC credentials and config settings.
 * It is the default implementation for the ContextInterface interface.
 */
export declare class Context implements ContextInterface {
    _context: Partial<Record<keyof ContextKeys, any>>;
    authCallback?: () => Promise<UserAuth>;
    /**
     * Construct a new Context object.
     * @param host The remote gRPC host. This input exists to comply with the Config interface.
     */
    constructor(host?: HostString);
    static fromUserAuth(auth: UserAuth, host?: HostString): Context;
    static fromUserAuthCallback(authCallback: () => Promise<UserAuth>, host?: HostString): Context;
    get host(): string;
    set(key: keyof ContextKeys, value?: any): this;
    get(key: keyof ContextKeys): any;
    withSession(value?: string): this;
    withThread(value?: string): this;
    withThreadName(value?: string): this;
    withOrg(value?: string): this;
    withToken(value?: string): this;
    withAPIKey(value?: string): this;
    withAPISig(value?: {
        sig: string;
        msg: string;
    }): this;
    withKeyInfo(key?: KeyInfo, date?: Date): Promise<this>;
    withContext(value?: ContextInterface): this;
    /**
     * Returns true if this Context contains an api sig msg, and that msg has expired, or if
     * it does _not_ have an api sig msg, but it _does_ have an auth callback.
     */
    get isExpired(): boolean;
    /**
     * Refresh user auth with provided callback.
     * If callback is not specified, attempts to use existing callback specified at initialization.
     */
    refreshUserAuth(authCallback?: () => Promise<UserAuth>): Promise<this>;
    /**
     * Convert Context to plain JSON object.
     * @throws If this Context has expired.
     * @see toMetadata for an alternative for gRPC clients that supports auto-renewal.
     */
    toJSON(): Record<string | number, any>;
    /**
     * Convert Context to grpc Metadata object.
     * Will automatically call the auth callback if available.
     * @param ctx Additional context object that will be merged with this prior to conversion.
     * @see toJSON for an alternative that returns a plain object, and throws when expired.
     */
    toMetadata(ctx?: Context): Promise<grpc.Metadata>;
    /**
     * Import various ContextInterface API properties from JSON.
     * @param json The JSON object.
     * @param host Optional host string.
     */
    static fromJSON(json: ContextKeys, host?: HostString): Context;
}
