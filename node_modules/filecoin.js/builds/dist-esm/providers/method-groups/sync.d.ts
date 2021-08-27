import { Connector } from '../../connectors/Connector';
import { BlockHeader, BlockMsg, Cid, SyncState, TipSetKey } from '../Types';
/**
 * The Sync method group contains methods for interacting with and observing the lotus sync service.
 */
export declare class JsonRpcSyncMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * returns the current status of the lotus sync system.
     */
    state(): Promise<SyncState>;
    /**
     * checks if a block was marked as bad, and if it was, returns the reason.
     * @param blockCid
     */
    checkBad(blockCid: Cid): Promise<string>;
    /**
     * marks a blocks as bad, meaning that it won't ever by synced. Use with extreme caution.
     * @param blockCid
     */
    markBad(blockCid: Cid): Promise<void>;
    /**
     * purges bad block cache, making it possible to sync to chains previously marked as bad
     */
    unmarkAllBad(): Promise<void>;
    /**
     * unmarks a block as bad, making it possible to be validated and synced again.
     * @param blockCid
     */
    unmarkBad(blockCid: Cid): Promise<void>;
    /**
     * marks a blocks as checkpointed, meaning that it won't ever fork away from it.
     * @param tipSetKey
     */
    checkpoint(tipSetKey: TipSetKey): Promise<string>;
    /**
     * can be used to submit a newly created block to the network
     * @param blockMsg
     */
    submitBlock(blockMsg: BlockMsg): Promise<string>;
    /**
     * returns a channel streaming incoming, potentially not yet synced block headers.
     * @param cb
     */
    incomingBlocks(cb: (blockHeader: BlockHeader) => void): Promise<void>;
    /**
     * indicates whether the provided tipset is valid or not
     * @param tipSetKey
     */
    validateTipset(tipSetKey: TipSetKey): Promise<boolean>;
}
//# sourceMappingURL=sync.d.ts.map