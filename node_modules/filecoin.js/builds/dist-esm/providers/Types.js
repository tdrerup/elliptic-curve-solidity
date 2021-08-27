export var DEFAULT_HD_PATH = "m/44'/461'/0/0/1";
export var TEST_DEFAULT_HD_PATH = "m/44'/1'/0/0/1";
export var MethodInit = {
    Constructor: 1,
    Exec: 2,
};
export var MethodMultisig = {
    Constructor: 1,
    Propose: 2,
    Approve: 3,
    Cancel: 4,
    AddSigner: 5,
    RemoveSigner: 6,
    SwapSigner: 7,
    ChangeNumApprovalsThreshold: 8,
};
export var SigType;
(function (SigType) {
    SigType[SigType["SigTypeSecp256k1"] = 1] = "SigTypeSecp256k1";
    SigType[SigType["SigTypeBLS"] = 2] = "SigTypeBLS";
})(SigType || (SigType = {}));
export var NewAddressType;
(function (NewAddressType) {
    NewAddressType["BLS"] = "bls";
    NewAddressType["SECP256K1"] = "secp256k1";
    NewAddressType["SECP256K1_LEDGER"] = "secp256k1-ledger";
})(NewAddressType || (NewAddressType = {}));
var Cid = /** @class */ (function () {
    function Cid() {
    }
    return Cid;
}());
export { Cid };
var BlockHeader = /** @class */ (function () {
    function BlockHeader() {
    }
    return BlockHeader;
}());
export { BlockHeader };
;
var TipSet = /** @class */ (function () {
    function TipSet() {
    }
    return TipSet;
}());
export { TipSet };
;
var Version = /** @class */ (function () {
    function Version() {
    }
    return Version;
}());
export { Version };
;
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
export { Message };
;
var MessagePartial = /** @class */ (function () {
    function MessagePartial() {
    }
    return MessagePartial;
}());
export { MessagePartial };
;
var HeadChange = /** @class */ (function () {
    function HeadChange() {
    }
    return HeadChange;
}());
export { HeadChange };
var BlockMessages = /** @class */ (function () {
    function BlockMessages() {
    }
    return BlockMessages;
}());
export { BlockMessages };
var MessageReceipt = /** @class */ (function () {
    function MessageReceipt() {
    }
    return MessageReceipt;
}());
export { MessageReceipt };
var MinerSectors = /** @class */ (function () {
    function MinerSectors() {
    }
    return MinerSectors;
}());
export { MinerSectors };
var ComputeStateOutput = /** @class */ (function () {
    function ComputeStateOutput() {
    }
    return ComputeStateOutput;
}());
export { ComputeStateOutput };
// TODO: Find more appropiate naming
var WrappedMessage = /** @class */ (function () {
    function WrappedMessage() {
    }
    return WrappedMessage;
}());
export { WrappedMessage };
var InvocResult = /** @class */ (function () {
    function InvocResult() {
    }
    return InvocResult;
}());
export { InvocResult };
var MsgGasCost = /** @class */ (function () {
    function MsgGasCost() {
    }
    return MsgGasCost;
}());
export { MsgGasCost };
var Loc = /** @class */ (function () {
    function Loc() {
    }
    return Loc;
}());
export { Loc };
var GasTrace = /** @class */ (function () {
    function GasTrace() {
    }
    return GasTrace;
}());
export { GasTrace };
var ExecutionTrace = /** @class */ (function () {
    function ExecutionTrace() {
    }
    return ExecutionTrace;
}());
export { ExecutionTrace };
var Actor = /** @class */ (function () {
    function Actor() {
    }
    return Actor;
}());
export { Actor };
var ActorState = /** @class */ (function () {
    function ActorState() {
    }
    return ActorState;
}());
export { ActorState };
/**
 * Information stored on-chain for a proven sector.
 */
var SectorOnChainInfo = /** @class */ (function () {
    function SectorOnChainInfo() {
    }
    return SectorOnChainInfo;
}());
export { SectorOnChainInfo };
/**
 * Deadline calculations with respect to a current epoch.
 *
 * @remarks
 * "Deadline" refers to the window during which proofs may be submitted. Windows are non-overlapping ranges [Open, Close), but the challenge epoch for a window occurs before the window opens.
 * The current epoch may not necessarily lie within the deadline or proving period represented here.
 */
var DeadlineInfo = /** @class */ (function () {
    function DeadlineInfo() {
    }
    return DeadlineInfo;
}());
export { DeadlineInfo };
var Claim = /** @class */ (function () {
    function Claim() {
    }
    return Claim;
}());
export { Claim };
var MinerPower = /** @class */ (function () {
    function MinerPower() {
    }
    return MinerPower;
}());
export { MinerPower };
var WorkerKeyChange = /** @class */ (function () {
    function WorkerKeyChange() {
    }
    return WorkerKeyChange;
}());
export { WorkerKeyChange };
/**
 * AddrInfo is a small struct used to pass around a peer with a set of addresses (and later, keys?).
 */
