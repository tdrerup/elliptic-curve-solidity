import Multiaddr from 'multiaddr';
declare function bytesFromAddr(addr: string | Uint8Array | Multiaddr): Uint8Array;
declare function stringFromBytes(bytes: Uint8Array): string;
declare function bytesToTuples(bytes: Uint8Array): [number, string | number][];
declare function bytesToOptions(bytes: Uint8Array): {
    family: string;
    host: string;
    transport: string;
    port: number;
};
export { bytesFromAddr, stringFromBytes, bytesToTuples, bytesToOptions };
