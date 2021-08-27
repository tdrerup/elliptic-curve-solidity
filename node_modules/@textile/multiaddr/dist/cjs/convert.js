"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBytes = exports.toString = void 0;
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const threads_id_1 = require("@textile/threads-id");
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const convert_1 = __importDefault(require("multiaddr/src/convert"));
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const varint_1 = __importDefault(require("varint"));
const protocols_1 = require("./protocols");
function thread2bytes(str) {
    const buf = threads_id_1.ThreadID.fromString(str).toBytes();
    const size = varint_1.default.encode(buf.length);
    return Uint8Array.from([...size, ...buf]);
}
function bytes2thread(buf) {
    const size = varint_1.default.decode(buf);
    buf = buf.slice(varint_1.default.decode.bytes);
    if (buf.length !== size) {
        throw new Error('inconsistent lengths');
    }
    return threads_id_1.ThreadID.fromBytes(buf).toString();
}
function toString(prt, buf) {
    const proto = protocols_1.protocols(prt);
    switch (proto.code) {
        case 406:
            return bytes2thread(buf);
        default:
            return convert_1.default.toString(prt, buf);
    }
}
exports.toString = toString;
function toBytes(prt, str) {
    const proto = protocols_1.protocols(prt);
    switch (proto.code) {
        case 406:
            return thread2bytes(str);
        default:
            return convert_1.default.toBytes(prt, str);
    }
}
exports.toBytes = toBytes;
//# sourceMappingURL=convert.js.map