var AddrInfo = /** @class */ (function () {
    function AddrInfo() {
    }
    return AddrInfo;
}());
export { AddrInfo };
var Score = /** @class */ (function () {
    function Score() {
    }
    return Score;
}());
export { Score };
var PubsubScore = /** @class */ (function () {
    function PubsubScore() {
    }
    return PubsubScore;
}());
export { PubsubScore };
var NatInfo = /** @class */ (function () {
    function NatInfo() {
    }
    return NatInfo;
}());
export { NatInfo };
/**
 * Stats represents a point-in-time snapshot of bandwidth metrics.
 */
var Stats = /** @class */ (function () {
    function Stats() {
    }
    return Stats;
}());
export { Stats };
var MinerInfo = /** @class */ (function () {
    function MinerInfo() {
    }
    return MinerInfo;
}());
export { MinerInfo };
var PowerPair = /** @class */ (function () {
    function PowerPair() {
    }
    return PowerPair;
}());
export { PowerPair };
var Deadline = /** @class */ (function () {
    function Deadline() {
    }
    return Deadline;
}());
export { Deadline };
var Partition = /** @class */ (function () {
    function Partition() {
    }
    return Partition;
}());
export { Partition };
var Fault = /** @class */ (function () {
    function Fault() {
    }
    return Fault;
}());
export { Fault };
var SectorPreCommitInfo = /** @class */ (function () {
    function SectorPreCommitInfo() {
    }
    return SectorPreCommitInfo;
}());
export { SectorPreCommitInfo };
/**
 * Information stored on-chain for a pre-committed sector.
 */
var SectorPreCommitOnChainInfo = /** @class */ (function () {
    function SectorPreCommitOnChainInfo() {
    }
    return SectorPreCommitOnChainInfo;
}());
export { SectorPreCommitOnChainInfo };
var SectorExpiration = /** @class */ (function () {
    function SectorExpiration() {
    }
    return SectorExpiration;
}());
export { SectorExpiration };
var SectorLocation = /** @class */ (function () {
    function SectorLocation() {
    }
    return SectorLocation;
}());
export { SectorLocation };
var MsgLookup = /** @class */ (function () {
    function MsgLookup() {
    }
    return MsgLookup;
}());
export { MsgLookup };
// TODO: Change from string to BigNumber
var MarketBalance = /** @class */ (function () {
    function MarketBalance() {
    }
    return MarketBalance;
}());
export { MarketBalance };
var DealProposal = /** @class */ (function () {
    function DealProposal() {
    }
    return DealProposal;
}());
export { DealProposal };
var DealState = /** @class */ (function () {
    function DealState() {
    }
    return DealState;
}());
export { DealState };
var MarketDeal = /** @class */ (function () {
    function MarketDeal() {
    }
    return MarketDeal;
}());
export { MarketDeal };
var DealCollateralBounds = /** @class */ (function () {
    function DealCollateralBounds() {
    }
    return DealCollateralBounds;
}());
export { DealCollateralBounds };
var CirculatingSupply = /** @class */ (function () {
    function CirculatingSupply() {
    }
    return CirculatingSupply;
}());
export { CirculatingSupply };
var ObjStat = /** @class */ (function () {
    function ObjStat() {
    }
    return ObjStat;
}());
export { ObjStat };
;
;
var FileRef = /** @class */ (function () {
    function FileRef() {
    }
    return FileRef;
}());
export { FileRef };
var ImportRes = /** @class */ (function () {
    function ImportRes() {
    }
    return ImportRes;
}());
export { ImportRes };
/**
 * DataRef is a reference for how data will be transferred for a given storage deal
 */
var DataRef = /** @class */ (function () {
    function DataRef() {
    }
    return DataRef;
}());
export { DataRef };
var DealInfo = /** @class */ (function () {
    function DealInfo() {
    }
    return DealInfo;
}());
export { DealInfo };
var StartDealParams = /** @class */ (function () {
    function StartDealParams() {
    }
    return StartDealParams;
}());
export { StartDealParams };
/**
 * RetrievalPeer is a provider address/peer.ID pair (everything needed to make deals for with a miner)
 */
var RetrievalPeer = /** @class */ (function () {
    function RetrievalPeer() {
    }
    return RetrievalPeer;
}());
export { RetrievalPeer };
var QueryOffer = /** @class */ (function () {
    function QueryOffer() {
    }
    return QueryOffer;
}());
export { QueryOffer };
var RetrievalOrder = /** @class */ (function () {
    function RetrievalOrder() {
    }
    return RetrievalOrder;
}());
export { RetrievalOrder };
/**
 * StorageAsk defines the parameters by which a miner will choose to accept or reject a deal.
 *
 * @remarks making a storage deal proposal which matches the miner's ask is a precondition, but not sufficient to ensure the deal is accepted (the storage provider may run its own decision logic).
 */
var StorageAsk = /** @class */ (function () {
    function StorageAsk() {
    }
    return StorageAsk;
}());
export { StorageAsk };
/**
 * SignedStorageAsk is an ask signed by the miner's private key
 */
