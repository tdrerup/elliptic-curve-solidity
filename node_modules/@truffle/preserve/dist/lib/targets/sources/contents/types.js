"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAsyncIterable = exports.isIterable = exports.isBytes = exports.isString = void 0;
const isString = (content) => typeof content === "string";
exports.isString = isString;
const isBytes = (content) => Buffer.isBuffer(content) ||
    content instanceof ArrayBuffer ||
    ArrayBuffer.isView(content);
exports.isBytes = isBytes;
const isIterable = (content) => content && typeof content === "object" && Symbol.iterator in content;
exports.isIterable = isIterable;
const isAsyncIterable = (content) => content && typeof content === "object" && Symbol.asyncIterator in content;
exports.isAsyncIterable = isAsyncIterable;
//# sourceMappingURL=types.js.map