import { BigNumber } from 'bignumber.js';
export declare const DEFAULT_HD_PATH = "m/44'/461'/0/0/1";
export declare const TEST_DEFAULT_HD_PATH = "m/44'/1'/0/0/1";
export declare type StringGetter = () => Promise<string>;
export declare const MethodInit: {
    Constructor: number;
    Exec: number;
};
export declare const MethodMultisig: {
    Constructor: number;
    Propose: number;
    Approve: number;
    Cancel: number;
    AddSigner: number;
    RemoveSigner: number;
    SwapSigner: number;
    ChangeNumApprovalsThreshold: number;
};
export declare enum SigType {
    SigTypeSecp256k1 = 1,
    SigTypeBLS = 2
}
export declare enum NewAddressType {
    BLS = "bls",
    SECP256K1 = "secp256k1",
    SECP256K1_LEDGER = "secp256k1-ledger"
}
export declare class Cid {
    '/': string;
}
export declare class BlockHeader {
    Miner: string;
    Ticket: {
        VRFProof: string;
    };
    ElectionProof: {
        WinCount: number;
        VRFProof: string;
    };
    BeaconEntries: {
        Round: number;
        Data: string;
    }[];
    WinPoStProof: {
        PoStProof: number;
        ProofBytes: string;
    }[];
    Parents: Cid[];
    ParentWeight: string;
    Height: number;
    ParentStateRoot: Cid;
    ParentMessageReceipts: Cid;
    Messages: Cid;
    BLSAggregate: Signature;
    Timestamp: number;
    BlockSig: Signature;
    ForkSignaling: number;
}
export declare class TipSet {
    Cids: Cid[];
    Blocks: BlockHeader[];
    Height: number;
}
export declare class Version {
    Version: string;
    APIVersion: number;
    BlockDelay: number;
}
export declare class Message {
    Version?: number;
    To: string;
    From: string;
    Nonce: number;
    Value: BigNumber;
    GasLimit: number;
    GasFeeCap: BigNumber;
    GasPremium: BigNumber;
    Method: number;
    Params: string;
}
export declare class MessagePartial {
    Version?: number;
    To: string;
    From: string;
    Nonce?: number;
    Value?: BigNumber;
    GasLimit?: number;
    GasFeeCap?: BigNumber;
    GasPremium?: BigNumber;
    Method?: number;
    Params?: string;
}
export declare class HeadChange {
    Type: 'current' | string;
    Val: TipSet;
}
export declare class BlockMessages {
    BlsMessages: Message[];
    SecpkMessages: SignedMessage[];
    Cids: Cid[];
}
export declare type ExitCode = number;
export declare class MessageReceipt {
    ExitCode: ExitCode;
    Return: any;
    GasUsed: number;
}
export declare class MinerSectors {
    /**
     * Sectors actively contributing to power.
     */
    Active: number;
    /**
     * Sectors with failed proofs.
     */
    Faulty: number;
    /**
     * Live sectors that should be proven.
     */
    Live: number;
}
export declare class ComputeStateOutput {
    Root: Cid;
    Trace: InvocResult[];
}
export declare class WrappedMessage {
    Cid: Cid;
    Message: Message;
}
export declare type TipSetKey = Cid[];
export declare class InvocResult {
    MsgCid: Cid;
    Msg: Message;
    MsgRct: MessageReceipt;
    GasCost: MsgGasCost;
    ExecutionTrace: ExecutionTrace;
    Error: string;
    Duration: number;
}
export declare class MsgGasCost {
    Message: Cid;
    GasUsed: TokenAmount;
    BaseFeeBurn: TokenAmount;
    OverEstimationBurn: TokenAmount;
    MinerPenalty: TokenAmount;
    MinerTip: TokenAmount;
    Refund: TokenAmount;
    TotalCost: TokenAmount;
}
export declare class Loc {
    File: string;
    Line: number;
    Function: string;
}
export declare class GasTrace {
    Name: string;
    Location: Loc[];
    TotalGas: number;
    ComputeGas: number;
    StorageGas: number;
    TotalVirtualGas: number;
    VirtualComputeGas: number;
    VirtualStorageGas: number;
    TimeTaken: number;
    Extra: any;
    Callers: number[];
}
export declare class ExecutionTrace {
    Msg: Message;
    MsgRct: MessageReceipt;
    Error: string;
    Duration: number;
    GasCharges: GasTrace[];
    Subcalls: ExecutionTrace[];
}
export declare class Actor {
    Code: Cid;
    Head: Cid;
    Nonce: number;
    Balance: BigNumber;
}
export declare class ActorState {
    Balance: string;
    State: any;
}
export declare type NetworkName = string;
export declare type SectorNumber = number;
export declare type RegisteredProof = number;
export declare type RegisteredSealProof = RegisteredProof;
export declare type DealID = number;
export declare type ChainEpoch = number;
export declare type DealWeight = number;
export declare type TokenAmount = string;
/**
 * It indicates one of a set of possible sizes in the network.
 *
 * @remarks
 * 1KiB = 1024
 * 1MiB = 1048576
 * 1GiB = 1073741824
 * 1TiB = 1099511627776
 * 1PiB = 1125899906842624
 * 1EiB = 1152921504606846976
 * max  = 18446744073709551615
 */
