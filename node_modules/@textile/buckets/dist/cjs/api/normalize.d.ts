/// <reference types="node" />
export interface File {
    path: string;
    content?: AsyncIterable<Buffer | Uint8Array | ArrayBuffer>;
    [key: string]: any;
}
/**
 * Transform types
 *
 * @remarks
 * This function comes from {@link https://github.com/ipfs/js-ipfs-utils/blob/master/src/files/normalise-input.js}
 * @example
 * Supported types
 * ```yaml
 * // INPUT TYPES
 * Bytes (Buffer|ArrayBuffer|TypedArray) [single file]
 * Bloby (Blob|File) [single file]
 * String [single file]
 * { path, content: Bytes } [single file]
 * { path, content: Bloby } [single file]
 * { path, content: String } [single file]
 * { path, content: Iterable<Number> } [single file]
 * { path, content: Iterable<Bytes> } [single file]
 * { path, content: AsyncIterable<Bytes> } [single file]
 * Iterable<Number> [single file]
 * Iterable<Bytes> [single file]
 * Iterable<Bloby> [multiple files]
 * Iterable<String> [multiple files]
 * Iterable<{ path, content: Bytes }> [multiple files]
 * Iterable<{ path, content: Bloby }> [multiple files]
 * Iterable<{ path, content: String }> [multiple files]
 * Iterable<{ path, content: Iterable<Number> }> [multiple files]
 * Iterable<{ path, content: Iterable<Bytes> }> [multiple files]
 * Iterable<{ path, content: AsyncIterable<Bytes> }> [multiple files]
 * AsyncIterable<Bytes> [single file]
 * AsyncIterable<Bloby> [multiple files]
 * AsyncIterable<String> [multiple files]
 * AsyncIterable<{ path, content: Bytes }> [multiple files]
 * AsyncIterable<{ path, content: Bloby }> [multiple files]
 * AsyncIterable<{ path, content: String }> [multiple files]
 * AsyncIterable<{ path, content: Iterable<Number> }> [multiple files]
 * AsyncIterable<{ path, content: Iterable<Bytes> }> [multiple files]
 * AsyncIterable<{ path, content: AsyncIterable<Bytes> }> [multiple files]
 *
 * // OUTPUT
 * AsyncIterable<{ path, content: AsyncIterable<Buffer> }>
 * ```
 *
 * @public
 *
 * @param {Object} input
 * @return AsyncInterable<{ path, content: AsyncIterable<Buffer> }>
 */
export declare function normaliseInput(input: any): AsyncGenerator<File, any, unknown>;
