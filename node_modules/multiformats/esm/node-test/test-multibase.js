import * as bytes from '../src/bytes.js';
import assert from 'assert';
import * as b2 from '../src/bases/base2.js';
import * as b8 from '../src/bases/base8.js';
import * as b10 from '../src/bases/base10.js';
import * as b16 from '../src/bases/base16.js';
import * as b32 from '../src/bases/base32.js';
import * as b36 from '../src/bases/base36.js';
import * as b58 from '../src/bases/base58.js';
import * as b64 from '../src/bases/base64.js';
import testThrow from './fixtures/test-throw.js';
const {base16, base32, base58btc, base64} = {
  ...b16,
  ...b32,
  ...b58,
  ...b64
};
const same = assert.deepStrictEqual;
const test = it;
describe('multibase', () => {
  for (const base of [
      base16,
      base32,
      base58btc,
      base64
    ]) {
    describe(`basics ${ base.name }`, () => {
      test('encode/decode', () => {
        const string = base.encode(bytes.fromString('test'));
        same(string[0], base.prefix);
        const buffer = base.decode(string);
        same(buffer, bytes.fromString('test'));
      });
      test('pristine backing buffer', () => {
        const string = base.encode(bytes.fromString('test'));
        const buffer = base.decode(string);
        const expected = bytes.fromString('test');
        same(new Uint8Array(buffer).join(','), new Uint8Array(expected.buffer).join(','));
      });
      test('empty', () => {
        const str = base.encode(bytes.fromString(''));
        same(str, base.prefix);
        same(base.decode(str), bytes.fromString(''));
      });
      test('bad chars', () => {
        const str = base.prefix + '#$%^&*&^%$#';
        const msg = `Non-${ base.name } character`;
        testThrow(() => base.decode(str), msg);
      });
    });
  }
  test('encode string failure', () => {
    const msg = 'Unknown type, must be binary type';
    testThrow(() => base32.encode('asdf'), msg);
    testThrow(() => base32.encoder.encode('asdf'), msg);
  });
  test('decode int failure', () => {
    const msg = 'Can only multibase decode strings';
    testThrow(() => base32.decode(1), msg);
    testThrow(() => base32.decoder.decode(1), msg);
  });
  const buff = bytes.fromString('test');
  const nonPrintableBuff = Uint8Array.from([
    239,
    250,
    254
  ]);
  const baseTest = bases => {
    for (const base of Object.values(bases)) {
      if (base && base.name) {
        test(`encode/decode ${ base.name }`, () => {
          const encoded = base.encode(buff);
          const decoded = base.decode(encoded);
          same(decoded, buff);
          same(encoded, base.encoder.encode(buff));
          same(buff, base.decoder.decode(encoded));
        });
        test(`encode/decode ${ base.name } with non-printable values`, () => {
          const encoded = base.encode(nonPrintableBuff);
          const decoded = base.decode(encoded);
          same(decoded, nonPrintableBuff);
          same(encoded, base.encoder.encode(nonPrintableBuff));
          same(nonPrintableBuff, base.decoder.decode(encoded));
        });
      }
    }
  };
  describe('base2', () => {
    baseTest(b2);
  });
  describe('base8', () => {
    baseTest(b8);
  });
  describe('base10', () => {
    baseTest(b10);
  });
  describe('base16', () => {
    baseTest(b16);
  });
  describe('base32', () => {
    baseTest(b32);
  });
  describe('base36', () => {
    baseTest(b36);
  });
  describe('base58', () => {
    baseTest(b58);
  });
  describe('base64', () => {
    baseTest(b64);
  });
  test('multibase mismatch', () => {
    const b64 = base64.encode(bytes.fromString('test'));
    const msg = `Unable to decode multibase string "${ b64 }", base32 decoder only supports inputs prefixed with ${ base32.prefix }`;
    testThrow(() => base32.decode(b64), msg);
  });
  test('decoder composition', () => {
    const base = base32.decoder.or(base58btc.decoder);
    const b32 = base32.encode(bytes.fromString('test'));
    same(base.decode(b32), bytes.fromString('test'));
    const b58 = base58btc.encode(bytes.fromString('test'));
    same(base.decode(b58), bytes.fromString('test'));
    const b64 = base64.encode(bytes.fromString('test'));
    const msg = `Unable to decode multibase string "${ b64 }", only inputs prefixed with ${ base32.prefix },${ base58btc.prefix } are supported`;
    testThrow(() => base.decode(b64), msg);
    const baseExt = base.or(base64);
    same(baseExt.decode(b64), bytes.fromString('test'));
    testThrow(() => base.decode(b64), msg);
  });
  test('truncated data', () => {
    const b64 = base64.encode(Uint8Array.from([
      245,
      250
    ]));
    testThrow(() => base64.decode(b64.substring(0, b64.length - 1)), 'Unexpected end of data');
  });
});