export declare type SectorSize = number;
/**
 * The unit of storage power (measured in bytes)
 */
export declare type StoragePower = string;
/**
 * Information stored on-chain for a proven sector.
 */
export declare class SectorOnChainInfo {
    SectorNumber: SectorNumber;
    /**
     * The seal proof type implies the PoSt proof/s
     */
    SealProof: RegisteredSealProof;
    /**
     * CommR
     */
    SealedCID: Cid;
    DealIDs: DealID[];
    /**
     * Epoch during which the sector proof was accepted
     */
    Activation: ChainEpoch;
    /**
     * Epoch during which the sector expires
     */
    Expiration: ChainEpoch;
    /**
     * Integral of active deals over sector lifetime
     */
    DealWeight: DealWeight;
    /**
     * Integral of active verified deals over sector lifetime
     */
    VerifiedDealWeight: DealWeight;
    /**
     * Pledge collected to commit this sector
     */
    InitialPledge: TokenAmount;
    /**
     * Expected one day projection of reward for sector computed at activation time
     */
    ExpectedDayReward: TokenAmount;
    /**
     * Expected twenty day projection of reward for sector computed at activation time
     */
    ExpectedStoragePledge: TokenAmount;
    /**
     * Age of sector this sector replaced or zero
     */
    ReplacedSectorAge: ChainEpoch;
    /**
     * Day reward of sector this sector replace or zero
     */
    ReplacedDayReward: TokenAmount;
}
/**
 * Deadline calculations with respect to a current epoch.
 *
 * @remarks
 * "Deadline" refers to the window during which proofs may be submitted. Windows are non-overlapping ranges [Open, Close), but the challenge epoch for a window occurs before the window opens.
 * The current epoch may not necessarily lie within the deadline or proving period represented here.
 */
export declare class DeadlineInfo {
    /**
     * Epoch at which this info was calculated.
     */
    CurrentEpoch: ChainEpoch;
    /**
     * First epoch of the proving period (<= CurrentEpoch).
     */
    PeriodStart: ChainEpoch;
    /**
     * A deadline index, in [0..WPoStProvingPeriodDeadlines) unless period elapsed.
     */
    Index: number;
    /**
     * First epoch from which a proof may be submitted (>= CurrentEpoch).
     */
    Open: ChainEpoch;
    /**
     * First epoch from which a proof may no longer be submitted (>= Open).
     */
    Close: ChainEpoch;
    /**
     * Epoch at which to sample the chain for challenge (< Open).
     */
    Challenge: ChainEpoch;
    /**
     * First epoch at which a fault declaration is rejected (< Open).
     */
    FaultCutoff: ChainEpoch;
}
export declare class Claim {
    /**
     * Sum of raw byte power for a miner's sectors.
     */
    RawBytePower: StoragePower;
    /**
     * Sum of quality adjusted power for a miner's sectors.
     */
    QualityAdjPower: StoragePower;
}
export declare class MinerPower {
    MinerPower: Claim;
    TotalPower: Claim;
    HasMinPower: boolean;
}
export declare type Address = string;
export declare class WorkerKeyChange {
    NewWorker: Address;
    EffectiveAt: ChainEpoch;
}
/**
 * multiaddr is the data type representing a Multiaddr
 */