var SignedStorageAsk = /** @class */ (function () {
    function SignedStorageAsk() {
    }
    return SignedStorageAsk;
}());
export { SignedStorageAsk };
var CommPRet = /** @class */ (function () {
    function CommPRet() {
    }
    return CommPRet;
}());
export { CommPRet };
var DataSize = /** @class */ (function () {
    function DataSize() {
    }
    return DataSize;
}());
export { DataSize };
var DataTransferChannel = /** @class */ (function () {
    function DataTransferChannel() {
    }
    return DataTransferChannel;
}());
export { DataTransferChannel };
var Import = /** @class */ (function () {
    function Import() {
    }
    return Import;
}());
export { Import };
/**
 * KeyInfo is used for storing keys in KeyStore
 */
var KeyInfo = /** @class */ (function () {
    function KeyInfo() {
    }
    return KeyInfo;
}());
export { KeyInfo };
var RetrievalEvent = /** @class */ (function () {
    function RetrievalEvent() {
    }
    return RetrievalEvent;
}());
export { RetrievalEvent };
var ActiveSync = /** @class */ (function () {
    function ActiveSync() {
    }
    return ActiveSync;
}());
export { ActiveSync };
var SyncState = /** @class */ (function () {
    function SyncState() {
    }
    return SyncState;
}());
export { SyncState };
/**
 * Payment Channel Types
 */
var ChannelAvailableFunds = /** @class */ (function () {
    function ChannelAvailableFunds() {
    }
    return ChannelAvailableFunds;
}());
export { ChannelAvailableFunds };
/**
 * A voucher is sent by `From` to `To` off-chain in order to enable
 * `To` to redeem payments on-chain in the future
 */
var SignedVoucher = /** @class */ (function () {
    function SignedVoucher() {
    }
    return SignedVoucher;
}());
export { SignedVoucher };
var PaymentInfo = /** @class */ (function () {
    function PaymentInfo() {
    }
    return PaymentInfo;
}());
export { PaymentInfo };
var Merge = /** @class */ (function () {
    function Merge() {
    }
    return Merge;
}());
export { Merge };
var ModVerifyParams = /** @class */ (function () {
    function ModVerifyParams() {
    }
    return ModVerifyParams;
}());
export { ModVerifyParams };
var VoucherSpec = /** @class */ (function () {
    function VoucherSpec() {
    }
    return VoucherSpec;
}());
export { VoucherSpec };
var ChannelInfo = /** @class */ (function () {
    function ChannelInfo() {
    }
    return ChannelInfo;
}());
export { ChannelInfo };
var PaychStatus = /** @class */ (function () {
    function PaychStatus() {
    }
    return PaychStatus;
}());
export { PaychStatus };
/**
 * VoucherCreateResult is the response to calling PaychVoucherCreate
 */
var VoucherCreateResult = /** @class */ (function () {
    function VoucherCreateResult() {
    }
    return VoucherCreateResult;
}());
export { VoucherCreateResult };
//Mpool types
var MpoolConfig = /** @class */ (function () {
    function MpoolConfig() {
    }
    return MpoolConfig;
}());
export { MpoolConfig };
var MpoolUpdate = /** @class */ (function () {
    function MpoolUpdate() {
    }
    return MpoolUpdate;
}());
export { MpoolUpdate };
//Miner info types
var MiningBaseInfo = /** @class */ (function () {
    function MiningBaseInfo() {
    }
    return MiningBaseInfo;
}());
export { MiningBaseInfo };
var BlockTemplate = /** @class */ (function () {
    function BlockTemplate() {
    }
    return BlockTemplate;
}());
export { BlockTemplate };
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    return Ticket;
}());
export { Ticket };
var BlockMsg = /** @class */ (function () {
    function BlockMsg() {
    }
    return BlockMsg;
}());
export { BlockMsg };
var ElectionProof = /** @class */ (function () {
    function ElectionProof() {
    }
    return ElectionProof;
}());
export { ElectionProof };
var PoStProof = /** @class */ (function () {
    function PoStProof() {
    }
    return PoStProof;
}());
export { PoStProof };
var BeaconEntry = /** @class */ (function () {
    function BeaconEntry() {
    }
    return BeaconEntry;
}());
export { BeaconEntry };
// Information about a proof necessary for PoSt verification.
var SectorInfo = /** @class */ (function () {
    function SectorInfo() {
    }
    return SectorInfo;
}());
export { SectorInfo };
var MsigVesting = /** @class */ (function () {
    function MsigVesting() {
    }
    return MsigVesting;
}());
export { MsigVesting };
var MessageMatch = /** @class */ (function () {
    function MessageMatch() {
    }
    return MessageMatch;
}());
export { MessageMatch };
var DataCIDSize = /** @class */ (function () {
    function DataCIDSize() {
    }
    return DataCIDSize;
}());
export { DataCIDSize };
//# sourceMappingURL=Types.js.map