'use strict';

var json = require('../src/codecs/json.js');
var sha2Browser = require('../src/hashes/sha2-browser.js');
var block = require('../src/block.js');
require('../src/index.js');
var assert = require('assert');
var cid = require('../src/cid.js');
var bytes = require('../src/bytes.js');

const test = it;
const fixture = { hello: 'world' };
const link = cid.CID.parse('bafyreidykglsfhoixmivffc5uwhcgshx4j465xwqntbmu43nb2dzqwfvae');
const buff = bytes.fromString('sadf');
describe('block', () => {
  test('basic encode/decode roundtrip', async () => {
    const block$1 = await block.encode({
      value: fixture,
      codec: json,
      hasher: sha2Browser.sha256
    });
    const block2 = await block.decode({
      bytes: block$1.bytes,
      codec: json,
      hasher: sha2Browser.sha256
    });
    assert.deepStrictEqual(block$1.cid.equals(block2.cid), true);
    assert.deepStrictEqual(block$1.cid.equals(block2.cid), true);
    assert.deepStrictEqual(fixture, block2.value);
    const block3 = await block.create({
      bytes: block$1.bytes,
      cid: block$1.cid,
      codec: json,
      hasher: sha2Browser.sha256
    });
    assert.deepStrictEqual(block3.cid.equals(block2.cid), true);
  });
  test('createUnsafe', async () => {
    const block$1 = await block.encode({
      value: fixture,
      codec: json,
      hasher: sha2Browser.sha256
    });
    const block2 = block.createUnsafe({
      bytes: block$1.bytes,
      cid: block$1.cid,
      codec: json
    });
    assert.deepStrictEqual(block$1.cid.equals(block2.cid), true);
  });
  describe('reader', () => {
    const value = {
      link,
      nope: 'skip',
      arr: [link],
      obj: { arr: [{ obj: {} }] },
      bytes: Uint8Array.from('1234')
    };
    const block$1 = block.createUnsafe({
      value,
      codec: json,
      hasher: sha2Browser.sha256,
      cid: true,
      bytes: true
    });
    test('links', () => {
      const expected = [
        'link',
        'arr/0'
      ];
      for (const [path, cid] of block$1.links()) {
        assert.deepStrictEqual(path, expected.shift());
        assert.deepStrictEqual(cid.toString(), link.toString());
      }
    });
    test('tree', () => {
      const expected = [
        'link',
        'nope',
        'arr',
        'arr/0',
        'obj',
        'obj/arr',
        'obj/arr/0',
        'obj/arr/0/obj',
        'bytes'
      ];
      for (const path of block$1.tree()) {
        assert.deepStrictEqual(path, expected.shift());
      }
    });
    test('get', () => {
      let ret = block$1.get('link/test');
      assert.deepStrictEqual(ret.remaining, 'test');
      assert.deepStrictEqual(ret.value.toString(), link.toString());
      ret = block$1.get('nope');
      assert.deepStrictEqual(ret, { value: 'skip' });
    });
    test('null links/tree', () => {
      const block$1 = block.createUnsafe({
        value: null,
        codec: json,
        hasher: sha2Browser.sha256,
        bytes: true,
        cid: true
      });
      for (const x of block$1.tree()) {
        throw new Error(`tree should have nothing, got "${ x }"`);
      }
      for (const x of block$1.links()) {
        throw new Error(`links should have nothing, got "${ x }"`);
      }
    });
  });
  test('kitchen sink', () => {
    const sink = {
      one: {
        two: {
          arr: [
            true,
            false,
            null
          ],
          three: 3,
          buff,
          link
        }
      }
    };
    const block$1 = block.createUnsafe({
      value: sink,
      codec: json,
      bytes: true,
      cid: true
    });
    assert.deepStrictEqual(sink, block$1.value);
  });
  describe('errors', () => {
    test('constructor missing args', () => {
      let threw = true;
      try {
        threw = new block.Block({});
        threw = false;
      } catch (e) {
        if (e.message !== 'Missing required argument')
          throw e;
      }
      assert.deepStrictEqual(threw, true);
    });
    const errTest = async (method, arg, message) => {
      let threw = true;
      try {
        await method(arg);
        threw = false;
      } catch (e) {
        if (e.message !== message)
          throw e;
      }
      assert.deepStrictEqual(threw, true);
    };
    test('encode', async () => {
      await errTest(block.encode, {}, 'Missing required argument "value"');
      await errTest(block.encode, { value: true }, 'Missing required argument: codec or hasher');
    });
    test('decode', async () => {
      await errTest(block.decode, {}, 'Missing required argument "bytes"');
      await errTest(block.decode, { bytes: true }, 'Missing required argument: codec or hasher');
    });
    test('createUnsafe', async () => {
      await errTest(block.createUnsafe, {}, 'Missing required argument, must either provide "value" or "codec"');
    });
    test('create', async () => {
      await errTest(block.create, {}, 'Missing required argument "bytes"');
      await errTest(block.create, { bytes: true }, 'Missing required argument "hasher"');
      const block$1 = await block.encode({
        value: fixture,
        codec: json,
        hasher: sha2Browser.sha256
      });
      const block2 = await block.encode({
        value: {
          ...fixture,
          test: 'blah'
        },
        codec: json,
        hasher: sha2Browser.sha256
      });
      await errTest(block.create, {
        bytes: block$1.bytes,
        cid: block2.cid,
        codec: json,
        hasher: sha2Browser.sha256
      }, 'CID hash does not match bytes');
    });
    test('get', async () => {
      const block$1 = await block.encode({
        value: fixture,
        codec: json,
        hasher: sha2Browser.sha256
      });
      await errTest(path => block$1.get(path), '/asd/fs/dfasd/f', 'Object has no property at ["asd"]');
    });
  });
});
