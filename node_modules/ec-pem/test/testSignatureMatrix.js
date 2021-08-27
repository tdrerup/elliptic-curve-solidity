"use strict"
const assert = require('assert')
const crypto = require('crypto')
const ec_pem = require('../ec_pem')

const algList = 'sha1 sha224 sha256 sha512'.split(/\s+/)
const curveList = 'prime192v1 prime256v1 sect163k1 sect163r2 secp224r1 sect233k1 sect233r1 sect283k1 sect283r1 secp384r1 sect409k1 sect409r1 secp521r1 sect571k1 sect571r1'.split(/\s+/)

const ecdsa_algList = 'sha1 sha224 sha256 sha512'.split(/\s+/)
//const ecdsa_algList = 'sha1'.split(/\s+/)
const ecdsa_curveList = 'prime256v1 secp384r1 secp521r1'.split(/\s+/)
//const ecdsa_curveList = 'secp521r1'.split(/\s+/)
const ecdsa_lengths = { prime256v1: 64, secp384r1: 96, secp521r1: 132 }

describe('test signature matrix native', () => {
  const sampleData = {
    data0: Buffer.from('hello'),
    data1: crypto.randomBytes(4096),
    data2: crypto.randomBytes(65536), }

  for (let curve of curveList)
    for (let alg of algList)
      for (let dataKey of Object.keys(sampleData))
        it(`using curve: "${curve}" alg: "${alg}" and sample "${dataKey}"`, () =>
          assert(testSignatureRoundTrip(curve, alg, sampleData[dataKey]), {curve, alg}) )

  function testSignatureRoundTrip(curve, alg, data) {
    const key = ec_pem.generate(curve)

    const sign = crypto.createSign(alg)
    sign.update(data)
    const signature = sign.sign(key.encodePrivateKey())

    const verify = crypto.createVerify(alg)
    verify.update(data)
    const valid = verify.verify(key.encodePublicKey(), signature)

    //console.log(valid, {curve, alg}, {len_data: data.length, len_signature: signature.length})
    return valid
  }
})


describe('test signature matrix api (up to v0.17) ', () =>
  genSignatureMatrixAPITests(curveList, algList,
    function (curve, alg, data) {
      const key = ec_pem.generate(curve)
      const signature = key.sign(alg, data).sign()
      const valid = key.verify(alg, data).verify(signature)

      const signature_b64 = key.sign(alg, data).sign('base64')
      const valid_b64 = key.verify(alg, data).verify(signature_b64, 'base64')
      return valid && valid_b64
    }))

describe('test signature matrix api (asn1)', () =>
  genSignatureMatrixAPITests(curveList, algList,
    function (curve, alg, data) {
      const key = ec_pem.generate(curve)
      const signature = key.sign_asn1(alg, data).sign()
      const valid = key.verify_asn1(alg, data).verify(signature)

      const signature_b64 = key.sign_asn1(alg, data).sign('base64')
      const valid_b64 = key.verify_asn1(alg, data).verify(signature_b64, 'base64')
      return valid && valid_b64
    }))

describe('test signature matrix api (ecdsa)', () =>
  genSignatureMatrixAPITests(ecdsa_curveList, ecdsa_algList,
    function (curve, alg, data) {
      const key = ec_pem.generate(curve)
      const signature = key.sign_ecdsa(alg, data).sign()
      const valid = key.verify_ecdsa(alg, data).verify(signature)
      if (signature.byteLength !== ecdsa_lengths[curve])
        throw new Error('Invalid ECDSA raw signature length')

      const signature_b64 = key.sign_ecdsa(alg, data).sign('base64')
      const valid_b64 = key.verify_ecdsa(alg, data).verify(signature_b64, 'base64')
      return valid && valid_b64
    }))


function genSignatureMatrixAPITests(curveList, algList, testSignatureRoundTrip) {
  const sampleData = {
    data0: Buffer.from('hello'),
    //data1: crypto.randomBytes(4096),
    //data2: crypto.randomBytes(65536),
  }

  for (let curve of curveList)
    for (let alg of algList)
      for (let dataKey of Object.keys(sampleData))
        it(`using curve: "${curve}" alg: "${alg}" and sample "${dataKey}"`, () =>
          assert(testSignatureRoundTrip(curve, alg, sampleData[dataKey]), {curve, alg}) )
}
