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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = void 0;
const normalize_1 = require("./normalize");
const Common = __importStar(require(".."));
const stringify = (target) => __awaiter(void 0, void 0, void 0, function* () {
    const normalizedTarget = normalize_1.normalize(target);
    const source = yield stringifySource(normalizedTarget.source);
    return { source };
});
exports.stringify = stringify;
const stringifySource = (source) => __awaiter(void 0, void 0, void 0, function* () {
    if (Common.Sources.isContainer(source)) {
        return yield stringifyContainer(source);
    }
    return yield stringifyContent(source);
});
const stringifyContainer = (container) => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    const entries = [];
    try {
        for (var _b = __asyncValues(container.entries), _c; _c = yield _b.next(), !_c.done;) {
            const entry = _c.value;
            entries.push(yield stringifyEntry(entry));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return { entries };
});
const stringifyEntry = (entry) => __awaiter(void 0, void 0, void 0, function* () {
    const { path } = entry;
    const source = yield stringifySource(entry.source);
    return { path, source };
});
const stringifyContent = (content) => { var content_1, content_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var e_2, _a;
    const buffers = [];
    try {
        for (content_1 = __asyncValues(content); content_1_1 = yield content_1.next(), !content_1_1.done;) {
            const piece = content_1_1.value;
            buffers.push(piece);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (content_1_1 && !content_1_1.done && (_a = content_1.return)) yield _a.call(content_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return Buffer.concat(buffers).toString();
}); };
//# sourceMappingURL=stringify.js.map