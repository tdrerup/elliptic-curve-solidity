import { Message, SignedMessage, Signature, KeyInfo } from "../Types";
import { MetamaskSigner } from "../../signers/MetamaskSigner";
import { BaseWalletProvider } from "./BaseWalletProvider";
import { FilecoinSnapApi } from "@nodefactory/filsnap-types";
import { LotusClient } from "../..";
import { WalletProviderInterface } from "../ProviderInterfaces";
export declare class MetamaskWalletProvider extends BaseWalletProvider implements WalletProviderInterface {
    private signer;
    constructor(client: LotusClient, filecoinApi: FilecoinSnapApi);
    newAddress(): Promise<string>;
    deleteAddress(address: string): Promise<any>;
    hasAddress(address: string): Promise<any>;
    exportPrivateKey(address: string): Promise<KeyInfo>;
    getAddresses(): Promise<string[]>;
    getDefaultAddress(): Promise<string>;
    setDefaultAddress(address: string): Promise<undefined>;
    sendMessage(msg: Message): Promise<SignedMessage>;
    signMessage(msg: Message): Promise<SignedMessage>;
    sign(data: string | ArrayBuffer): Promise<Signature>;
    verify(address: string, data: string | ArrayBuffer, sign: Signature): Promise<boolean>;
    getSigner(): MetamaskSigner;
}
//# sourceMappingURL=MetamaskWalletProvider.d.ts.map