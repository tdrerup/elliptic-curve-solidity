"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrievalDealRecords = exports.storageDealRecords = exports.cidInfo = exports.cidSummary = exports.balance = exports.addresses = void 0;
const user_pb_1 = require("@textile/grpc-powergate-client/dist/powergate/user/v1/user_pb");
const user_pb_service_1 = require("@textile/grpc-powergate-client/dist/powergate/user/v1/user_pb_service");
const loglevel_1 = __importDefault(require("loglevel"));
const types_1 = require("../types");
const logger = loglevel_1.default.getLogger('filecoin-api');
function fromPbAddressInfo(item) {
    return Object.assign(Object.assign({}, item), { balance: BigInt(item.balance) });
}
function fromPbIpfsConfig(item) {
    return Object.assign({}, item);
}
function fromPbHotConfig(item) {
    return Object.assign(Object.assign({}, item), { ipfs: item.ipfs ? fromPbIpfsConfig(item.ipfs) : undefined });
}
function fromPbFilRenew(item) {
    return Object.assign({}, item);
}
function fromPbFilConfig(item) {
    return Object.assign(Object.assign({}, item), { countryCodes: item.countryCodesList, excludedMiners: item.excludedMinersList, trustedMiners: item.trustedMinersList, renew: item.renew ? fromPbFilRenew(item.renew) : undefined });
}
function fromPbColdConfig(item) {
    return Object.assign(Object.assign({}, item), { filecoin: item.filecoin ? fromPbFilConfig(item.filecoin) : undefined });
}
function fromPbStorageConfig(item) {
    return Object.assign(Object.assign({}, item), { cold: item.cold ? fromPbColdConfig(item.cold) : undefined, hot: item.hot ? fromPbHotConfig(item.hot) : undefined });
}
function fromPbIpfsHotInfo(item) {
    return Object.assign(Object.assign({}, item), { 
        // TODO: standardize time units from server.
        created: new Date(item.created / 1000000) });
}
function fromPbHotInfo(item) {
    return Object.assign(Object.assign({}, item), { ipfs: item.ipfs ? fromPbIpfsHotInfo(item.ipfs) : undefined });
}
function fromPbFilStorage(item) {
    return Object.assign({}, item);
}
function fromPbFilInfo(item) {
    return Object.assign(Object.assign({}, item), { proposals: item.proposalsList.map(fromPbFilStorage) });
}
function fromPbColdInfo(item) {
    return Object.assign(Object.assign({}, item), { filecoin: item.filecoin ? fromPbFilInfo(item.filecoin) : undefined });
}
function fromPbStorageInfo(item) {
    return Object.assign(Object.assign({}, item), { 
        // TODO: standardize time units from server.
        created: new Date(item.created / 1000000), cold: item.cold ? fromPbColdInfo(item.cold) : undefined, hot: item.hot ? fromPbHotInfo(item.hot) : undefined });
}
function fromPbDealInfo(item) {
    return Object.assign({}, item);
}
function fromPbDealError(item) {
    return Object.assign({}, item);
}
function fromPbJobStatus(item) {
    switch (item) {
        case user_pb_1.JobStatus.JOB_STATUS_CANCELED:
            return types_1.JobStatus.Canceled;
        case user_pb_1.JobStatus.JOB_STATUS_EXECUTING:
            return types_1.JobStatus.Executing;
        case user_pb_1.JobStatus.JOB_STATUS_FAILED:
            return types_1.JobStatus.Failed;
        case user_pb_1.JobStatus.JOB_STATUS_QUEUED:
            return types_1.JobStatus.Queued;
        case user_pb_1.JobStatus.JOB_STATUS_SUCCESS:
            return types_1.JobStatus.Success;
        case user_pb_1.JobStatus.JOB_STATUS_UNSPECIFIED:
            return types_1.JobStatus.Unspecified;
    }
}
function fromPbStorageJob(item) {
    return Object.assign(Object.assign({}, item), { 
        // TODO: standardize time units from server.
        createdAt: new Date(item.createdAt * 1000), status: fromPbJobStatus(item.status), dealInfo: item.dealInfoList.map(fromPbDealInfo), dealErrors: item.dealErrorsList.map(fromPbDealError) });
}
function fromPbCidSummary(item) {
    return Object.assign(Object.assign({}, item), { queuedJobs: item.queuedJobsList, executingJob: item.executingJob != '' ? item.executingJob : undefined });
}
function fromPbCidInfo(item) {
    return Object.assign(Object.assign({}, item), { latestStorageConfig: item.latestPushedStorageConfig
            ? fromPbStorageConfig(item.latestPushedStorageConfig)
            : undefined, currentStorageInfo: item.currentStorageInfo
            ? fromPbStorageInfo(item.currentStorageInfo)
            : undefined, queuedStorageJobs: item.queuedStorageJobsList.map(fromPbStorageJob), executingStorageJob: item.executingStorageJob
            ? fromPbStorageJob(item.executingStorageJob)
            : undefined });
}
function fromPbStorageDealRecord(item) {
    return Object.assign(Object.assign({}, item), { 
        // TODO: standardize time units from server.
        time: new Date(item.time * 1000), dealInfo: item.dealInfo ? fromPbDealInfo(item.dealInfo) : undefined });
}
function fromPbRetrievalDealInfo(item) {
    return Object.assign({}, item);
}
function fromPbRetrievalDealRecord(item) {
    return Object.assign(Object.assign({}, item), { 
        // TODO: standardize time units from server.
        time: new Date(item.time * 1000), dealInfo: item.dealInfo
            ? fromPbRetrievalDealInfo(item.dealInfo)
            : undefined });
}
/**
 * @internal
 */