export declare type Multiaddr = string;
/**
 * AddrInfo is a small struct used to pass around a peer with a set of addresses (and later, keys?).
 */
export declare class AddrInfo {
    ID: ID;
    Addrs: Multiaddr[];
}
export declare class Score {
    Score: number;
    Topics: any;
    AppSpecificScore: number;
    IPColocationFactor: number;
    BehaviourPenalty: number;
}
export declare class PubsubScore {
    ID: ID;
    Score: Score;
}
/**
 * Reachability indicates how reachable a node is./**
 */
export declare type Reachability = number;
export declare class NatInfo {
    Reachability: Reachability;
    PublicAddr: string;
}
/**
 * Stats represents a point-in-time snapshot of bandwidth metrics.
 */
export declare class Stats {
    /**
     * The TotalIn and TotalOut fields record cumulative bytes sent / received.
     */
    TotalIn: number;
    TotalOut: number;
    /**
     * The RateIn and RateOut fields record bytes sent / received per second.
     */
    RateIn: number;
    RateOut: number;
}
export declare type PeerID = string;
export declare type Multiaddrs = any;
export declare class MinerInfo {
    /**
     * Account that owns the miner.
     *
     * @remarks
     * Income and returned collateral are paid to this address. This address is also allowed to change the worker address for the miner.
     */
    Owner: Address;
    /**
     * Worker account for the miner.
     *
     * @remarks
     * The associated pubkey-type address is used to sign blocks and messages on behalf of this miner.
     */
    Worker: Address;
    /**
     * Additional addresses that are permitted to submit messages controlling this actor
     */
    ControlAddresses?: Address[];
    PendingWorkerKey: WorkerKeyChange;
    /**
     * Libp2p identity that should be used when connecting to this miner.
     */
    PeerId: PeerID;
    /**
     * Libp2p multi-addresses used for establishing a connection with this miner.
     */
    Multiaddrs: Multiaddrs[] | null;
    /**
     * The proof type used by this miner for sealing sectors.
     */
    SealProofType: RegisteredSealProof;
    /**
     * Amount of space in each sector committed by this miner.
     *
     * @remarks
     * This is computed from the proof type and represented here redundantly.
     */
    SectorSize: SectorSize;
    /**
     * The number of sectors in each Window PoSt partition (proof).
     *
     * @remarks
     * This is computed from the proof type and represented here redundantly.
     */
    WindowPoStPartitionSectors: number;
    /**
     * The next epoch this miner is eligible for certain permissioned actor methods and winning block elections as a result of being reported for a consensus fault.
     */
    ConsensusFaultElapsed: ChainEpoch;
}
export declare type BitField = number[];
export declare class PowerPair {
    Raw: StoragePower;
    QA: StoragePower;
}
export declare class Deadline {
    /**
     * Partitions in this deadline, in order.
     *
     * @remarks
     * The keys of this AMT are always sequential integers beginning with zero.
     */
    Partitions: Cid;
    /**
     * Maps epochs to partitions that _may_ have sectors that expire in or before that epoch.
     *
     * @remarks
     * Partitions MUST NOT be removed from this queue (until the associated epoch has passed) even if they no longer have sectors expiring at that epoch.
     * Sectors expiring at this epoch may later be recovered, and this queue will not be updated at that time.
     */
    ExpirationsEpochs: Cid;
    /**
     * Partitions numbers with PoSt submissions since the proving period started.
     */
    PostSubmissions: BitField;
    /**
     * Partitions with sectors that terminated early.
     */
    EarlyTerminations: BitField;
    /**
     * The number of non-terminated sectors in this deadline (incl faulty).
     */
    LiveSectors: number;
    /**
     * The total number of sectors in this deadline (incl dead).
     */
    TotalSectors: number;
    /**
     * Memoized sum of faulty power in partitions.
     */
    FaultyPower: PowerPair;
}
export declare class Partition {
    /**
     * Sector numbers in this partition, including faulty, unproven, and terminated sectors.
     */
    AllSectors: BitField;
    /**
     * Subset of sectors detected/declared faulty and not yet recovered (excl. from PoSt).
     */
    FaultySectors: BitField;
    /**
     * Subset of faulty sectors expected to recover on next PoSt
     */
    RecoveringSectors: BitField;
    ActiveSectors: BitField;
    LiveSectors: BitField;
}
export declare class Fault {
    Miner: Address;
    Epoch: ChainEpoch;
}
export declare class SectorPreCommitInfo {
    SealProof: RegisteredSealProof;
    SectorNumber: SectorNumber;
    /**
     * CommR
     */
    SealedCID: Cid;
    SealRandEpoch: ChainEpoch;
    DealIDs: DealID | null;
    Expiration: ChainEpoch;
    /**
     * Whether to replace a "committed capacity" no-deal sector
     *
     * @remarks
     * It requires non-empty DealIDs
     */
    ReplaceCapacity: boolean;
    /**
     * The committed capacity sector to replace, and it's deadline/partition location
     */
    ReplaceSectorDeadline: number;
    ReplaceSectorPartition: number;
    ReplaceSectorNumber: SectorNumber;
}
/**
 * Information stored on-chain for a pre-committed sector.
 */
