/// <reference types="node" />
import { EventEmitter } from 'events';
import { Connector, RequestArguments } from './Connector';
export declare type SubscriptionId = string;
export declare type WebSocketConnectionOptions = {
    url: string;
    token?: string;
};
export declare class WsJsonRpcConnector extends EventEmitter implements Connector {
    url: string;
    token?: string;
    private websocket;
    private requests;
    private websocketReady;
    constructor(options: WebSocketConnectionOptions);
    connect(): Promise<any>;
    request(args: RequestArguments): Promise<any>;
    closeSubscription(subscriptionId: string): Promise<void>;
    disconnect(): Promise<any>;
    private fullUrl;
    on(event: 'connected' | 'disconnected' | 'error' | SubscriptionId, listener: (...args: any[]) => void): this;
    private onSocketClose;
    private onSocketError;
    private onSocketOpen;
    private onSocketMessage;
}
//# sourceMappingURL=WsJsonRpcConnector.d.ts.map