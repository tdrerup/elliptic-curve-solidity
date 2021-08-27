import { Connector } from '../../connectors/Connector';
import { AddrInfo, Connectedness, NatInfo, PeerID, PubsubScore } from '../Types';
export declare class JsonRpcNetMethodGroup {
    private conn;
    constructor(conn: Connector);
    connectedness(peerId: PeerID): Promise<Connectedness>;
    peers(): Promise<AddrInfo[]>;
    connect(addrInfo: AddrInfo): Promise<any>;
    addrsListen(): Promise<AddrInfo>;
    disconnect(peerID: PeerID): Promise<void>;
    findPeer(peerID: PeerID): Promise<AddrInfo>;
    pubsubScores(): Promise<PubsubScore[]>;
    autoNatStatus(): Promise<NatInfo>;
}
//# sourceMappingURL=net.d.ts.map