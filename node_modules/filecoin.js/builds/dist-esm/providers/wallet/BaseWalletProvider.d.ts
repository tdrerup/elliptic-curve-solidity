import { Message, SignedMessage, Cid, MessagePartial, HeadChange, TipSet, BlockHeader, BlockMessages, MessageReceipt, WrappedMessage, ObjStat, TipSetKey, SyncState, MpoolUpdate, PeerID, Address, StorageAsk, Actor, ActorState, NetworkName, SectorOnChainInfo, DeadlineInfo, MinerPower, MinerInfo, Deadline, Partition, BitField, ChainEpoch, Fault, SectorPreCommitInfo, SectorNumber, SectorPreCommitOnChainInfo, SectorExpiration, SectorLocation, MsgLookup, MarketBalance, MarketDeal, DealID, MinerSectors, MsigVesting } from '../Types';
import { LotusClient } from '../..';
export declare class BaseWalletProvider {
    client: LotusClient;
    constructor(client: LotusClient);
    release(): Promise<any>;
    /**
     * get balance for address
     * @param address
     */
    getBalance(address: string): Promise<any>;
    /**
     * get nonce for address.  Note that this method may not be atomic. Use MpoolPushMessage instead.
     * @param address
     */
    getNonce(address: string): Promise<number>;
    /**
     * send signed message
     * @param msg
     */
    sendSignedMessage(msg: SignedMessage): Promise<Cid>;
    /**
      * estimate gas fee cap
      * @param message
      * @param nblocksincl
      */
    estimateMessageGasFeeCap(message: Message, nblocksincl: number): Promise<string>;
    /**
    * estimate gas limit, it fails if message fails to execute.
    * @param message
    */
    estimateMessageGasLimit(message: Message): Promise<number>;
    /**
    * estimate gas to succesufully send message, and have it likely be included in the next nblocksincl blocks
    * @param nblocksincl
    * @param sender
    * @param gasLimit
    */
    estimateMessageGasPremium(nblocksincl: number, sender: string, gasLimit: number): Promise<string>;
    /**
     * estimate gas to succesufully send message, and have it included in the next 10 blocks
     * @param message
     */
    estimateMessageGas(message: Message): Promise<Message>;
    /**
     * prepare a message for signing, add defaults, and populate nonce and gas related parameters if not provided
     * @param message
     */
    createMessage(message: MessagePartial): Promise<Message>;
    /**
     * call back on chain head updates.
     * @param cb
     * @returns interval id
     */
    chainNotify(cb: (headChange: HeadChange[]) => void): Promise<void>;
    /**
     * returns the current head of the chain
     */
    getHead(): Promise<TipSet>;
    /**
     * returns the block specified by the given CID
     * @param blockCid
     */
    getBlock(blockCid: Cid): Promise<BlockHeader>;
    /**
     * returns messages stored in the specified block.
     * @param blockCid
     */
    getBlockMessages(blockCid: Cid): Promise<BlockMessages>;
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
     * looks back for a tipset at the specified epoch.
     * @param epochNumber
     */
    getTipSetByHeight(epochNumber: number): Promise<TipSet>;
    /**
     * reads ipld nodes referenced by the specified CID from chain blockstore and returns raw bytes.
     * @param cid
     */
    readObj(cid: Cid): Promise<string>;
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
     * reads a message referenced by the specified CID from the chain blockstore
     * @param messageCid
     */
    getMessage(messageCid: Cid): Promise<Message>;
    /**
     * Returns a set of revert/apply operations needed to get from
     * @param from
     * @param to
     */
    getPath(from: TipSetKey, to: TipSetKey): Promise<HeadChange[]>;
    /**
     * returns the current status of the lotus sync system.
     */
    state(): Promise<SyncState>;
    /**
     * returns a channel streaming incoming, potentially not yet synced block headers.
     * @param cb
     */
    incomingBlocks(cb: (blockHeader: BlockHeader) => void): Promise<void>;
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
    sub(cb: (data: MpoolUpdate) => void): Promise<void>;
    /**
     * returns a signed StorageAsk from the specified miner.
     * @param peerId
     * @param miner
     */
    queryAsk(peerId: PeerID, miner: Address): Promise<StorageAsk>;
    /**
     * returns the indicated actor's nonce and balance
     * @param address
     * @param tipSetKey
     */
    getActor(address: string, tipSetKey?: TipSetKey): Promise<Actor>;
    /**
     * returns the indicated actor's state
     * @param address
     * @param tipSetKey
     */
    readState(address: string, tipSetKey?: TipSetKey): Promise<ActorState>;
    /**
     * looks back and returns all messages with a matching to or from address, stopping at the given height.
     * @param filter
     * @param tipSetKey
     * @param toHeight
     */
    listMessages(filter: {
        To?: string;
        From?: string;
    }, tipSetKey?: TipSetKey, toHeight?: number): Promise<Cid[]>;
    /**
     * returns the name of the network the node is synced to
     */
    networkName(): Promise<NetworkName>;
    /**
     * returns info about the given miner's sectors
     * @param address
     * @param tipSetKey
     */
    minerSectors(address: string, tipSetKey?: TipSetKey): Promise<SectorOnChainInfo[]>;
    /**
     * returns info about sectors that a given miner is actively proving.
     * @param address
     * @param tipSetKey
     */
    minerActiveSectors(address: string, tipSetKey?: TipSetKey): Promise<SectorOnChainInfo[]>;
    /**
     * calculates the deadline at some epoch for a proving period and returns the deadline-related calculations.
     * @param address
     * @param tipSetKey
     */
    minerProvingDeadline(address: string, tipSetKey?: TipSetKey): Promise<DeadlineInfo>;
    /**
     * returns the power of the indicated miner
     * @param address
     * @param tipSetKey
     */
    minerPower(address: string, tipSetKey?: TipSetKey): Promise<MinerPower>;
    /**
     * returns info about the indicated miner
     * @param address
     * @param tipSetKey
     */
    minerInfo(address: string, tipSetKey?: TipSetKey): Promise<MinerInfo>;
    /**
     * returns all the proving deadlines for the given miner
     * @param address
     * @param tipSetKey
     */
    minerDeadlines(address: string, tipSetKey?: TipSetKey): Promise<Deadline[]>;
    /**
     * Loads miner partitions for the specified miner and deadline
     * @param address
     * @param idx
     * @param tipSetKey
     */
    minerPartitions(address: string, idx?: number, tipSetKey?: TipSetKey): Promise<Partition[]>;
    /**
     * Returns a bitfield indicating the faulty sectors of the given miner
     * @param address
     * @param tipSetKey
     */
    minerFaults(address: string, tipSetKey?: TipSetKey): Promise<BitField>;
    /**
     * returns all non-expired Faults that occur within lookback epochs of the given tipset
     * @param epoch
     * @param tipSetKey
     */
    allMinerFaults(epoch: ChainEpoch, tipSetKey?: TipSetKey): Promise<Fault[]>;
    /**
     * returns a bitfield indicating the recovering sectors of the given miner
     * @param address
     * @param tipSetKey
     */
    minerRecoveries(address: string, tipSetKey?: TipSetKey): Promise<BitField>;
    /**
     * returns the precommit deposit for the specified miner's sector
     * @param address
     * @param sectorPreCommitInfo
     * @param tipSetKey
     */
    minerPreCommitDepositForPower(address: string, sectorPreCommitInfo: SectorPreCommitInfo, tipSetKey?: TipSetKey): Promise<string>;
    /**
     * returns the initial pledge collateral for the specified miner's sector
     * @param address
     * @param sectorPreCommitInfo
     * @param tipSetKey
     */
    minerInitialPledgeCollateral(address: string, sectorPreCommitInfo: SectorPreCommitInfo, tipSetKey?: TipSetKey): Promise<string>;
    /**
     * returns the portion of a miner's balance that can be withdrawn or spent
     * @param address
     * @param tipSetKey
     */
    minerAvailableBalance(address: string, tipSetKey?: TipSetKey): Promise<string>;
    /**
     * returns the PreCommit info for the specified miner's sector
     * @param address
     * @param sector
     * @param tipSetKey
     */
    sectorPreCommitInfo(address: string, sector: SectorNumber, tipSetKey?: TipSetKey): Promise<SectorPreCommitOnChainInfo>;
    /**
     * StateSectorGetInfo returns the on-chain info for the specified miner's sector
     * @param address
     * @param sector
     * @param tipSetKey
     *
     * @remarks
     * NOTE: returned Expiration may not be accurate in some cases, use StateSectorExpiration to get accurate expiration epoch
     */
    sectorGetInfo(address: string, sector: SectorNumber, tipSetKey?: TipSetKey): Promise<SectorOnChainInfo>;
    /**
     * returns epoch at which given sector will expire
     * @param address
     * @param sector
     * @param tipSetKey
     */
    sectorExpiration(address: string, sector: SectorNumber, tipSetKey?: TipSetKey): Promise<SectorExpiration>;
    /**
     * finds deadline/partition with the specified sector
     * @param address
     * @param sector
     * @param tipSetKey
     */
    sectorPartition(address: string, sector: SectorNumber, tipSetKey?: TipSetKey): Promise<SectorLocation>;
    /**
     * searches for a message in the chain and returns its receipt and the tipset where it was executed
     * @param cid
     */
    searchMsg(cid: Cid): Promise<MsgLookup>;
    /**
     * returns the addresses of every miner that has claimed power in the Power Actor
     * @param tipSetKey
     */
    listMiners(tipSetKey?: TipSetKey): Promise<Address[]>;
    /**
     * returns the addresses of every actor in the state
     * @param tipSetKey
     */
    listActors(tipSetKey?: TipSetKey): Promise<Address[]>;
    /**
     * looks up the Escrow and Locked balances of the given address in the Storage Market
     * @param address
     * @param tipSetKey
     */
    marketBalance(address: Address, tipSetKey?: TipSetKey): Promise<MarketBalance>;
    /**
     * returns the Escrow and Locked balances of every participant in the Storage Market
     * @param tipSetKey
     */
    marketParticipants(tipSetKey?: TipSetKey): Promise<{
        [k: string]: MarketBalance;
    }>;
    /**
     * returns information about every deal in the Storage Market
     * @param tipSetKey
     */
    marketDeals(tipSetKey?: TipSetKey): Promise<{
        [k: string]: MarketDeal;
    }>;
    /**
     * returns information about the indicated deal
     * @param dealId
     * @param tipSetKey
     */
    marketStorageDeal(dealId: DealID, tipSetKey?: TipSetKey): Promise<MarketDeal>;
    /**
     * retrieves the ID address of the given address
     * @param address
     * @param tipSetKey
     */
    lookupId(address: Address, tipSetKey?: TipSetKey): Promise<Address>;
    /**
     * returns the public key address of the given ID address
     * @param address
     * @param tipSetKey
     */
    accountKey(address: Address, tipSetKey?: TipSetKey): Promise<Address>;
    /**
     * returns all the actors whose states change between the two given state CIDs
     * @param cid1
     * @param cid2
     */
    changedActors(cid1?: Cid, cid2?: Cid): Promise<{
        [k: string]: Actor;
    }>;
    /**
     * returns the message receipt for the given message
     * @param cid
     * @param tipSetKey
     */
    getReceipt(cid: Cid, tipSetKey?: TipSetKey): Promise<MessageReceipt>;
    /**
     * returns the number of sectors in a miner's sector set and proving set
     * @param address
     * @param tipSetKey
     */
    minerSectorCount(address: Address, tipSetKey?: TipSetKey): Promise<MinerSectors>;
    /**
    * returns the vesting details of a given multisig.
    * @param address
    * @param tipSetKey
    */
    msigGetVestingSchedule(address: string, tipSetKey: TipSetKey): Promise<MsigVesting>;
    /**
     * returns the portion of a multisig's balance that can be withdrawn or spent
     * @param address
     * @param tipSetKey
     */
    msigGetAvailableBalance(address: string, tipSetKey: TipSetKey): Promise<string>;
    /**
     * returns the amount of FIL that vested in a multisig in a certain period.
     * @param address
     * @param startEpoch
     * @param endEpoch
     */
    msigGetVested(address: string, startEpoch: TipSetKey, endEpoch: TipSetKey): Promise<string>;
}
//# sourceMappingURL=BaseWalletProvider.d.ts.map