export declare class SectorPreCommitOnChainInfo {
    Info: SectorPreCommitInfo;
    PreCommitDeposit: TokenAmount;
    PreCommitEpoch: ChainEpoch;
    /**
     * Integral of active deals over sector lifetime
     */
    DealWeight: DealWeight;
    /**
     * Integral of active verified deals over sector lifetime
     */
    VerifiedDealWeight: DealWeight;
}
export declare class SectorExpiration {
    OnTime: ChainEpoch;
    /**
     * non-zero if sector is faulty, epoch at which it will be permanently removed if it doesn't recover
     */
    Early: ChainEpoch;
}
export declare class SectorLocation {
    Deadline: number;
    Partition: number;
}
export declare class MsgLookup {
    /**
     * @remarks
     * Can be different than requested, in case it was replaced, but only gas values changed
     */
    Message: Cid;
    Receipt: MessageReceipt;
    ReturnDec: any;
    TipSet: TipSetKey;
    Height: ChainEpoch;
}
export declare class MarketBalance {
    Escrow: string;
    Locked: string;
}
export declare type PaddedPieceSize = number;
export declare type UnpaddedPieceSize = number;
export declare class DealProposal {
    PieceCID: Cid;
    PieceSize: PaddedPieceSize;
    VerifiedDeal: boolean;
    Client: Address;
    Provider: Address;
    /**
     * An arbitrary client chosen label to apply to the deal
     */
    Label: string;
    /**
     * Nominal start epoch.
     * @remarks
     * Deal payment is linear between StartEpoch and EndEpoch, with total amount StoragePricePerEpoch * (EndEpoch - StartEpoch).
     * Storage deal must appear in a sealed (proven) sector no later than StartEpoch, otherwise it is invalid.
     */
    StartEpoch: ChainEpoch;
    EndEpoch: ChainEpoch;
    StoragePricePerEpoch: TokenAmount;
    ProviderCollateral: TokenAmount;
    ClientCollateral: TokenAmount;
}
export declare class DealState {
    /**
     * @remarks
     * -1 if not yet included in proven sector
     */
    SectorStartEpoch: ChainEpoch;
    /**
     * @remarks
     * -1 if deal state never updated
     */
    LastUpdatedEpoch: ChainEpoch;
    /**
     * @remarks
     * -1 if deal never slashed
     */
    SlashEpoch: ChainEpoch;
}
export declare class MarketDeal {
    Proposal: DealProposal;
    State: DealState;
}
/**
 * DataCap is an integer number of bytes.
 *
 * @remarks
 * This can be replaced in the future due to policy changes
 */
