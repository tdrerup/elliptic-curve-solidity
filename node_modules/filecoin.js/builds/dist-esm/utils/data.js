import btoa from 'btoa-lite';
import BN from 'bn.js';
export var toBase64 = function (data) {
    if (typeof data !== 'string') {
        data = btoa(new Uint8Array(data)
            .reduce(function (data, byte) { return data + String.fromCharCode(byte); }, ''));
    }
    else {
        data = btoa(data);
    }
    return data;
};
export var leftPadString = function (stringToPad, padChar, length) {
    var repeatedPadChar = '';
    for (var i = 0; i < length; i++) {
        repeatedPadChar += padChar;
    }
    return ((repeatedPadChar + stringToPad).slice(-length));
};
export var serializeBigNum = function (gasprice) {
    if (gasprice == "0") {
        return Buffer.from("");
    }
    var gaspriceBigInt = new BN(gasprice, 10);
    var gaspriceBuffer = gaspriceBigInt.toArrayLike(Buffer, "be", gaspriceBigInt.byteLength());
    return Buffer.concat([Buffer.from("00", "hex"), gaspriceBuffer]);
};
//# sourceMappingURL=data.js.map