import { Connector } from '../../connectors/Connector';
import { BlockMsg, BlockTemplate, ChainEpoch, MiningBaseInfo, TipSetKey } from '../Types';
export declare class JsonRpcMinerMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * MinerGetBaseInfo
     * @param address
     * @param chainEpoch
     * @param tipSetKey
     */
    getBaseInfo(address: string, chainEpoch: ChainEpoch, tipSetKey: TipSetKey): Promise<MiningBaseInfo>;
    /**
     * MinerCreateBlock
     * @param blockTemplate
     */
    createBlock(blockTemplate: BlockTemplate): Promise<BlockMsg>;
}
//# sourceMappingURL=miner.d.ts.map