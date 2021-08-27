/// <reference types="node" />
import { EventEmitter } from 'events';
import { Connector, RequestArguments } from './Connector';
export declare type JsonRpcConnectionOptions = {
    url: string;
    token?: string;
};
export declare class HttpJsonRpcConnector extends EventEmitter implements Connector {
    protected options: string | JsonRpcConnectionOptions;
    protected reqId: number;
    url: string;
    token?: string | undefined;
    constructor(options: string | JsonRpcConnectionOptions);
    connect(): Promise<any>;
    disconnect(): Promise<any>;
    request(req: RequestArguments): Promise<unknown>;
    on(event: 'connected' | 'disconnected', listener: (...args: any[]) => void): this;
    private _headers;
}
//# sourceMappingURL=HttpJsonRpcConnector.d.ts.map