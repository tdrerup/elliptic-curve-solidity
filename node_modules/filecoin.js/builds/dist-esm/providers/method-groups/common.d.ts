import { Connector } from '../../connectors/Connector';
import { ID, Version } from '../Types';
export declare class JsonRpcCommonMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * returns peerID of libp2p node backing this API
     */
    id(): Promise<ID>;
    /**
     * provides information about API provider
     */
    version(): Promise<Version>;
    logList(): Promise<string[]>;
    logSetLevel(string1: string, string2: string): Promise<any>;
    /**
     * trigger graceful shutdown
     */
    shutdown(): Promise<void>;
}
//# sourceMappingURL=common.d.ts.map