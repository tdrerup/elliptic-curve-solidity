'use strict'
const assert = require('assert')
const crypto = require('crypto')


describe('test EC curves should all have the same prototype', () => {
  const allProtos = new Set()

  for(const curve of crypto.getCurves().slice(0,10)) {
    const ec = crypto.createECDH(curve)
    it(`curve "${curve}" should use the same proto`, () => {
      allProtos.add(Object.getPrototypeOf(ec))
      assert.strictEqual(allProtos.size, 1)
    })

    it(`curve "${curve}" post key generation should use the same proto`, () => {
      ec.generateKeys()
      allProtos.add(Object.getPrototypeOf(ec))
      assert.strictEqual(allProtos.size, 1)
    })
  }
})
