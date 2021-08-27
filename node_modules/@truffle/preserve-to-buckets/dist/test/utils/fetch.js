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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCollectionToSource = exports.convertResultsToTarget = exports.fetch = void 0;
const iter_tools_1 = require("iter-tools");
const fetch = ({ cid, ipfs }) => __awaiter(void 0, void 0, void 0, function* () {
    const results = ipfs.get(cid);
    return yield exports.convertResultsToTarget(results);
});
exports.fetch = fetch;
const convertResultsToTarget = (results) => { var results_1, results_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    const root = new Map([]);
    try {
        for (results_1 = __asyncValues(results); results_1_1 = yield results_1.next(), !results_1_1.done;) {
            const result = results_1_1.value;
            // skip directories
            if (!result.content) {
                continue;
            }
            // normalize path to start with "./"
            const path = [".", ...result.path.split("/").slice(1)];
            const concatenatedContent = yield iter_tools_1.asyncToArray(iter_tools_1.asyncConcat(result.content));
            const stringifiedContent = concatenatedContent.toString();
            updateCollection(root, path, stringifiedContent);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (results_1_1 && !results_1_1.done && (_a = results_1.return)) yield _a.call(results_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    const source = yield exports.convertCollectionToSource(root.get("."));
    return { source };
}); };
exports.convertResultsToTarget = convertResultsToTarget;
const updateCollection = (collection, path, content) => {
    const [childPath, ...remainingPath] = path;
    // if we're at a leaf of the tree we update the collection
    if (remainingPath.length === 0) {
        collection.set(childPath, content);
        return;
    }
    // otherwise, make sure we have the first part of the path in our collection
    let child;
    const entry = collection.get(childPath);
    if (entry === undefined || typeof entry === "string") {
        // for string case, something went wrong:
        // we tried to path through some content
        child = new Map([]);
        collection.set(childPath, child);
    }
    else {
        child = entry;
    }
    // then recurse
    updateCollection(child, remainingPath, content);
};
const convertCollectionToSource = (collectionNode) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof collectionNode === "string") {
        return collectionNode;
    }
    return {
        entries: yield Promise.all(Array.from(collectionNode.entries()).map(([path, result]) => __awaiter(void 0, void 0, void 0, function* () {
            return ({
                path,
                source: yield exports.convertCollectionToSource(result)
            });
        })))
    };
});
exports.convertCollectionToSource = convertCollectionToSource;
//# sourceMappingURL=fetch.js.map