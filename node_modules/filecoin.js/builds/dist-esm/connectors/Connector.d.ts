export interface RequestArguments {
    readonly method: string;
    readonly params?: readonly unknown[];
}
export declare class JsonRpcErrorResponse {
    code: number;
    message: string;
    data?: any;
}
export declare class JsonRpcResponse {
    id: number;
    jsonrpc: string;
    result?: any;
    error?: JsonRpcErrorResponse;
    method?: string;
    params?: any;
}
export declare class JsonRpcError extends Error {
    code: number;
    message: string;
    data: any;
    constructor(e: JsonRpcErrorResponse);
}
export declare class ResponseError extends Error {
    code: number;
    message: string;
    constructor(code: number, message: string);
}
export declare class ConnectionError extends Error {
    constructor(e: Error);
}
export interface Connector {
    url: string;
    token?: string | undefined;
    disconnect(): Promise<any>;
    connect(): Promise<any>;
    request(req: RequestArguments): Promise<any>;
    on(event: 'connected' | 'disconnected', listener: (...args: any[]) => void): this;
}
//# sourceMappingURL=Connector.d.ts.map