export declare type DataCap = StoragePower;
export declare class DealCollateralBounds {
    Min: TokenAmount;
    Max: TokenAmount;
}
export declare class CirculatingSupply {
    FilVested: TokenAmount;
    FilMined: TokenAmount;
    FilBurnt: TokenAmount;
    FilLocked: TokenAmount;
    FilCirculating: TokenAmount;
}
export declare class ObjStat {
    Size: number;
    Links: number;
}
export interface Signature {
    Data: string;
    Type: number;
}
export interface SignedMessage {
    Message: Message;
    Signature: Signature;
}
export declare type StoreID = number;
export declare class FileRef {
    Path: string;
    IsCAR: boolean;
}
export declare class ImportRes {
    Root: Cid;
    ImportID: StoreID;
}
/**
 * StorageDealStatus is the local status of a StorageDeal.
 *
 * @remarks This status has meaning in the context of this module only - it is not recorded on chain
 */
export declare type StorageDealStatus = number;
/**
 * DataRef is a reference for how data will be transferred for a given storage deal
 */
export declare class DataRef {
    TransferType: string;
    Root: Cid;
    /**
     * Optional for non-manual transfer, will be recomputed from the data if not given
     */
    PieceCid?: Cid;
    /**
     * Optional for non-manual transfer, will be recomputed from the data if not given
     */
    PieceSize?: UnpaddedPieceSize;
}
export declare class DealInfo {
    ProposalCid: Cid;
    State: StorageDealStatus;
    /**
     * More information about deal state, particularly errors
     */
    Message: string;
    Provider: Address;
    DataRef: DataRef;
    PieceCID: Cid;
    Size: number;
    PricePerEpoch: any;
    Duration: number;
    DealID: DealID;
    CreationTime: string;
    Verified: boolean;
}
export declare class StartDealParams {
    Data: DataRef;
    Wallet: Address;
    Miner: Address;
    EpochPrice: string;
    MinBlocksDuration: number;
    ProviderCollateral?: string;
    DealStartEpoch?: ChainEpoch;
    FastRetrieval?: boolean;
    VerifiedDeal?: boolean;
}
/**
 * ID is a libp2p peer identity
 */
export declare type ID = string;
/**
 * RetrievalPeer is a provider address/peer.ID pair (everything needed to make deals for with a miner)
 */
export declare class RetrievalPeer {
    Address: Address;
    ID?: ID;
    PieceCID?: Cid;
}
export declare class QueryOffer {
    Err: string;
    Root: Cid;
    Piece: Cid;
    Size: number;
    MinPrice: string;
    UnsealPrice: string;
    PaymentInterval: number;
    PaymentIntervalIncrease: number;
    Miner: Address;
    MinerPeer: RetrievalPeer;
}
export declare class RetrievalOrder {
    Root: Cid;
    Piece?: Cid;
    Size: number;
    Total: string;
    UnsealPrice: string;
    PaymentInterval: number;
    PaymentIntervalIncrease: number;
    Client: Address;
    Miner: Address;
    MinerPeer: RetrievalPeer;
}
/**
 * StorageAsk defines the parameters by which a miner will choose to accept or reject a deal.
 *
 * @remarks making a storage deal proposal which matches the miner's ask is a precondition, but not sufficient to ensure the deal is accepted (the storage provider may run its own decision logic).
 */
