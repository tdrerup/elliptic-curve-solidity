import Multiaddr from 'multiaddr';
export declare function bytesFromAddr(addr: string | Uint8Array | Multiaddr): Uint8Array;
export declare function stringFromBytes(bytes: Uint8Array): string;
export declare function bytesToTuples(bytes: Uint8Array): [number, string | number][];
export declare function bytesToOptions(bytes: Uint8Array): {
    family: string;
    host: string;
    transport: string;
    port: number;
};
