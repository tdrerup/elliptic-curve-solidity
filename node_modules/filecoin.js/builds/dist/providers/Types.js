"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCIDSize = exports.MessageMatch = exports.MsigVesting = exports.SectorInfo = exports.BeaconEntry = exports.PoStProof = exports.ElectionProof = exports.BlockMsg = exports.Ticket = exports.BlockTemplate = exports.MiningBaseInfo = exports.MpoolUpdate = exports.MpoolConfig = exports.VoucherCreateResult = exports.PaychStatus = exports.ChannelInfo = exports.VoucherSpec = exports.ModVerifyParams = exports.Merge = exports.PaymentInfo = exports.SignedVoucher = exports.ChannelAvailableFunds = exports.SyncState = exports.ActiveSync = exports.RetrievalEvent = exports.KeyInfo = exports.Import = exports.DataTransferChannel = exports.DataSize = exports.CommPRet = exports.SignedStorageAsk = exports.StorageAsk = exports.RetrievalOrder = exports.QueryOffer = exports.RetrievalPeer = exports.StartDealParams = exports.DealInfo = exports.DataRef = exports.ImportRes = exports.FileRef = exports.ObjStat = exports.CirculatingSupply = exports.DealCollateralBounds = exports.MarketDeal = exports.DealState = exports.DealProposal = exports.MarketBalance = exports.MsgLookup = exports.SectorLocation = exports.SectorExpiration = exports.SectorPreCommitOnChainInfo = exports.SectorPreCommitInfo = exports.Fault = exports.Partition = exports.Deadline = exports.PowerPair = exports.MinerInfo = exports.Stats = exports.NatInfo = exports.PubsubScore = exports.Score = exports.AddrInfo = exports.WorkerKeyChange = exports.MinerPower = exports.Claim = exports.DeadlineInfo = exports.SectorOnChainInfo = exports.ActorState = exports.Actor = exports.ExecutionTrace = exports.GasTrace = exports.Loc = exports.MsgGasCost = exports.InvocResult = exports.WrappedMessage = exports.ComputeStateOutput = exports.MinerSectors = exports.MessageReceipt = exports.BlockMessages = exports.HeadChange = exports.MessagePartial = exports.Message = exports.Version = exports.TipSet = exports.BlockHeader = exports.Cid = exports.NewAddressType = exports.SigType = exports.MethodMultisig = exports.MethodInit = exports.TEST_DEFAULT_HD_PATH = exports.DEFAULT_HD_PATH = void 0;
exports.DEFAULT_HD_PATH = "m/44'/461'/0/0/1";
exports.TEST_DEFAULT_HD_PATH = "m/44'/1'/0/0/1";
exports.MethodInit = {
    Constructor: 1,
    Exec: 2,
};
exports.MethodMultisig = {
    Constructor: 1,
    Propose: 2,
    Approve: 3,
    Cancel: 4,
    AddSigner: 5,
    RemoveSigner: 6,
    SwapSigner: 7,
    ChangeNumApprovalsThreshold: 8,
};
var SigType;
(function (SigType) {
    SigType[SigType["SigTypeSecp256k1"] = 1] = "SigTypeSecp256k1";
    SigType[SigType["SigTypeBLS"] = 2] = "SigTypeBLS";
})(SigType = exports.SigType || (exports.SigType = {}));
var NewAddressType;
(function (NewAddressType) {
    NewAddressType["BLS"] = "bls";
    NewAddressType["SECP256K1"] = "secp256k1";
    NewAddressType["SECP256K1_LEDGER"] = "secp256k1-ledger";
})(NewAddressType = exports.NewAddressType || (exports.NewAddressType = {}));
var Cid = /** @class */ (function () {
    function Cid() {
    }
    return Cid;
}());
exports.Cid = Cid;
var BlockHeader = /** @class */ (function () {
    function BlockHeader() {
    }
    return BlockHeader;
}());
exports.BlockHeader = BlockHeader;
;
var TipSet = /** @class */ (function () {
    function TipSet() {
    }
    return TipSet;
}());
exports.TipSet = TipSet;
;
var Version = /** @class */ (function () {
    function Version() {
    }
    return Version;
}());
exports.Version = Version;
;
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
exports.Message = Message;
;
var MessagePartial = /** @class */ (function () {
    function MessagePartial() {
    }
    return MessagePartial;
}());
exports.MessagePartial = MessagePartial;
;
var HeadChange = /** @class */ (function () {
    function HeadChange() {
    }
    return HeadChange;
}());
exports.HeadChange = HeadChange;
var BlockMessages = /** @class */ (function () {
    function BlockMessages() {
    }
    return BlockMessages;
}());
exports.BlockMessages = BlockMessages;
var MessageReceipt = /** @class */ (function () {
    function MessageReceipt() {
    }
    return MessageReceipt;
}());
exports.MessageReceipt = MessageReceipt;
var MinerSectors = /** @class */ (function () {
    function MinerSectors() {
    }
    return MinerSectors;
}());
exports.MinerSectors = MinerSectors;
var ComputeStateOutput = /** @class */ (function () {
    function ComputeStateOutput() {
    }
    return ComputeStateOutput;
}());
exports.ComputeStateOutput = ComputeStateOutput;
// TODO: Find more appropiate naming
var WrappedMessage = /** @class */ (function () {
    function WrappedMessage() {
    }
    return WrappedMessage;
}());
exports.WrappedMessage = WrappedMessage;
var InvocResult = /** @class */ (function () {
    function InvocResult() {
    }
    return InvocResult;
}());
exports.InvocResult = InvocResult;
var MsgGasCost = /** @class */ (function () {
    function MsgGasCost() {
    }
    return MsgGasCost;
}());
exports.MsgGasCost = MsgGasCost;
var Loc = /** @class */ (function () {
    function Loc() {
    }
    return Loc;
}());
exports.Loc = Loc;
var GasTrace = /** @class */ (function () {
    function GasTrace() {
    }
    return GasTrace;
}());
exports.GasTrace = GasTrace;
var ExecutionTrace = /** @class */ (function () {
    function ExecutionTrace() {
    }
    return ExecutionTrace;
}());
exports.ExecutionTrace = ExecutionTrace;
var Actor = /** @class */ (function () {
    function Actor() {
    }
    return Actor;
}());
exports.Actor = Actor;
var ActorState = /** @class */ (function () {
    function ActorState() {
    }
    return ActorState;
}());
exports.ActorState = ActorState;
/**
 * Information stored on-chain for a proven sector.
 */
