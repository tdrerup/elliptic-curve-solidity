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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LotusClient = void 0;
var state_1 = require("./method-groups/state");
var chain_1 = require("./method-groups/chain");
var auth_1 = require("./method-groups/auth");
var client_1 = require("./method-groups/client");
var common_1 = require("./method-groups/common");
var miner_1 = require("./method-groups/miner");
var paych_1 = require("./method-groups/paych");
var mpool_1 = require("./method-groups/mpool");
var net_1 = require("./method-groups/net");
var msig_1 = require("./method-groups/msig");
var sync_1 = require("./method-groups/sync");
var gasEstimate_1 = require("./method-groups/gasEstimate");
var wallet_1 = require("./method-groups/wallet");
var LotusClient = /** @class */ (function () {
    function LotusClient(connector) {
        this.conn = connector;
        this.conn.connect();
        this.state = new state_1.JsonRpcStateMethodGroup(this.conn);
        this.chain = new chain_1.JsonRpcChainMethodGroup(this.conn);
        this.auth = new auth_1.JsonRpcAuthMethodGroup(this.conn);
        this.client = new client_1.JsonRpcClientMethodGroup(this.conn);
        this.common = new common_1.JsonRpcCommonMethodGroup(this.conn);
        this.miner = new miner_1.JsonRpcMinerMethodGroup(this.conn);
        this.paych = new paych_1.JsonRpcPaychMethodGroup(this.conn);
        this.mpool = new mpool_1.JsonRpcMPoolMethodGroup(this.conn);
        this.net = new net_1.JsonRpcNetMethodGroup(this.conn);
        this.msig = new msig_1.JsonRpcMsigMethodGroup(this.conn);
        this.sync = new sync_1.JsonRpcSyncMethodGroup(this.conn);
        this.gasEstimate = new gasEstimate_1.JsonRpcGasMethodGroup(this.conn);
        this.wallet = new wallet_1.JsonRpcWalletMethodGroup(this.conn);
    }
    LotusClient.prototype.release = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.conn.disconnect()];
            });
        });
    };
    return LotusClient;
}());
exports.LotusClient = LotusClient;
//# sourceMappingURL=LotusClient.js.map