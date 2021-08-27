/// <reference types="node" />
export declare class Keystore {
    salt: string;
    hdPathString: string;
    encSeed: {
        encStr: any;
        nonce: any;
    } | undefined;
    version: number;
    hdIndex: number;
    encPrivKeys: any;
    addresses: string[];
    private defaultAddressIndex;
    serialize(): string;
    deserialize(keystore: string): void;
    init(mnemonic: string, pwDerivedKey: Uint8Array, hdPathString: string, salt: string): void;
    createVault(opts: any): Promise<Error | null>;
    private generateSalt;
    private isSeedValid;
    private _encryptString;
    private _decryptString;
    private encodeHex;
    private decodeHex;
    private _encryptKey;
    private _decryptKey;
    private deriveKeyFromPasswordAndSalt;
    private generateNewAddress;
    newAddress(n: number, password: string): Promise<void>;
    deleteAddress(address: string, password: string): Promise<void>;
    private _generatePrivKeys;
    getPrivateKey(address: string, password: string): Promise<string>;
    getDefaultAddress(): Promise<string>;
    setDefaultAddress(address: string): Promise<void>;
    getAddresses(): Promise<string[]>;
    hasAddress(address: string): Promise<boolean>;
    generateRandomSeed(extraEntropy?: any): string;
    _concatAndSha256: (entropyBuf0: any, entropyBuf1: any) => Buffer;
}
//# sourceMappingURL=keystore.d.ts.map