var SectorOnChainInfo = /** @class */ (function () {
    function SectorOnChainInfo() {
    }
    return SectorOnChainInfo;
}());
exports.SectorOnChainInfo = SectorOnChainInfo;
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
exports.DeadlineInfo = DeadlineInfo;
var Claim = /** @class */ (function () {
    function Claim() {
    }
    return Claim;
}());
exports.Claim = Claim;
var MinerPower = /** @class */ (function () {
    function MinerPower() {
    }
    return MinerPower;
}());
exports.MinerPower = MinerPower;
var WorkerKeyChange = /** @class */ (function () {
    function WorkerKeyChange() {
    }
    return WorkerKeyChange;
}());
exports.WorkerKeyChange = WorkerKeyChange;
/**
 * AddrInfo is a small struct used to pass around a peer with a set of addresses (and later, keys?).
 */
var AddrInfo = /** @class */ (function () {
    function AddrInfo() {
    }
    return AddrInfo;
}());
exports.AddrInfo = AddrInfo;
var Score = /** @class */ (function () {
    function Score() {
    }
    return Score;
}());
exports.Score = Score;
var PubsubScore = /** @class */ (function () {
    function PubsubScore() {
    }
    return PubsubScore;
}());
exports.PubsubScore = PubsubScore;
var NatInfo = /** @class */ (function () {
    function NatInfo() {
    }
    return NatInfo;
}());
exports.NatInfo = NatInfo;
/**
 * Stats represents a point-in-time snapshot of bandwidth metrics.
 */
var Stats = /** @class */ (function () {
    function Stats() {
    }
    return Stats;
}());
exports.Stats = Stats;
var MinerInfo = /** @class */ (function () {
    function MinerInfo() {
    }
    return MinerInfo;
}());
exports.MinerInfo = MinerInfo;
var PowerPair = /** @class */ (function () {
    function PowerPair() {
    }
    return PowerPair;
}());
exports.PowerPair = PowerPair;
var Deadline = /** @class */ (function () {
    function Deadline() {
    }
    return Deadline;
}());
exports.Deadline = Deadline;
var Partition = /** @class */ (function () {
    function Partition() {
    }
    return Partition;
}());
exports.Partition = Partition;
var Fault = /** @class */ (function () {
    function Fault() {
    }
    return Fault;
}());
exports.Fault = Fault;
var SectorPreCommitInfo = /** @class */ (function () {
    function SectorPreCommitInfo() {
    }
    return SectorPreCommitInfo;
}());
exports.SectorPreCommitInfo = SectorPreCommitInfo;
/**
 * Information stored on-chain for a pre-committed sector.
 */
