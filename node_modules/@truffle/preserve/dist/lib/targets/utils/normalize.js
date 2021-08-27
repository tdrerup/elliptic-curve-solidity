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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = void 0;
const Common = __importStar(require(".."));
const normalize = (target) => {
    const source = normalizeSource(target.source);
    return { source };
};
exports.normalize = normalize;
const normalizeSource = (source) => {
    if (Common.Sources.isContainer(source)) {
        return normalizeContainer(source);
    }
    return normalizeContent(source);
};
const normalizeContainer = (container) => {
    const entries = normalizeEntries(container.entries);
    return { entries };
};
const normalizeEntries = function (entries) {
    return __asyncGenerator(this, arguments, function* () {
        var e_1, _a;
        try {
            for (var entries_1 = __asyncValues(entries), entries_1_1; entries_1_1 = yield __await(entries_1.next()), !entries_1_1.done;) {
                const entry = entries_1_1.value;
                yield yield __await(normalizeEntry(entry));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) yield __await(_a.call(entries_1));
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
};
const normalizeEntry = (entry) => {
    const { path } = entry;
    const source = normalizeSource(entry.source);
    return { path, source };
};
const normalizeContent = (content) => {
    if (Common.Sources.Contents.isString(content)) {
        return normalizeString(content);
    }
    if (Common.Sources.Contents.isBytes(content)) {
        return normalizeBytes(content);
    }
    if (Common.Sources.Contents.isIterable(content)) {
        return normalizeIterable(content);
    }
    if (Common.Sources.Contents.isAsyncIterable(content)) {
        return normalizeAsyncIterable(content);
    }
};
const normalizeString = (content) => {
    return (function () {
        return __asyncGenerator(this, arguments, function* () {
            yield yield __await(Buffer.from(content));
        });
    })();
};
const normalizeBytes = (content) => {
    return (function () {
        return __asyncGenerator(this, arguments, function* () {
            yield yield __await(Buffer.from(content));
        });
    })();
};
const normalizeIterable = (content) => {
    return (function () {
        return __asyncGenerator(this, arguments, function* () {
            for (const bytes of content) {
                yield yield __await(Buffer.from(bytes));
            }
        });
    })();
};
const normalizeAsyncIterable = (content) => {
    return (function () {
        return __asyncGenerator(this, arguments, function* () {
            var e_2, _a;
            try {
                for (var content_1 = __asyncValues(content), content_1_1; content_1_1 = yield __await(content_1.next()), !content_1_1.done;) {
                    const bytes = content_1_1.value;
                    yield yield __await(Buffer.from(bytes));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (content_1_1 && !content_1_1.done && (_a = content_1.return)) yield __await(_a.call(content_1));
                }
                finally { if (e_2) throw e_2.error; }
            }
        });
    })();
};
//# sourceMappingURL=normalize.js.map