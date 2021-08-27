"use strict"
const assert = require('assert')
const crypto = require('crypto')
const ec_pem = require('../ec_pem')

const curveList = 'prime192v1 prime256v1 sect163k1 sect163r2 secp224r1 sect233k1 sect233r1 sect283k1 sect283r1 secp384r1 sect409k1 sect409r1 secp521r1 sect571k1 sect571r1'.split(/\s+/)

function generateCurveMapping() {
  const curveByKeySize = {}
  for (let curve of curveList)
    for (let i=0; i<20; i++) {
      const ecdh = ec_pem.generate(curve)
      const klen = [ecdh.getPublicKey().length, ecdh.getPrivateKey().length]
      curveByKeySize[klen] = Array.from(new Set(curveByKeySize[klen] || []).add(curve))
    }

  console.dir(curveByKeySize)
  return curveByKeySize }
//generateCurveMapping()


describe('test curve detection matrix', () => {
  for (let curve of curveList)
    it(`using curve: "${curve}" `, () => {
      let ecdh = crypto.createECDH(curve)
      ecdh.generateKeys()
      let ans = ec_pem.inferCurve(ecdh)
      assert(ans.includes(curve), {ans, curve})
    })
})
