import { Connector } from '../../connectors/Connector';
import { Address, Cid, CommPRet, DataCIDSize, DataSize, DataTransferChannel, DealInfo, FileRef, Import, ImportRes, PeerID, QueryOffer, RetrievalEvent, RetrievalOrder, StartDealParams, StorageAsk, StoreID, TransferID } from '../Types';
/**
 * The Client methods all have to do with interacting with the storage and retrieval markets as a client.
 */
export declare class JsonRpcClientMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * Imports file under the specified path into filestore.
     * @param fileRef
     */
    import(fileRef: FileRef): Promise<ImportRes>;
    /**
     * Removes file import
     * @param importId
     */
    removeImport(importId: StoreID): Promise<ImportRes>;
    /**
     * Proposes a deal with a miner.
     * @param dealParams
     */
    startDeal(dealParams: StartDealParams): Promise<Cid>;
    /**
     * Returns the latest information about a given deal.
     * @param dealCid
     */
    getDealInfo(dealCid: Cid): Promise<DealInfo>;
    /**
     * Returns information about the deals made by the local client.
     */
    listDeals(): Promise<DealInfo[]>;
    hasLocal(cid: Cid): Promise<boolean>;
    /**
     * Identifies peers that have a certain file, and returns QueryOffers (one per peer).
     * @param cid
     * @param pieceCid
     */
    findData(cid: Cid, pieceCid?: Cid): Promise<QueryOffer[]>;
    /**
     * returns a QueryOffer for the specific miner and file.
     * @param miner
     * @param root
     * @param pieceCid
     */
    minerQueryOffer(miner: Address, root: Cid, pieceCid?: Cid): Promise<QueryOffer>;
    /**
     * initiates the retrieval of a file, as specified in the order.
     * @param order
     * @param ref
     */
    retrieve(order: RetrievalOrder, ref: FileRef): Promise<void>;
    /**
     * returns a signed StorageAsk from the specified miner.
     * @param peerId
     * @param miner
     */
    queryAsk(peerId: PeerID, miner: Address): Promise<StorageAsk>;
    /**
     * calculates the CommP for a specified file
     * @param path
     */
    calcCommP(path: string): Promise<CommPRet>;
    /**
     * generates a CAR file for the specified file.
     * @param ref
     * @param outpath
     */
    genCar(ref: FileRef, outpath: string): Promise<any>;
    /**
     * calculates real deal data size
     * @param root
     */
    dealSize(root: Cid): Promise<DataSize>;
    /**
     * returns the status of all ongoing transfers of data
     */
    listDataTransfers(): Promise<DataTransferChannel[]>;
    /**
     * attempts to restart stalled retrievals on a given payment channel which are stuck due to insufficient funds.
     * @param paymentChannel
     */
    retrieveTryRestartInsufficientFunds(paymentChannel: Address): Promise<void>;
    /**
     * lists imported files and their root CIDs
     */
    listImports(): Promise<Import[]>;
    /**
     * returns the status of updated deals
     */
    getDealUpdates(cb: (data: DealInfo) => void): Promise<void>;
    /**
     * initiates the retrieval of a file, as specified in the order, and provides a channel of status updates.
     * @param order
     * @param ref
     * @param cb
     */
    retrieveWithEvents(order: RetrievalOrder, ref: FileRef, cb: (data: RetrievalEvent) => void): Promise<void>;
    dataTransferUpdates(cb: (data: DataTransferChannel) => void): Promise<void>;
    /**
     * returns deal status given a code
     * @param code
     */
    getDealStatus(code: number): Promise<string>;
    /**
     * attempts to restart a data transfer with the given transfer ID and other peer
     * @param transferId
     * @param otherPeer
     * @param isInitiator
     */
    restartDataTransfer(transferId: TransferID, otherPeer: PeerID, isInitiator: boolean): Promise<void>;
    /**
     * cancels a data transfer with the given transfer ID and other peer
     * @param transferId
     * @param otherPeer
     * @param isInitiator
     */
    cancelDataTransfer(transferId: TransferID, otherPeer: PeerID, isInitiator: boolean): Promise<void>;
    dealPieceCID(rootCid: Cid): Promise<DataCIDSize>;
}
//# sourceMappingURL=client.d.ts.map