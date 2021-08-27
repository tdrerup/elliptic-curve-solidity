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
exports.JsonRpcNetMethodGroup = void 0;
var JsonRpcNetMethodGroup = /** @class */ (function () {
    function JsonRpcNetMethodGroup(conn) {
        this.conn = conn;
    }
    JsonRpcNetMethodGroup.prototype.connectedness = function (peerId) {
        return __awaiter(this, void 0, void 0, function () {
            var connectedness;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.NetConnectedness', params: [peerId] })];
                    case 1:
                        connectedness = _a.sent();
                        return [2 /*return*/, connectedness];
                }
            });
        });
    };
    JsonRpcNetMethodGroup.prototype.peers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var peers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.NetPeers' })];
                    case 1:
                        peers = _a.sent();
                        return [2 /*return*/, peers];
                }
            });
        });
    };
    JsonRpcNetMethodGroup.prototype.connect = function (addrInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.NetConnect', params: [addrInfo] })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    JsonRpcNetMethodGroup.prototype.addrsListen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var addr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.NetAddrsListen' })];
                    case 1:
                        addr = _a.sent();
                        return [2 /*return*/, addr];
                }
            });
        });
    };
    JsonRpcNetMethodGroup.prototype.disconnect = function (peerID) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.NetDisconnect', params: [peerID] })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JsonRpcNetMethodGroup.prototype.findPeer = function (peerID) {
        return __awaiter(this, void 0, void 0, function () {
            var peer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.NetFindPeer', params: [peerID] })];
                    case 1:
                        peer = _a.sent();
                        return [2 /*return*/, peer];
                }
            });
        });
    };
    JsonRpcNetMethodGroup.prototype.pubsubScores = function () {
        return __awaiter(this, void 0, void 0, function () {
            var score;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.NetPubsubScores' })];
                    case 1:
                        score = _a.sent();
                        return [2 /*return*/, score];
                }
            });
        });
    };
    JsonRpcNetMethodGroup.prototype.autoNatStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var natInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.conn.request({ method: 'Filecoin.NetAutoNatStatus' })];
                    case 1:
                        natInfo = _a.sent();
                        return [2 /*return*/, natInfo];
                }
            });
        });
    };
    return JsonRpcNetMethodGroup;
}());
exports.JsonRpcNetMethodGroup = JsonRpcNetMethodGroup;
//# sourceMappingURL=net.js.map