export declare class StorageAsk {
    /**
     * Price per GiB / Epoch
     */
    Price: TokenAmount;
    VerifiedPrice: TokenAmount;
    MinPieceSize: PaddedPieceSize;
    MaxPieceSize: PaddedPieceSize;
    Miner: Address;
    Timestamp: ChainEpoch;
    Expiry: ChainEpoch;
    SeqNo: number;
}
/**
 * SignedStorageAsk is an ask signed by the miner's private key
 */
export declare class SignedStorageAsk {
    Ask: StorageAsk;
    Signature: Signature;
}
export declare class CommPRet {
    Root: Cid;
    Size: UnpaddedPieceSize;
}
export declare class DataSize {
    PayloadSize: number;
    PieceSize: PaddedPieceSize;
}
/**
 * TransferID is an identifier for a data transfer, shared between request/responder and unique to the requester.
 */
export declare type TransferID = number;
export declare class DataTransferChannel {
    TransferID: TransferID;
    Status: number;
    BaseCID: Cid;
    IsInitiator: boolean;
    IsSender: boolean;
    Voucher: string;
    Message: string;
    OtherPeer: PeerID;
    Transferred: number;
}
export declare class Import {
    Key: StoreID;
    Err: string;
    Root: Cid;
    Source: string;
    FilePath: string;
}
/**
 * DealStatus is the status of a retrieval deal returned by a provider in a DealResponse
 */
export declare type DealStatus = number;
export declare type ClientEvent = number;
/**
 * KeyInfo is used for storing keys in KeyStore
 */
export declare class KeyInfo {
    Type: string;
    PrivateKey: [];
}
export declare type Permission = string;
export declare type Connectedness = number;
export declare class RetrievalEvent {
    Event: ClientEvent;
    Status: DealStatus;
    BytesReceived: number;
    FundsSpent: TokenAmount;
    Err: string;
}
export declare type SyncStateStage = number;
export declare class ActiveSync {
    Base: TipSet;
    Target: TipSet;
    Stage: SyncStateStage;
    Height: ChainEpoch;
    Start: string;
    End: string;
    Message: string;
}
export declare class SyncState {
    ActiveSyncs: ActiveSync[];
    VMApplied: number;
}
/**
 * Payment Channel Types
 */
export declare class ChannelAvailableFunds {
    /**
   * Address of the channel
   */
    Channel: Address;
    /**
   * From address of the channel (channel creator)
   */
    From: Address;
    /**
   * To address of the channel
   */
    To: Address;
    /**
   * Amount of funds that have been confirmed on-chain for the channel
   */
    ConfirmedAmt: string;
    /**
   * Amount of funds that are pending confirmation on-chain
   */
    PendingAmt: string;
    /**
   * Can be used with PaychGetWaitReady to wait for confirmation of pending funds
   */
    PendingWaitSentinel: Cid;
    /**
   * Amount that is queued up behind a pending request
   */
    QueuedAmt: string;
    /**
   * Amount that is redeemed by vouchers on-chain and in the local datastore
   */
    VoucherReedeemedAmt: string;
}
/**
 * A voucher is sent by `From` to `To` off-chain in order to enable
 * `To` to redeem payments on-chain in the future
 */
