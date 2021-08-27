"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const ipfs_http_client_1 = __importDefault(require("ipfs-http-client"));
const Preserve = __importStar(require("@truffle/preserve"));
const ipfs_fixture_1 = require("./ipfs.fixture");
const fetch_1 = require("./utils/fetch");
const preserve_1 = require("./utils/preserve");
const ganache_1 = __importDefault(require("ganache"));
jest.setTimeout(20000);
describe("preserve", () => {
    // Default IPFS nodes exposed by Ganache
    const address = "http://localhost:5001/api/v0";
    let ganacheServer;
    let ipfsClient;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        ganacheServer = ganache_1.default.server({ flavor: "filecoin" });
        yield ganacheServer.provider.blockchain.waitForReady();
        yield ganacheServer.listen(7777);
        ipfsClient = ipfs_http_client_1.default({ url: address });
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (ganacheServer === null || ganacheServer === void 0 ? void 0 : ganacheServer.close());
    }));
    for (const { name, target, events } of ipfs_fixture_1.tests) {
        // separate describe block for each test case
        describe(`test: ${name}`, () => {
            it("saves correctly to IPFS", () => __awaiter(void 0, void 0, void 0, function* () {
                const cid = yield preserve_1.preserveToIpfs(target, address);
                const retrieved = yield fetch_1.fetch({ cid, ipfs: ipfsClient });
                expect(yield Preserve.Targets.stringify(retrieved)).toEqual(yield Preserve.Targets.stringify(target));
            }));
            it("emits the correct events", () => __awaiter(void 0, void 0, void 0, function* () {
                const emittedEvents = yield preserve_1.preserveToIpfsWithEvents(target, address);
                expect(emittedEvents).toMatchObject(events);
            }));
        });
    }
});
//# sourceMappingURL=ipfs.test.js.map