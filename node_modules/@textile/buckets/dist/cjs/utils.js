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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPathFlat = exports.listPathRecursive = exports.bytesToArray = void 0;
const api_1 = require("./api");
/**
 * bytesToArray converts a buffer into <4mb chunks for use with grpc API
 * @param chunk an input Buffer or Uint8Array
 */
function bytesToArray(chunk, size = api_1.CHUNK_SIZE * api_1.CHUNK_SIZE * 3) {
    const result = [];
    const len = chunk.length;
    let i = 0;
    while (i < len) {
        result.push(chunk.slice(i, (i += size)));
    }
    return result;
}
exports.bytesToArray = bytesToArray;
/**
 * listPathRecursive returns a nested object of all paths (and info) in a bucket
 */
function listPathRecursive(grpc, bucketKey, path, depth, currentDepth = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const rootPath = path === '' || path === '.' || path === '/' ? '' : `${path}/`;
        const tree = yield api_1.bucketsListPath(grpc, bucketKey, path);
        if (tree.item && (currentDepth + 1 <= depth || depth === -1)) {
            for (let i = 0; i < tree.item.items.length; i++) {
                const obj = tree.item.items[i];
                if (!obj.isDir)
                    continue;
                const dirPath = `${rootPath}${obj.name}`;
                const { item } = yield listPathRecursive(grpc, bucketKey, dirPath, depth, currentDepth + 1);
                if (item) {
                    tree.item.items[i] = item;
                }
            }
        }
        return tree;
    });
}
exports.listPathRecursive = listPathRecursive;
function treeToPaths(tree, path, dirs = true, depth = 5, currentDepth = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = [];
        for (const item of tree) {
            const newPath = path === '' ? `${item.name}` : `${path}/${item.name}`;
            if (dirs || !item.isDir)
                result.push(newPath);
            if (item.isDir && (currentDepth < depth || depth === -1)) {
                const downtree = yield treeToPaths(item.items, newPath, dirs, depth, currentDepth + 1);
                result.push(...downtree);
            }
        }
        return result;
    });
}
/**
 * listPathFlat returns a string array of all paths in a bucket
 */
function listPathFlat(grpc, bucketKey, path, dirs, depth) {
    return __awaiter(this, void 0, void 0, function* () {
        const tree = yield listPathRecursive(grpc, bucketKey, path, depth);
        if (!tree.item)
            return [];
        return treeToPaths(tree.item.items, path, dirs);
    });
}
exports.listPathFlat = listPathFlat;
//# sourceMappingURL=utils.js.map