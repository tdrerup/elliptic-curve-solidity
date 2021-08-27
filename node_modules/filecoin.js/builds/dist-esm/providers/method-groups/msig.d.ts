import { Connector } from '../../connectors/Connector';
import { Address, ChainEpoch, Cid, MsigVesting, TipSetKey } from '../Types';
/**
 * The Msig methods are used to interact with multisig wallets on the filecoin network
 */
export declare class JsonRpcMsigMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * returns the portion of a multisig's balance that can be withdrawn or spent
     * @param address
     * @param tipSetKey
     */
    getAvailableBalance(address: string, tipSetKey: TipSetKey): Promise<string>;
    /**
     * returns the amount of FIL that vested in a multisig in a certain period.
     * @param address
     * @param startEpoch
     * @param endEpoch
     */
    getVested(address: string, startEpoch: TipSetKey, endEpoch: TipSetKey): Promise<string>;
    /**
     * creates a multisig wallet
     * @param requiredNumberOfSenders
     * @param approvingAddresses
     * @param unlockDuration
     * @param initialBalance
     * @param senderAddressOfCreateMsg
     * @param gasPrice
     */
    create(requiredNumberOfSenders: number, approvingAddresses: string[], unlockDuration: ChainEpoch, initialBalance: string, senderAddressOfCreateMsg: string, gasPrice: string): Promise<Cid>;
    /**
     * proposes a multisig message
     * @param address
     * @param recipientAddres
     * @param value
     * @param senderAddressOfProposeMsg
     * @param methodToCallInProposeMsg
     * @param paramsToIncludeInProposeMsg
     */
    propose(address: string, recipientAddres: string, value: string, senderAddressOfProposeMsg: string, methodToCallInProposeMsg: number, paramsToIncludeInProposeMsg: []): Promise<Cid>;
    /**
     * approves a previously-proposed multisig message by transaction ID
     * @param address
     * @param proposedTransactionId
     * @param signerAddress
     */
    approve(address: string, proposedTransactionId: number, signerAddress: string): Promise<Cid>;
    /**
     * approves a previously-proposed multisig message
     * @param address
     * @param proposedMessageId
     * @param proposerAddress
     * @param recipientAddres
     * @param value
     * @param senderAddressOfApproveMsg
     * @param methodToCallInProposeMsg
     * @param paramsToIncludeInProposeMsg
     */
    approveTxnHash(address: string, proposedMessageId: number, proposerAddress: string, recipientAddres: string, value: string, senderAddressOfApproveMsg: string, methodToCallInProposeMsg: number, paramsToIncludeInProposeMsg: []): Promise<Cid>;
    /**
     * cancels a previously-proposed multisig message
     * @param address
     * @param proposedMessageId
     * @param proposerAddress
     * @param recipientAddres
     * @param value
     * @param senderAddressOfCancelMsg
     * @param methodToCallInProposeMsg
     * @param paramsToIncludeInProposeMsg
     */
    cancel(address: string, proposedMessageId: number, proposerAddress: string, recipientAddres: string, value: string, senderAddressOfCancelMsg: string, methodToCallInProposeMsg: number, paramsToIncludeInProposeMsg: []): Promise<Cid>;
    /**
     * proposes adding a signer in the multisig
     * @param address
     * @param senderAddressOfProposeMsg
     * @param newSignerAddress
     * @param increaseNumberOfRequiredSigners
     */
    addPropose(address: string, senderAddressOfProposeMsg: string, newSignerAddress: string, increaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    /**
     * approves a previously proposed AddSigner message
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param proposerAddress
     * @param newSignerAddress
     * @param increaseNumberOfRequiredSigners
     */
    addApprove(address: string, senderAddressOfApproveMsg: string, proposedMessageId: number, proposerAddress: string, newSignerAddress: string, increaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    /**
     * cancels a previously proposed AddSigner message
     * @param address
     * @param senderAddressOfCancelMsg
     * @param proposedMessageId
     * @param newSignerAddress
     * @param increaseNumberOfRequiredSigners
     */
    addCancel(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, newSignerAddress: string, increaseNumberOfRequiredSigners: boolean): Promise<Cid>;
    /**
     * proposes swapping 2 signers in the multisig
     * @param address
     * @param senderAddressOfProposeMsg
     * @param oldSignerAddress
     * @param newSignerAddress
     */
    swapPropose(address: string, senderAddressOfProposeMsg: string, oldSignerAddress: string, newSignerAddress: string): Promise<Cid>;
    /**
     * approves a previously proposed SwapSigner
     * @param address
     * @param senderAddressOfApproveMsg
     * @param proposedMessageId
     * @param proposerAddress
     * @param oldSignerAddress
     * @param newSignerAddress
     */
    swapApprove(address: string, senderAddressOfApproveMsg: string, proposedMessageId: number, proposerAddress: string, oldSignerAddress: string, newSignerAddress: string): Promise<Cid>;
    /**
     * cancels a previously proposed SwapSigner message
     * @param address
     * @param senderAddressOfCancelMsg
     * @param proposedMessageId
     * @param oldSignerAddress
     * @param newSignerAddress
     */
    swapCancel(address: string, senderAddressOfCancelMsg: string, proposedMessageId: number, oldSignerAddress: string, newSignerAddress: string): Promise<Cid>;
    /**
     * returns the vesting details of a given multisig.
     * @param address
     * @param tipSetKey
     */
    getVestingSchedule(address: string, tipSetKey: TipSetKey): Promise<MsigVesting>;
    /**
     * proposes the removal of a signer from the multisig.
     * @param msigAddress
     * @param proposerAddress
     * @param toRemoveAddress
     * @param decrease
     *
     * @remarks It accepts the multisig to make the change on, the proposer address to send the message from, the address to be removed, and a boolean indicating whether or not the signing threshold should be lowered by one along with the address removal.
     */
    removeSigner(msigAddress: Address, proposerAddress: Address, toRemoveAddress: Address, decrease: boolean): Promise<Cid>;
}
//# sourceMappingURL=msig.d.ts.map