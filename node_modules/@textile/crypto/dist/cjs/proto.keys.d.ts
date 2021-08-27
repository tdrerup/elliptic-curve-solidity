export declare const enum KeyType {
    RSA = "RSA",
    Ed25519 = "Ed25519",
    Secp256k1 = "Secp256k1"
}
export declare const encodeKeyType: {
    [key: string]: number;
};
export declare const decodeKeyType: {
    [key: number]: KeyType;
};
export interface PublicKey {
    Type: KeyType;
    Data: Uint8Array;
}
export declare function encodePublicKey(message: PublicKey): Uint8Array;
export declare function decodePublicKey(binary: Uint8Array): PublicKey;
export interface PrivateKey {
    Type: KeyType;
    Data: Uint8Array;
}
export declare function encodePrivateKey(message: PrivateKey): Uint8Array;
export declare function decodePrivateKey(binary: Uint8Array): PrivateKey;
export interface Long {
    low: number;
    high: number;
    unsigned: boolean;
}
