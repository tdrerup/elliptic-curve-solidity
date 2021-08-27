import { Message, SignedMessage } from '../providers/Types';
import { Signer } from './Signer';
import { StringGetter } from '../providers/Types';
export declare class MnemonicSigner implements Signer {
    private mnemonic;
    private password;
    private privKeys;
    addresses: string[];
    private defaultAddressIndex;
    private hdIndex;
    private path;
    constructor(mnemonic: string | StringGetter, password: string | StringGetter, path?: string);
    initAddresses(): Promise<void>;
    getAddresses(): Promise<string[]>;
    newAddress(n: number): Promise<void>;
    deleteAddress(address: string): Promise<void>;
    getPrivateKey(address: string): Promise<any>;
    getDefaultAddress(): Promise<string>;
    setDefaultAddress(address: string): Promise<void>;
    hasAddress(address: string): Promise<boolean>;
    sign(message: Message): Promise<SignedMessage>;
    private getPassword;
    private getMnemonic;
    private messageToSigner;
}
//# sourceMappingURL=MnemonicSigner.d.ts.map