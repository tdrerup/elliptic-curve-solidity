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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBytes = exports.fromString = exports.bytesToString = exports.bytesToTuples = exports.tuplesToStringTuples = void 0;
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const varint_1 = __importDefault(require("varint"));
const convert = __importStar(require("./convert"));
const protocols_1 = require("./protocols");
// string -> [[str name, str addr]... ]
function stringToStringTuples(str) {
    const tuples = [];
    const parts = str.split('/').slice(1); // skip first empty elem
    if (parts.length === 1 && parts[0] === '') {
        return [];
    }
    for (let p = 0; p < parts.length; p++) {
        const part = parts[p];
        const proto = protocols_1.protocols(part);
        if (proto.size === 0) {
            tuples.push([part]);
            continue;
        }
        p++; // advance addr part
        if (p >= parts.length) {
            throw ParseError('invalid address: ' + str);
        }
        // if it's a path proto, take the rest
        if (proto.path) {
            tuples.push([
                part,
                // TODO: should we need to check each path part to see if it's a proto?
                // This would allow for other protocols to be added after a unix path,
                // however it would have issues if the path had a protocol name in the path
                cleanPath(parts.slice(p).join('/')),
            ]);
            break;
        }
        tuples.push([part, parts[p]]);
    }
    return tuples;
}
// [[str name, str addr]... ] -> string
function stringTuplesToString(tuples) {
    const parts = [];
    tuples.map((tup) => {
        const proto = protoFromTuple(tup);
        parts.push(proto.name);
        if (tup.length > 1) {
            parts.push(tup[1]);
        }
    });
    return cleanPath(parts.join('/'));
}
// [[str name, str addr]... ] -> [[int code, Uint8Array]... ]
function stringTuplesToTuples(tuples) {
    return tuples.map((tup) => {
        if (!Array.isArray(tup)) {
            tup = [tup];
        }
        const proto = protoFromTuple(tup);
        if (tup.length > 1) {
            return [proto.code, convert.toBytes(proto.code, tup[1])];
        }
        return [proto.code];
    });
}
// [[int code, Uint8Array]... ] -> [[str name, str addr]... ]
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function tuplesToStringTuples(tuples) {
    return tuples.map((tup) => {
        const proto = protoFromTuple(tup);
        if (tup.length > 1) {
            return [proto.code, convert.toString(proto.code, tup[1])];
        }
        return [proto.code];
    });
}
exports.tuplesToStringTuples = tuplesToStringTuples;
// [[int code, Uint8Array ]... ] -> Uint8Array
function tuplesToBytes(tuples) {
    return fromBytes(new Uint8Array(tuples.flatMap((tup) => {
        const proto = protoFromTuple(tup);
        let buf = Uint8Array.from(varint_1.default.encode(proto.code));
        if (tup.length > 1) {
            buf = new Uint8Array([...buf, ...tup[1]]); // add address bytes
        }
        return [...buf];
    })));
}
function sizeForAddr(p, addr) {
    if (p.size > 0) {
        return p.size / 8;
    }
    else if (p.size === 0) {
        return 0;
    }
    else {
        const size = varint_1.default.decode(addr);
        return size + varint_1.default.decode.bytes;
    }
}
// Uint8Array -> [[int code, Uint8Array ]... ]
function bytesToTuples(buf) {
    const tuples = [];
    let i = 0;
    while (i < buf.length) {
        const code = varint_1.default.decode(buf, i);
        const n = varint_1.default.decode.bytes;
        const p = protocols_1.protocols(code);
        const size = sizeForAddr(p, buf.slice(i + n));
        if (size === 0) {
            tuples.push([code]);
            i += n;
            continue;
        }
        const addr = buf.slice(i + n, i + n + size);
        i += size + n;
        if (i > buf.length) {
            // did not end _exactly_ at buf.length
            throw ParseError('Invalid address Uint8Array');
        }
        // ok, tuple seems good.
        tuples.push([code, addr]);
    }
    return tuples;
}
exports.bytesToTuples = bytesToTuples;
// Uint8Array -> String
function bytesToString(buf) {
    const a = bytesToTuples(buf);
    const b = tuplesToStringTuples(a);
    return stringTuplesToString(b);
}
exports.bytesToString = bytesToString;
// String -> Uint8Array
function stringToBytes(str) {
    str = cleanPath(str);
    const a = stringToStringTuples(str);
    const b = stringTuplesToTuples(a);
    return tuplesToBytes(b);
}
// String -> Uint8Array
function fromString(str) {
    return stringToBytes(str);
}
exports.fromString = fromString;
// Uint8Array -> Uint8Array
function fromBytes(buf) {
    const err = validateBytes(buf);
    if (err)
        throw err;
    return Uint8Array.from(buf); // copy
}
exports.fromBytes = fromBytes;
function validateBytes(buf) {
    try {
        bytesToTuples(buf); // try to parse. will throw if breaks
    }
    catch (err) {
        return err;
    }
}
function cleanPath(str) {
    return ('/' +
        str
            .trim()
            .split('/')
            .filter((a) => a)
            .join('/'));
}
function ParseError(str) {
    return new Error('Error parsing address: ' + str);
}
function protoFromTuple(tup) {
    const proto = protocols_1.protocols(tup[0]);
    return proto;
}
//# sourceMappingURL=codec.js.map