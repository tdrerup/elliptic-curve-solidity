import { Message, SignedMessage, Signature, KeyInfo, Cid, ChainEpoch } from "../Types";
import { BaseWalletProvider } from "./BaseWalletProvider";
import { MnemonicSigner } from "../../signers/MnemonicSigner";
import { StringGetter } from "../Types";
import { LotusClient } from "../..";
import { MultisigProviderInterface, WalletProviderInterface } from "../ProviderInterfaces";
export declare class MnemonicWalletProvider extends BaseWalletProvider implements WalletProviderInterface, MultisigProviderInterface {
    private signer;
    constructor(client: LotusClient, mnemonic: string | StringGetter, path?: string);
    newAddress(): Promise<string>;
    deleteAddress(address: string): Promise<any>;
    hasAddress(address: string): Promise<boolean>;
    exportPrivateKey(address: string): Promise<KeyInfo>;
    getAddresses(): Promise<string[]>;
    getDefaultAddress(): Promise<string>;
    setDefaultAddress(address: string): Promise<void>;
    sendMessage(msg: Message): Promise<SignedMessage>;
    signMessage(msg: Message): Promise<SignedMessage>;
    sign(data: string | ArrayBuffer): Promise<Signature>;
    verify(address: string, data: string | ArrayBuffer, sign: Signature): Promise<boolean>;
    getSigner(): MnemonicSigner;
    /**
     * creates a multisig wallet
     * @param requiredNumberOfSenders
     * @param approvingAddresses
     * @param startEpoch
     * @param unlockDuration
     * @param initialBalance
     * @param senderAddressOfCreateMsg
     */
    msigCreate(requiredNumberOfSenders: number, approvingAddresses: string[], startEpoch: ChainEpoch, unlockDuration: ChainEpoch, initialBalance: string, senderAddressOfCreateMsg: string): Promise<Cid>;
    /**
     * proposes a multisig message
     * @param address
     * @param recipientAddres
     * @param value
     * @param senderAddressOfProposeMsg
     */
    msigProposeTransfer(address: string, recipientAddres: string, value: string, senderAddressOfProposeMsg: string): Promise<Cid>;
    /**
     * approves a previously-proposed multisig message by transaction ID
     * @param address
     * @param proposedTransactionId
     * @param signerAddress
     */
    msigApproveTransfer(address: string, proposedTransactionId: number, signerAddress: string): Promise<Cid>;
    /**
     * approves a previously-proposed multisig message
     * @param address
     * @param proposedMessageId
     * @param proposerAddress
     * @param recipientAddres
     * @param value
     * @param senderAddressOfApproveMsg
     */
    msigApproveTransferTxHash(address: string, proposedMessageId: number, proposerAddress: string, recipientAddres: string, value: string, senderAddressOfApproveMsg: string): Promise<Cid>;
    /**
     * cancels a previously-proposed multisig message
     * @param address
     * @param senderAddressOfCancelMsg
     * @param proposedMessageId
     * @param recipientAddres
     * @param value
     */
    msigCancelTransfer(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, recipientAddres: string, value: string): Promise<Cid>;
    /**
     * proposes adding a signer in the multisig
     * @param address
     * @param senderAddressOfProposeMsg
     * @param newSignerAddress
     * @param increaseNumberOfRequiredSigners
     */
    msigProposeAddSigner(address: string, senderAddressOfProposeMsg: string, newSignerAddress: string, increaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    /**
     * approves a previously proposed AddSigner message
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param proposerAddress
     * @param newSignerAddress
     * @param increaseNumberOfRequiredSigners
     */
    msigApproveAddSigner(address: string, senderAddressOfApproveMsg: string, proposedMessageId: number, proposerAddress: string, newSignerAddress: string, increaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    /**
     * cancels a previously proposed AddSigner message
     * @param address
     * @param senderAddressOfCancelMsg
     * @param proposedMessageId
     * @param newSignerAddress
     * @param increaseNumberOfRequiredSigners
     */
    msigCancelAddSigner(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, newSignerAddress: string, increaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    /**
     * proposes swapping 2 signers in the multisig
     * @param address
     * @param senderAddressOfProposeMsg
     * @param oldSignerAddress
     * @param newSignerAddress
     */
    msigProposeSwapSigner(address: string, senderAddressOfProposeMsg: string, oldSignerAddress: string, newSignerAddress: string): Promise<Cid>;
    /**
     * approves a previously proposed SwapSigner
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param proposerAddress
     * @param oldSignerAddress
     * @param newSignerAddress
     */
    msigApproveSwapSigner(address: string, senderAddressOfApproveMsg: string, proposedMessageId: number, proposerAddress: string, oldSignerAddress: string, newSignerAddress: string): Promise<Cid>;
    /**
     * cancels a previously proposed SwapSigner message
     * @param address
     * @param senderAddressOfCancelMsg
     * @param proposedMessageId
     * @param oldSignerAddress
     * @param newSignerAddress
     */
    msigCancelSwapSigner(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, oldSignerAddress: string, newSignerAddress: string): Promise<Cid>;
    /**
     * proposes removing a signer from the multisig
     * @param address
     * @param senderAddressOfProposeMsg
     * @param addressToRemove
     * @param decreaseNumberOfRequiredSigners
     */
    msigProposeRemoveSigner(address: string, senderAddressOfProposeMsg: string, addressToRemove: string, decreaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    /**
     * approves a previously proposed RemoveSigner message
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param proposerAddress
     * @param addressToRemove
     * @param decreaseNumberOfRequiredSigners
     */
    msigApproveRemoveSigner(address: string, senderAddressOfApproveMsg: string, proposedMessageId: number, proposerAddress: string, addressToRemove: string, decreaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    /**
     * cancels a previously proposed RemoveSigner message
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param addressToRemove
     * @param decreaseNumberOfRequiredSigners
     */
    msigCancelRemoveSigner(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, addressToRemove: string, decreaseNumberOfRequiredSigners: boolean): Promise<Cid>;
}
//# sourceMappingURL=MnemonicWalletProvider.d.ts.map