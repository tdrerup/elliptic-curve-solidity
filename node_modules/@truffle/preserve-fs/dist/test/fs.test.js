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
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const tmp_promise_1 = __importDefault(require("tmp-promise"));
const Preserve = __importStar(require("@truffle/preserve"));
const fs_fixture_1 = require("./fs.fixture");
const preserve_1 = require("./utils/preserve");
const writeFile = (fullPath, content) => __awaiter(void 0, void 0, void 0, function* () {
    // ensure directory exists for file
    yield fs_extra_1.default.ensureDir(path_1.default.dirname(fullPath));
    yield fs_extra_1.default.promises.writeFile(fullPath, content);
});
describe("Recipe", () => {
    let workspace;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        workspace = yield tmp_promise_1.default.dir();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield workspace.cleanup();
    }));
    for (const { name, files, targeted, expected, events } of fs_fixture_1.tests) {
        describe(`test: ${name}`, () => {
            beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
                for (const file of files) {
                    const fullPath = path_1.default.join(workspace.path, name, file.path);
                    yield writeFile(fullPath, file.content);
                }
            }));
            it("returns the correct target", () => __awaiter(void 0, void 0, void 0, function* () {
                const fullPath = path_1.default.join(workspace.path, name, targeted);
                const result = yield preserve_1.preserve({ path: fullPath });
                const target = result["fs-target"];
                const stringified = yield Preserve.Targets.stringify(target);
                expect(stringified).toEqual(expected);
            }));
            it("emits the correct events", () => __awaiter(void 0, void 0, void 0, function* () {
                const fullPath = path_1.default.join(workspace.path, name, targeted);
                const emittedEvents = yield preserve_1.preserveWithEvents({ path: fullPath });
                expect(emittedEvents).toEqual(events);
            }));
        });
    }
});
//# sourceMappingURL=fs.test.js.map