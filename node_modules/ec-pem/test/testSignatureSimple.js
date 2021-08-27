"use strict"
const assert = require('assert')
const crypto = require('crypto')
const ec_pem = require('../ec_pem')

const debug = !!process.env.debug

const keys = {
  priv: ['-----BEGIN EC PRIVATE KEY-----',
         'MIHbAgEBBEGBGI8CO/hGZWi0fW1RZbitCb+eyxZfhIA3bwmm6o1LltiIcRguGcpR',
         'nSJqfDjKAFFNZ+yBpQzZl2eVItKnX7z5RKAHBgUrgQQAI6GBiQOBhgAEAZxYxkUi',
         'Kjf2qlRl5HQKK915B5HW80OsacHj2tPvXbzS8wlFK8eva4btnj+Gpoco7IRCt1Ky',
         'Wpo2q1Bm6AmjGLqmARyH4bubEovlHp/Er0ayQYdp8xx5RIgbEVidQv6TcaZ6UxH8',
         'ia/teZ1hfdzgpeIS2SWflu1dp5hT8S3aOIj6+Kye',
         '-----END EC PRIVATE KEY-----',
         ''].join('\n'),
  pub:  ['-----BEGIN PUBLIC KEY-----',
         'MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQBnFjGRSIqN/aqVGXkdAor3XkHkdbz',
         'Q6xpwePa0+9dvNLzCUUrx69rhu2eP4amhyjshEK3UrJamjarUGboCaMYuqYBHIfh',
         'u5sSi+Uen8SvRrJBh2nzHHlEiBsRWJ1C/pNxpnpTEfyJr+15nWF93OCl4hLZJZ+W',
         '7V2nmFPxLdo4iPr4rJ4=',
         '-----END PUBLIC KEY-----',
         ''].join('\n'),
}

const data = Buffer.from('a message to sign')


describe('test signature simple', () => {
  it('should work, part A', () => {
    const sign = crypto.createSign('sha1')
    sign.update(data)
    const signature = sign.sign(keys.priv)
    if (debug) console.log('SIGNATURE:', signature.toString('hex'))

    const verify = crypto.createVerify('sha1')
    verify.update(data)
    const valid = verify.verify(keys.pub, signature)
    if (debug) console.log('VALID:', valid)
    assert.equal(true, valid)
  })


  it('should work, part B', () => {
    const priv_examp = ec_pem.loadPrivateKey(keys.priv)
    const priv_round = ec_pem.encodePrivateKey(priv_examp)
    if (debug) {
      console.log()
      console.log('PRIVATE')
      console.log('S', keys.priv)
      console.log('R', priv_round)
      console.log()
    }
    assert.equal(keys.priv.toString('hex'), priv_round.toString('hex'))
  })

  it('should work, part C', () => {
    const pub_examp = ec_pem.loadPublicKey(keys.pub)
    const pub_round = ec_pem.encodePublicKey(pub_examp)

    if (debug) {
      console.log()
      console.log('PUBLIC')
      console.log('S', keys.pub.toString('hex'))
      console.log('R', pub_round.toString('hex'))
      console.log()
    }
    assert.equal(keys.pub.toString('hex'), pub_round.toString('hex'))
  })
})
