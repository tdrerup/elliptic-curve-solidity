"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeBigNum = exports.leftPadString = exports.toBase64 = void 0;
var btoa_lite_1 = __importDefault(require("btoa-lite"));
var bn_js_1 = __importDefault(require("bn.js"));
exports.toBase64 = function (data) {
    if (typeof data !== 'string') {
        data = btoa_lite_1.default(new Uint8Array(data)
            .reduce(function (data, byte) { return data + String.fromCharCode(byte); }, ''));
    }
    else {
        data = btoa_lite_1.default(data);
    }
    return data;
};
exports.leftPadString = function (stringToPad, padChar, length) {
    var repeatedPadChar = '';
    for (var i = 0; i < length; i++) {
        repeatedPadChar += padChar;
    }
    return ((repeatedPadChar + stringToPad).slice(-length));
};
exports.serializeBigNum = function (gasprice) {
    if (gasprice == "0") {
        return Buffer.from("");
    }
    var gaspriceBigInt = new bn_js_1.default(gasprice, 10);
    var gaspriceBuffer = gaspriceBigInt.toArrayLike(Buffer, "be", gaspriceBigInt.byteLength());
    return Buffer.concat([Buffer.from("00", "hex"), gaspriceBuffer]);
};
//# sourceMappingURL=data.js.map