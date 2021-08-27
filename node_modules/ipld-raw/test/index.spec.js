'use strict'
/* eslint-env mocha */
const { expect } = require('aegir/utils/chai')

const ipldRaw = require('../src/index')
const resolver = ipldRaw.resolver
const multihash = require('multihashing-async').multihash
const multicodec = require('multicodec')
const uint8ArrayFromString = require('uint8arrays/from-string')

describe('raw codec', () => {
  const testData = uint8ArrayFromString('test data')
  const testBlob = ipldRaw.util.serialize(testData)

  it('multicodec is raw', () => {
    expect(ipldRaw.codec).to.equal(multicodec.RAW)
  })

  it('defaultHashAlg is sha2-256', () => {
    expect(ipldRaw.defaultHashAlg).to.equal(multicodec.SHA2_256)
  })

  it('resolver.resolve', () => {
    const result = resolver.resolve(testBlob, '/')
    expect(result.value.toString('hex')).to.equal(testData.toString('hex'))
    expect(result.remainderPath).to.equal('')
  })

  it('resolver.resolve throws on non-root path', () => {
    expect(() => resolver.resolve(testBlob, 'a/b/c/d')).to.throw(
      'Only the root path / may be resolved'
    )
  })

  it('resolver.tree', () => {
    const paths = resolver.tree(testBlob)
    expect(paths.value).to.be.undefined()
    expect(paths.done).to.be.true()
  })
})

describe('raw util', () => {
  const rawData = uint8ArrayFromString('some raw data')

  it('serialize is noop', () => {
    const result = ipldRaw.util.serialize(rawData)
    expect(result).to.equal(rawData)
  })

  it('deserialize is noop', () => {
    const result = ipldRaw.util.deserialize(rawData)
    expect(result).to.equal(rawData)
  })

  it('create cid', async () => {
    const cid = await ipldRaw.util.cid(rawData)
    expect(cid.version).to.equal(1)
    expect(cid.codec).to.equal('raw')
    expect(cid.multihash).to.exist()
    const mh = multihash.decode(cid.multihash)
    expect(mh.name).to.equal('sha2-256')
  })

  it('create cid with hashAlg', async () => {
    const cid = await ipldRaw.util.cid(rawData, { hashAlg: 'sha2-512' })
    expect(cid.version).to.equal(1)
    expect(cid.codec).to.equal('raw')
    expect(cid.multihash).to.exist()
    const mh = multihash.decode(cid.multihash)
    expect(mh.name).to.equal('sha2-512')
  })
})