function addresses(api, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        logger.debug('addresses request');
        const res = yield api.unary(user_pb_service_1.UserService.Addresses, new user_pb_1.AddressesRequest(), ctx);
        return res.toObject().addressesList.map(fromPbAddressInfo);
    });
}
exports.addresses = addresses;
/**
 * @internal
 */
function balance(api, address, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = new user_pb_1.BalanceRequest();
        req.setAddress(address);
        const res = yield api.unary(user_pb_service_1.UserService.Balance, req, ctx);
        return BigInt(res.getBalance());
    });
}
exports.balance = balance;
/**
 * @internal
 */
function cidSummary(api, ctx, ...cids) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = new user_pb_1.CidSummaryRequest();
        req.setCidsList(cids);
        const res = yield api.unary(user_pb_service_1.UserService.CidSummary, req, ctx);
        return res.toObject().cidSummaryList.map(fromPbCidSummary);
    });
}
exports.cidSummary = cidSummary;
/**
 * @internal
 */
function cidInfo(api, ctx, cid) {
    return __awaiter(this, void 0, void 0, function* () {
        const req = new user_pb_1.CidInfoRequest();
        if (cid) {
            req.setCid(cid);
        }
        const res = yield api.unary(user_pb_service_1.UserService.CidInfo, req, ctx);
        const info = res.toObject().cidInfo;
        if (info) {
            return fromPbCidInfo(info);
        }
        else {
            throw new Error("didn't receive cid info in response");
        }
    });
}
exports.cidInfo = cidInfo;
/**
 * @internal
 */
function storageDealRecords(api, config, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const c = new user_pb_1.DealRecordsConfig();
        c.setAscending(config.ascending);
        c.setDataCidsList(config.dataCids);
        c.setFromAddrsList(config.fromAddrs);
        c.setIncludeFinal(config.includeFinal);
        c.setIncludePending(config.includePending);
        const req = new user_pb_1.StorageDealRecordsRequest();
        req.setConfig(c);
        const res = yield api.unary(user_pb_service_1.UserService.StorageDealRecords, req, ctx);
        return res.toObject().recordsList.map(fromPbStorageDealRecord);
    });
}
exports.storageDealRecords = storageDealRecords;
/**
 * @internal
 */
function retrievalDealRecords(api, config, ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const c = new user_pb_1.DealRecordsConfig();
        c.setAscending(config.ascending);
        c.setDataCidsList(config.dataCids);
        c.setFromAddrsList(config.fromAddrs);
        c.setIncludeFinal(config.includeFinal);
        c.setIncludePending(config.includePending);
        const req = new user_pb_1.RetrievalDealRecordsRequest();
        req.setConfig(c);
        const res = yield api.unary(user_pb_service_1.UserService.RetrievalDealRecords, req, ctx);
        return res.toObject().recordsList.map(fromPbRetrievalDealRecord);
    });
}
exports.retrievalDealRecords = retrievalDealRecords;
//# sourceMappingURL=index.js.map