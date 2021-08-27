/// <reference types="node" />
import { Connector } from '../../connectors/Connector';
import { BlockHeader, BlockMessages, ChainEpoch, Cid, HeadChange, Message, MessageReceipt, ObjStat, TipSet, TipSetKey, WrappedMessage } from '../Types';
/**
 * The Chain method group contains methods for interacting with the blockchain, but that do not require any form of state computation.
 */
export declare class JsonRpcChainMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * reads ipld nodes referenced by the specified CID from chain blockstore and returns raw bytes.
     * @param cid
     */
    readObj(cid: Cid): Promise<string>;
    /**
     * deletes node referenced by the given CID
     * @param cid
     */
    deleteObj(cid: Cid): Promise<string>;
    /**
     * returns messages stored in the specified block.
     * @param blockCid
     */
    getBlockMessages(blockCid: Cid): Promise<BlockMessages>;
    /**
     * returns the current head of the chain
     */
    getHead(): Promise<TipSet>;
    /**
     * call back on chain head updates.
     * @param cb
     * @returns interval id
     */
    chainNotify(cb: (headChange: HeadChange[]) => void): Promise<NodeJS.Timeout | undefined>;
    stopChainNotify(id?: any): void;
    /**
     * returns the block specified by the given CID
     * @param blockCid
     */
    getBlock(blockCid: Cid): Promise<BlockHeader>;
    /**
     * reads a message referenced by the specified CID from the chain blockstore
     * @param messageCid
     */
    getMessage(messageCid: Cid): Promise<Message>;
    /**
     * returns receipts for messages in parent tipset of the specified block
     * @param blockCid
     */
    getParentReceipts(blockCid: Cid): Promise<MessageReceipt[]>;
    /**
     * returns messages stored in parent tipset of the specified block.
     * @param blockCid
     */
    getParentMessages(blockCid: Cid): Promise<WrappedMessage[]>;
    /**
     * checks if a given CID exists in the chain blockstore
     * @param cid
     */
    hasObj(cid: Cid): Promise<boolean>;
    /**
     * returns statistics about the graph referenced by 'obj'.
     *
     * @remarks
     * If 'base' is also specified, then the returned stat will be a diff between the two objects.
     */
    statObj(obj: Cid, base?: Cid): Promise<ObjStat>;
    /**
     * Forcefully sets current chain head. Use with caution.
     * @param tipSetKey
     */
    setHead(tipSetKey: TipSetKey): Promise<void>;
    /**
     * Returns the genesis tipset.
     * @param tipSet
     */
    getGenesis(): Promise<TipSet>;
    /**
     * Computes weight for the specified tipset.
     * @param tipSetKey
     */
    getTipSetWeight(tipSetKey?: TipSetKey): Promise<string>;
    /**
     * looks back for a tipset at the specified epoch.
     * @param epochNumber
     */
    getTipSetByHeight(epochNumber: number): Promise<TipSet>;
    /**
     * Returns a set of revert/apply operations needed to get from
     * @param from
     * @param to
     */
    getPath(from: TipSetKey, to: TipSetKey): Promise<HeadChange[]>;
    /**
     * Returns a stream of bytes with CAR dump of chain data.
     * @param nroots
     * @param tipSetKey
     *
     * @remarks The exported chain data includes the header chain from the given tipset back to genesis, the entire genesis state, and the most recent 'nroots' state trees. If oldmsgskip is set, messages from before the requested roots are also not included.
     */
    export(nroots: ChainEpoch, oldmsgskip: boolean, tipSetKey: TipSetKey): Promise<any>;
}
//# sourceMappingURL=chain.d.ts.map