import { Actor, ActorState, Address, BitField, ChainEpoch, Cid, CirculatingSupply, ComputeStateOutput, Deadline, DeadlineInfo, DealCollateralBounds, DealID, Fault, InvocResult, MarketBalance, MarketDeal, Message, MessageMatch, MessageReceipt, MinerInfo, MinerPower, MinerSectors, MsgLookup, NetworkName, NetworkVersion, PaddedPieceSize, Partition, SectorExpiration, SectorLocation, SectorNumber, SectorOnChainInfo, SectorPreCommitInfo, SectorPreCommitOnChainInfo, StoragePower, TipSet, TipSetKey } from '../Types';
import { Connector } from '../../connectors/Connector';
/**
 * The State methods are used to query, inspect, and interact with chain state.
 *
 * @remarks
 * All methods take a TipSetKey as a parameter. The state looked up is the state at that tipset.
 * If TipSetKey is not provided as a param, the heaviest tipset in the chain to be used.
 */
export declare class JsonRpcStateMethodGroup {
    private conn;
    constructor(conn: Connector);
    /**
     * runs the given message and returns its result without any persisted changes.
     */
    stateCall(message: Message, tipSetKey?: TipSet): Promise<InvocResult>;
    /**
     * replays a given message, assuming it was included in a block in the specified tipset. If no tipset key is provided, the appropriate tipset is looked up.
     * @param tipSetKey
     * @param cid
     */
    stateReplay(tipSetKey: TipSetKey, cid: Cid): Promise<InvocResult>;
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
    listMessages(match: MessageMatch, tipSetKey?: TipSetKey, toHeight?: number): Promise<Cid[]>;
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
     * looks back in the chain for a message. If not found, it blocks until the message arrives on chain, and gets to the indicated confidence depth.
     * @param cid
     * @param confidence
     */
    waitMsg(cid: Cid, confidence: number): Promise<MsgLookup>;
    /**
     * looks back up to limit epochs in the chain for a message. If not found, it blocks until the message arrives on chain, and gets to the indicated confidence depth.
     * @param cid
     * @param confidence
     * @param limit
     */
    waitMsgLimited(cid: Cid, confidence: number, limit: ChainEpoch): Promise<MsgLookup>;
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
     * Applies the given messages on the given tipset.
     * @param epoch
     * @param messages
     * @param tipSetKey
     *
     * @remarks
     * The messages are run as though the VM were at the provided height.
     */
    compute(epoch: ChainEpoch, messages: Message[], tipSetKey?: TipSetKey): Promise<ComputeStateOutput>;
    /**
     * returns the data cap for the given address.
     * @param address
     * @param tipSetKey
     *
     * @remarks
     * Returns nil if there is no entry in the data cap table for the address.
     */
    verifiedClientStatus(address: Address, tipSetKey?: TipSetKey): Promise<StoragePower>;
    /**
     * returns the min and max collateral a storage provider can issue
     * @param size
     * @param verified
     * @param tipSetKey
     */
    dealProviderCollateralBounds(size: PaddedPieceSize, verified: boolean, tipSetKey?: TipSetKey): Promise<DealCollateralBounds>;
    /**
     * returns the circulating supply of Filecoin at the given tipset
     * @param tipSetKey
     */
    circulatingSupply(tipSetKey?: TipSetKey): Promise<CirculatingSupply>;
    /**
     * returns an approximation of the circulating supply of Filecoin at the given tipset.
     *
     * @param tipSetKey
     *
     * @remarks This is the value reported by the runtime interface to actors code.
     */
    vmCirculatingSupply(tipSetKey?: TipSetKey): Promise<CirculatingSupply>;
    /**
     * returns the data cap for the given address.
     * @param address
     * @param tipSetKey
     */
    verifierStatus(address: Address, tipSetKey?: TipSetKey): Promise<StoragePower | null>;
    /**
     * returns the network version at the given tipset
     * @param tipSetKey
     */
    networkVersion(tipSetKey?: TipSetKey): Promise<NetworkVersion>;
    /**
     * returns the address of the Verified Registry's root key
     * @param tipSetKey
     */
    verifiedRegistryRootKey(tipSetKey?: TipSetKey): Promise<Address>;
    /**
     * checks if a sector is allocated
     * @param address
     * @param sectorNumber
     * @param tipSetKey
     */
    minerSectorAllocated(address: Address, sectorNumber: SectorNumber, tipSetKey?: TipSetKey): Promise<boolean>;
}
//# sourceMappingURL=state.d.ts.map