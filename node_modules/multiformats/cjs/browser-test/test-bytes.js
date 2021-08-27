'use strict';

var bytes = require('../src/bytes.js');
var assert = require('assert');

const test = it;
const same = assert.deepStrictEqual;
describe('bytes', () => {
  test('isBinary', () => {
    same(bytes.isBinary(new ArrayBuffer()), true);
    same(bytes.isBinary(new DataView(new ArrayBuffer())), true);
  });
  test('coerce', () => {
    const fixture = bytes.fromString('test');
    same(bytes.coerce(fixture.buffer), fixture);
    same(bytes.coerce(new DataView(fixture.buffer)), fixture);
  });
  test('equals', () => {
    const fixture = bytes.fromString('test');
    same(bytes.equals(fixture, bytes.fromString('asdfadf')), false);
  });
  test('toString()', () => {
    const fixture = 'hello world';
    same(bytes.toString(bytes.fromString(fixture)), fixture);
  });
});
