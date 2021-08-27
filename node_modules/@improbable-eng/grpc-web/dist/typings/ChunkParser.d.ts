import { Metadata } from "./metadata";
export declare function decodeASCII(input: Uint8Array): string;
export declare function encodeASCII(input: string): Uint8Array;
export declare enum ChunkType {
    MESSAGE = 1,
    TRAILERS = 2
}
export declare type Chunk = {
    chunkType: ChunkType;
    trailers?: Metadata;
    data?: Uint8Array;
};
export declare class ChunkParser {
    buffer: Uint8Array | null;
    position: number;
    parse(bytes: Uint8Array, flush?: boolean): Chunk[];
}