export declare class SignedVoucher {
    /**
   * Address of the payment channel this signed voucher is valid for
   */
    ChannelAddr: string;
    /**
   * Min epoch before which the voucher cannot be redeemed
   */
    TimeLockMin: ChainEpoch;
    /**
   * Max epoch beyond which the voucher cannot be redeemed
   * TimeLockMax set to 0 means no timeout
   */
    TimeLockMax: ChainEpoch;
    /**
   * (optional) The SecretPreImage is used by `To` to validate
   */
    SecretPreimage?: [];
    /**
   * (optional) Extra can be specified by `From` to add a verification method to the voucher
   */
    Extra?: ModVerifyParams;
    /**
   * Specifies which lane the Voucher merges into (will be created if does not exist)
   */
    Lane: number;
    /**
   * Nonce is set by `From` to prevent redemption of stale vouchers on a lane
   */
    Nonce: number;
    /**
   * Amount voucher can be redeemed for
   */
    Amount: string;
    /**
   * (optional) MinSettleHeight can extend channel MinSettleHeight if needed
   */
    MinSettleHeight?: ChainEpoch;
    /**
   * (optional) Set of lanes to be merged into `Lane`
   */
    Merges?: Merge[];
    /**
   * Sender's signature over the voucher
   */
    Signature: Signature;
}
export declare class PaymentInfo {
    Channel: string;
    WaitSentinel: Cid;
    Vouchers: SignedVoucher[];
}
export declare class Merge {
    Lane: number;
    Nonce: number;
}
export declare class ModVerifyParams {
    Actor: string;
    Method: number;
    Data: [];
}
export declare class VoucherSpec {
    Amount: string;
    TimeLockMin: ChainEpoch;
    TimeLockMax: ChainEpoch;
    MinSettle: ChainEpoch;
    Extra: ModVerifyParams;
}
export declare class ChannelInfo {
    Channel: Address;
    WaitSentinel: Cid;
}
export declare class PaychStatus {
    ControlAddr: Address;
    Direction: number;
}
/**
 * VoucherCreateResult is the response to calling PaychVoucherCreate
 */
export declare class VoucherCreateResult {
    /**
   * Voucher that was created, or nil if there was an error or if there were insufficient funds in the channel
   */
    Voucher: SignedVoucher;
    /**
   * Additional amount that would be needed in the channel in order to be able to create the voucher
   */
    Shortfall: string;
}
export declare class MpoolConfig {
    PriorityAddrs: Address[];
    SizeLimitHigh: number;
    SizeLimitLow: number;
    ReplaceByFeeRatio: number;
    PruneCooldown: number;
    GasLimitOverestimation: number;
}
export declare class MpoolUpdate {
    Type: number;
    Message: SignedMessage;
}
export declare class MiningBaseInfo {
    MinerPower: string;
    NetworkPower: string;
    Sectors: SectorInfo[];
    WorkerKey: Address;
    SectorSize: number;
    PrevBeaconEntry: BeaconEntry;
    BeaconEntries: BeaconEntry[];
    EligibleForMining: boolean;
}
export declare class BlockTemplate {
    Miner: Address;
    Parents: TipSetKey;
    Ticket: Ticket;
    Eproof: ElectionProof;
    BeaconValues: BeaconEntry[];
    Messages: SignedMessage[];
    Epoch: ChainEpoch;
    Timestamp: number;
    WinningPoStProof: PoStProof[];
}
export declare class Ticket {
    VRFProof: [];
}
export declare class BlockMsg {
    Header: BlockHeader;
    BlsMessages: Cid[];
    SecpkMessages: Cid[];
}
export declare class ElectionProof {
    WinCount: number;
    VRFProof: [];
}
export declare class PoStProof {
    PoStProof: number;
    ProofBytes: [];
}
export declare class BeaconEntry {
    Round: number;
    Data: [];
}
export declare class SectorInfo {
    SealProof: number;
    SectorNumber: number;
    SealedCID: Cid;
}
export declare class MsigVesting {
    InitialBalance: TokenAmount;
    StartEpoch: ChainEpoch;
    UnlockDuration: ChainEpoch;
}
export declare type NetworkVersion = number;
export declare class MessageMatch {
    To?: Address;
    From?: Address;
}
export declare class DataCIDSize {
    PayloadSize: number;
    PieceSize: PaddedPieceSize;
    PieceCID: Cid;
}
/**
 * Interface to be implemented by all providers.
 *
 * @public
 */
export interface Provider {
    /**
     *
     * @param message - The message to send
     * @returns The signed message sent
     */
    sendMessage(message: Message): Promise<SignedMessage>;
    sendMessageSigned(message: SignedMessage): Promise<string>;
    getMessage(cid: string): Promise<Message>;
}
//# sourceMappingURL=Types.d.ts.map