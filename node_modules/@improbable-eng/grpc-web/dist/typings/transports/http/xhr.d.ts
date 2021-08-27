import { Metadata } from "../../metadata";
import { Transport, TransportFactory, TransportOptions } from "../Transport";
export interface XhrTransportInit {
    withCredentials?: boolean;
}
export declare function XhrTransport(init: XhrTransportInit): TransportFactory;
export declare class XHR implements Transport {
    options: TransportOptions;
    init: XhrTransportInit;
    xhr: XMLHttpRequest;
    metadata: Metadata;
    index: 0;
    constructor(transportOptions: TransportOptions, init: XhrTransportInit);
    onProgressEvent(): void;
    onLoadEvent(): void;
    onStateChange(): void;
    sendMessage(msgBytes: Uint8Array): void;
    finishSend(): void;
    start(metadata: Metadata): void;
    protected configureXhr(): void;
    cancel(): void;
}
export declare class MozChunkedArrayBufferXHR extends XHR {
    protected configureXhr(): void;
    onProgressEvent(): void;
}
export declare function stringToArrayBuffer(str: string): Uint8Array;