var SectorPreCommitOnChainInfo = /** @class */ (function () {
    function SectorPreCommitOnChainInfo() {
    }
    return SectorPreCommitOnChainInfo;
}());
exports.SectorPreCommitOnChainInfo = SectorPreCommitOnChainInfo;
var SectorExpiration = /** @class */ (function () {
    function SectorExpiration() {
    }
    return SectorExpiration;
}());
exports.SectorExpiration = SectorExpiration;
var SectorLocation = /** @class */ (function () {
    function SectorLocation() {
    }
    return SectorLocation;
}());
exports.SectorLocation = SectorLocation;
var MsgLookup = /** @class */ (function () {
    function MsgLookup() {
    }
    return MsgLookup;
}());
exports.MsgLookup = MsgLookup;
// TODO: Change from string to BigNumber
var MarketBalance = /** @class */ (function () {
    function MarketBalance() {
    }
    return MarketBalance;
}());
exports.MarketBalance = MarketBalance;
var DealProposal = /** @class */ (function () {
    function DealProposal() {
    }
    return DealProposal;
}());
exports.DealProposal = DealProposal;
var DealState = /** @class */ (function () {
    function DealState() {
    }
    return DealState;
}());
exports.DealState = DealState;
var MarketDeal = /** @class */ (function () {
    function MarketDeal() {
    }
    return MarketDeal;
}());
exports.MarketDeal = MarketDeal;
var DealCollateralBounds = /** @class */ (function () {
    function DealCollateralBounds() {
    }
    return DealCollateralBounds;
}());
exports.DealCollateralBounds = DealCollateralBounds;
var CirculatingSupply = /** @class */ (function () {
    function CirculatingSupply() {
    }
    return CirculatingSupply;
}());
exports.CirculatingSupply = CirculatingSupply;
var ObjStat = /** @class */ (function () {
    function ObjStat() {
    }
    return ObjStat;
}());
exports.ObjStat = ObjStat;
;
;
var FileRef = /** @class */ (function () {
    function FileRef() {
    }
    return FileRef;
}());
exports.FileRef = FileRef;
var ImportRes = /** @class */ (function () {
    function ImportRes() {
    }
    return ImportRes;
}());
exports.ImportRes = ImportRes;
/**
 * DataRef is a reference for how data will be transferred for a given storage deal
 */
var DataRef = /** @class */ (function () {
    function DataRef() {
    }
    return DataRef;
}());
exports.DataRef = DataRef;
var DealInfo = /** @class */ (function () {
    function DealInfo() {
    }
    return DealInfo;
}());
exports.DealInfo = DealInfo;
var StartDealParams = /** @class */ (function () {
    function StartDealParams() {
    }
    return StartDealParams;
}());
exports.StartDealParams = StartDealParams;
/**
 * RetrievalPeer is a provider address/peer.ID pair (everything needed to make deals for with a miner)
 */
var RetrievalPeer = /** @class */ (function () {
    function RetrievalPeer() {
    }
    return RetrievalPeer;
}());
exports.RetrievalPeer = RetrievalPeer;
var QueryOffer = /** @class */ (function () {
    function QueryOffer() {
    }
    return QueryOffer;
}());
exports.QueryOffer = QueryOffer;
var RetrievalOrder = /** @class */ (function () {
    function RetrievalOrder() {
    }
    return RetrievalOrder;
}());
exports.RetrievalOrder = RetrievalOrder;
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
exports.StorageAsk = StorageAsk;
/**
 * SignedStorageAsk is an ask signed by the miner's private key
 */
var SignedStorageAsk = /** @class */ (function () {
    function SignedStorageAsk() {
    }
    return SignedStorageAsk;
}());
exports.SignedStorageAsk = SignedStorageAsk;
var CommPRet = /** @class */ (function () {
    function CommPRet() {
    }
    return CommPRet;
}());
exports.CommPRet = CommPRet;
var DataSize = /** @class */ (function () {
    function DataSize() {
    }
    return DataSize;
}());
exports.DataSize = DataSize;
var DataTransferChannel = /** @class */ (function () {
    function DataTransferChannel() {
    }
    return DataTransferChannel;
}());
exports.DataTransferChannel = DataTransferChannel;
var Import = /** @class */ (function () {
    function Import() {
    }
    return Import;
}());
exports.Import = Import;
/**
 * KeyInfo is used for storing keys in KeyStore
 */
