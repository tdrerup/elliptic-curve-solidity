import { Connector } from '../../connectors/Connector';
import { Address, KeyInfo, Message, NewAddressType, Signature, SignedMessage } from '../Types';
export declare class JsonRpcWalletMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * creates a new address in the wallet with the given sigType.
     * @param type
     */
    new(type?: NewAddressType): Promise<string>;
    /**
     * get wallet list
     */
    list(): Promise<string[]>;
    /**
     * get balance for address
     * @param address
     */
    balance(address: string): Promise<any>;
    /**
     * delete address from lotus
     * @param address
     */
    delete(address: string): Promise<any>;
    /**
    * check if address is in keystore
    * @param address
    */
    has(address: string): Promise<any>;
    /**
     * set default address
     * @param address
     */
    setDefault(address: string): Promise<undefined>;
    /**
     * walletExport returns the private key of an address in the wallet.
     * @param address
     */
    export(address: string): Promise<KeyInfo>;
    /**
     * walletImport returns the private key of an address in the wallet.
     * @param keyInfo
     */
    import(keyInfo: KeyInfo): Promise<string>;
    /**
     * get default address
     */
    getDefaultAddress(): Promise<string>;
    /**
     * sign message
     * @param msg
     */
    signMessage(msg: Message): Promise<SignedMessage>;
    /**
     * sign raw message
     * @param data
     */
    sign(data: string | ArrayBuffer): Promise<Signature>;
    /**
     * verify message signature
     * @param data
     * @param sign
     */
    verify(address: string, data: string | ArrayBuffer, sign: Signature): Promise<boolean>;
    /**
     * validates whether a given string can be decoded as a well-formed address
     * @param address
     */
    validateAddress(address: string): Promise<Address>;
}
//# sourceMappingURL=wallet.d.ts.map