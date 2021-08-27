/// <reference types="node" />
declare type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array;
export declare type Bytes = Buffer | ArrayBuffer | TypedArray;
export declare type Content = string | Bytes | Iterable<Bytes> | AsyncIterable<Bytes>;
export declare const isString: (content: Content) => content is string;
export declare const isBytes: (content: Content) => content is Bytes;
export declare const isIterable: (content: Content) => content is Iterable<Bytes>;
export declare const isAsyncIterable: (content: Content) => content is AsyncIterable<Bytes>;
export {};