var KeyInfo = /** @class */ (function () {
    function KeyInfo() {
    }
    return KeyInfo;
}());
exports.KeyInfo = KeyInfo;
var RetrievalEvent = /** @class */ (function () {
    function RetrievalEvent() {
    }
    return RetrievalEvent;
}());
exports.RetrievalEvent = RetrievalEvent;
var ActiveSync = /** @class */ (function () {
    function ActiveSync() {
    }
    return ActiveSync;
}());
exports.ActiveSync = ActiveSync;
var SyncState = /** @class */ (function () {
    function SyncState() {
    }
    return SyncState;
}());
exports.SyncState = SyncState;
/**
 * Payment Channel Types
 */
var ChannelAvailableFunds = /** @class */ (function () {
    function ChannelAvailableFunds() {
    }
    return ChannelAvailableFunds;
}());
exports.ChannelAvailableFunds = ChannelAvailableFunds;
/**
 * A voucher is sent by `From` to `To` off-chain in order to enable
 * `To` to redeem payments on-chain in the future
 */
var SignedVoucher = /** @class */ (function () {
    function SignedVoucher() {
    }
    return SignedVoucher;
}());
exports.SignedVoucher = SignedVoucher;
var PaymentInfo = /** @class */ (function () {
    function PaymentInfo() {
    }
    return PaymentInfo;
}());
exports.PaymentInfo = PaymentInfo;
var Merge = /** @class */ (function () {
    function Merge() {
    }
    return Merge;
}());
exports.Merge = Merge;
var ModVerifyParams = /** @class */ (function () {
    function ModVerifyParams() {
    }
    return ModVerifyParams;
}());
exports.ModVerifyParams = ModVerifyParams;
var VoucherSpec = /** @class */ (function () {
    function VoucherSpec() {
    }
    return VoucherSpec;
}());
exports.VoucherSpec = VoucherSpec;
var ChannelInfo = /** @class */ (function () {
    function ChannelInfo() {
    }
    return ChannelInfo;
}());
exports.ChannelInfo = ChannelInfo;
var PaychStatus = /** @class */ (function () {
    function PaychStatus() {
    }
    return PaychStatus;
}());
exports.PaychStatus = PaychStatus;
/**
 * VoucherCreateResult is the response to calling PaychVoucherCreate
 */
var VoucherCreateResult = /** @class */ (function () {
    function VoucherCreateResult() {
    }
    return VoucherCreateResult;
}());
exports.VoucherCreateResult = VoucherCreateResult;
//Mpool types
var MpoolConfig = /** @class */ (function () {
    function MpoolConfig() {
    }
    return MpoolConfig;
}());
exports.MpoolConfig = MpoolConfig;
var MpoolUpdate = /** @class */ (function () {
    function MpoolUpdate() {
    }
    return MpoolUpdate;
}());
exports.MpoolUpdate = MpoolUpdate;
//Miner info types
var MiningBaseInfo = /** @class */ (function () {
    function MiningBaseInfo() {
    }
    return MiningBaseInfo;
}());
exports.MiningBaseInfo = MiningBaseInfo;
var BlockTemplate = /** @class */ (function () {
    function BlockTemplate() {
    }
    return BlockTemplate;
}());
exports.BlockTemplate = BlockTemplate;
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    return Ticket;
}());
exports.Ticket = Ticket;
var BlockMsg = /** @class */ (function () {
    function BlockMsg() {
    }
    return BlockMsg;
}());
exports.BlockMsg = BlockMsg;
var ElectionProof = /** @class */ (function () {
    function ElectionProof() {
    }
    return ElectionProof;
}());
exports.ElectionProof = ElectionProof;
var PoStProof = /** @class */ (function () {
    function PoStProof() {
    }
    return PoStProof;
}());
exports.PoStProof = PoStProof;
var BeaconEntry = /** @class */ (function () {
    function BeaconEntry() {
    }
    return BeaconEntry;
}());
exports.BeaconEntry = BeaconEntry;
// Information about a proof necessary for PoSt verification.
var SectorInfo = /** @class */ (function () {
    function SectorInfo() {
    }
    return SectorInfo;
}());
exports.SectorInfo = SectorInfo;
var MsigVesting = /** @class */ (function () {
    function MsigVesting() {
    }
    return MsigVesting;
}());
exports.MsigVesting = MsigVesting;
var MessageMatch = /** @class */ (function () {
    function MessageMatch() {
    }
    return MessageMatch;
}());
exports.MessageMatch = MessageMatch;
var DataCIDSize = /** @class */ (function () {
    function DataCIDSize() {
    }
    return DataCIDSize;
}());
exports.DataCIDSize = DataCIDSize;
//# sourceMappingURL=Types.js.map