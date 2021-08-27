import { Connector } from '../../connectors/Connector';
import { Cid, Message, MpoolConfig, MpoolUpdate, SignedMessage, TipSetKey } from '../Types';
/**
 * The Mpool methods are for interacting with the message pool. The message pool manages all incoming and outgoing 'messages' going over the network.
 */
export declare class JsonRpcMPoolMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * returns (a copy of) the current mpool config
     */
    getMpoolConfig(): Promise<MpoolConfig>;
    /**
     * sets the mpool config to (a copy of) the supplied config
     * @param config
     */
    setMpoolConfig(config: MpoolConfig): Promise<MpoolConfig>;
    /**
     * clears pending messages from the mpool
     */
    clear(): Promise<any>;
    /**
     * get all mpool messages
     * @param tipSetKey
     */
    getMpoolPending(tipSetKey: TipSetKey): Promise<[SignedMessage]>;
    /**
     * returns a list of pending messages for inclusion in the next block
     * @param tipSetKey
     * @param ticketQuality
     */
    select(tipSetKey: TipSetKey, ticketQuality: number): Promise<[SignedMessage]>;
    /**
     * returns a list of pending messages for inclusion in the next block
     * @param tipSetKey
     * @param ticketQuality
     */
    sub(cb: (data: MpoolUpdate) => void): Promise<void>;
    /**
     * get nonce for address.  Note that this method may not be atomic. Use MpoolPushMessage instead.
     * @param address
     */
    getNonce(address: string): Promise<number>;
    /**
     * send message, signed with default lotus wallet
     *
     * @remarks
     * MpoolPushMessage atomically assigns a nonce, signs, and pushes a message
     * to mempool.
     * maxFee is only used when GasFeeCap/GasPremium fields aren't specified
     * When maxFee is set to 0, MpoolPushMessage will guess appropriate fee
     * based on current chain conditions
     * @param msg
     */
    pushMessage(msg: Message): Promise<SignedMessage>;
    /**
     * send signed message
     * @param msg
     */
    push(msg: SignedMessage): Promise<Cid>;
    /**
     * pushes a signed message to mempool from untrusted sources.
     * @param message
     */
    pushUntrusted(message: SignedMessage): Promise<Cid>;
    /**
     * batch pushes a signed message to mempool.
     * @param messages
     */
    batchPush(messages: SignedMessage[]): Promise<Cid[]>;
    /**
     * batch pushes a signed message to mempool from untrusted sources
     * @param messages
     */
    batchPushUntrusted(messages: SignedMessage[]): Promise<Cid[]>;
    /**
     * batch pushes a unsigned message to mempool
     * @param messages
     */
    batchPushMessage(messages: Message[]): Promise<SignedMessage[]>;
}
//# sourceMappingURL=mpool.d.ts.map