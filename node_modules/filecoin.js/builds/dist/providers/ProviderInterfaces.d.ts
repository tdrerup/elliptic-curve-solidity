import { Message, SignedMessage, Signature, KeyInfo, Cid, VoucherSpec, ChainEpoch } from './Types';
export interface WalletProviderInterface {
    newAddress(): Promise<string>;
    deleteAddress(address: string): Promise<void>;
    getAddresses(): Promise<string[]>;
    hasAddress(address: string): Promise<any>;
    setDefaultAddress(address: string): Promise<void>;
    getDefaultAddress(): Promise<string>;
    exportPrivateKey(address: string): Promise<KeyInfo>;
    sendMessage(msg: Message): Promise<SignedMessage>;
    signMessage(msg: Message): Promise<SignedMessage>;
    sign(data: string): Promise<Signature>;
    verify(address: string, data: string | ArrayBuffer, sign: Signature): Promise<boolean>;
}
export interface PaymentChannelsProviderInterface {
    createPaymentChannel(from: string, to: string, amount: string): Promise<Cid>;
    updatePaymentChannel(pchAddress: string, from: string, signedVoucher: VoucherSpec): Promise<Cid>;
    settlePaymentChannel(pchAddress: string): Promise<Cid>;
    collectPaymentChannel(pchAddress: string): Promise<Cid>;
    getPaymentChannelBalance(pchAddress: string): Promise<string>;
    getPaymentChannelLaneNonce(pchAddress: string, lane: number): Promise<number>;
    createVoucher(address: string, amount: string, lane: number): Promise<VoucherSpec>;
    validateVoucher(signerAddress: string, signedVoucher: VoucherSpec): Promise<boolean>;
}
export interface MultisigProviderInterface {
    msigCreate(requiredNumberOfSenders: number, approvingAddresses: string[], startEpoch: ChainEpoch, unlockDuration: ChainEpoch, initialBalance: string, senderAddressOfCreateMsg: string): Promise<Cid>;
    msigProposeTransfer(address: string, recipientAddres: string, value: string, senderAddressOfProposeMsg: string): Promise<Cid>;
    msigApproveTransfer(address: string, proposedTransactionId: number, signerAddress: string): Promise<Cid>;
    msigApproveTransferTxHash(address: string, proposedMessageId: number, proposerAddress: string, recipientAddres: string, value: string, senderAddressOfApproveMsg: string): Promise<Cid>;
    msigCancelTransfer(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, recipientAddres: string, value: string, methodToCallInProposeMsg: number): Promise<Cid>;
    msigProposeAddSigner(address: string, senderAddressOfProposeMsg: string, newSignerAddress: string, increaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    msigApproveAddSigner(address: string, senderAddressOfApproveMsg: string, proposedMessageId: number, proposerAddress: string, newSignerAddress: string, increaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    msigCancelAddSigner(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, newSignerAddress: string, increaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    msigProposeSwapSigner(address: string, senderAddressOfProposeMsg: string, oldSignerAddress: string, newSignerAddress: string): Promise<Cid>;
    msigApproveSwapSigner(address: string, senderAddressOfApproveMsg: string, proposedMessageId: number, proposerAddress: string, oldSignerAddress: string, newSignerAddress: string): Promise<Cid>;
    msigCancelSwapSigner(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, oldSignerAddress: string, newSignerAddress: string): Promise<Cid>;
    msigProposeRemoveSigner(address: string, senderAddressOfProposeMsg: string, addressToRemove: string, decreaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    msigApproveRemoveSigner(address: string, senderAddressOfApproveMsg: string, proposedMessageId: number, proposerAddress: string, addressToRemove: string, decreaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    msigCancelRemoveSigner(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, addressToRemove: string, decreaseNumberOfRequiredSigners: boolean): Promise<Cid>;
}
//# sourceMappingURL=ProviderInterfaces.d.ts.map