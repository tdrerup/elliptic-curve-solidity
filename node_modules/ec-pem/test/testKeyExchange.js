"use strict"
const assert = require('assert')
const crypto = require('crypto')
const ec_pem = require('../ec_pem')

const curve = 'secp521r1'
const keys = {
  priv: ['-----BEGIN EC PRIVATE KEY-----',
         'ME8CAQEEQYEYjwI7+EZlaLR9bVFluK0Jv57LFl+EgDdvCabqjUuW2IhxGC4ZylGd',
         'Imp8OMoAUU1n7IGlDNmXZ5Ui0qdfvPlEoAcGBSuBBAAj',
         '-----END EC PRIVATE KEY-----'].join('\n'),
  pub:  ['-----BEGIN PUBLIC KEY-----',
         'MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQBnFjGRSIqN/aqVGXkdAor3XkHkdbz',
         'Q6xpwePa0+9dvNLzCUUrx69rhu2eP4amhyjshEK3UrJamjarUGboCaMYuqYBHIfh',
         'u5sSi+Uen8SvRrJBh2nzHHlEiBsRWJ1C/pNxpnpTEfyJr+15nWF93OCl4hLZJZ+W',
         '7V2nmFPxLdo4iPr4rJ4=',
         '-----END PUBLIC KEY-----'].join('\n'),
}

describe('test key exchange', () => {
  it('should work', () => {
    const alice = crypto.createECDH(curve)
    alice.generateKeys()

    const bob = ec_pem.loadPrivateKey(keys.priv)
    const bob_secret = bob.computeSecret(alice.getPublicKey('hex'), 'hex', 'hex')

    const bob_key = ec_pem.loadPublicKey(keys.pub, 'hex')
    const alice_secret = alice.computeSecret(bob_key.public_key, 'hex', 'hex')

    assert.equal(bob_secret, alice_secret)

    const bob_key_ec = ec_pem.loadPublicKey(keys.pub)
    const alice_secret_ec = alice.computeSecret(bob_key_ec.getPublicKey())

    assert.equal(bob_secret, alice_secret_ec.toString('hex'))

    assert.equal(bob_key.public_key, bob.getPublicKey('hex'))
    assert.equal(bob_key_ec.getPublicKey('hex'), bob.getPublicKey('hex'))

  })
})

describe('test key store/load/clone roundtrips', () => {
  let bob_private, bob_public
  before(() => {
    bob_private = ec_pem.loadPrivateKey(keys.priv)
    bob_public = ec_pem.loadPublicKey(keys.pub)
  })

  it('should round trip private_key through Base64', () =>
    assert.deepEqual(
      ec_pem.fromBase64(bob_private.toPrivateBase64()).toPrivateJSON(),
      {curve, private_key: ec_pem.asUrlSafeBase64(bob_private.getPrivateKey('base64'))}) )

  it('should round trip public_key through Base64', () =>
    assert.deepEqual(
      ec_pem.fromBase64(bob_public.toPublicBase64()).toPublicJSON(),
      {curve, public_key: ec_pem.asUrlSafeBase64(bob_public.getPublicKey('base64', 'compressed'))}) )

  it('should round load private_key from Base64', () =>
    assert.deepEqual(
      ec_pem.load(bob_private.toPrivateBase64()).toPrivateJSON(),
      {curve, private_key: ec_pem.asUrlSafeBase64(bob_private.getPrivateKey('base64'))}) )

  it('should round load public_key from Base64', () =>
    assert.deepEqual(
      ec_pem.load(bob_public.toPublicBase64()).toPublicJSON(),
      {curve, public_key: ec_pem.asUrlSafeBase64(bob_public.getPublicKey('base64', 'compressed'))}) )

// --
  it('should round trip private_key through Buffer', () =>
    assert.deepEqual(
      ec_pem.fromBuffer(bob_private.toPrivateBuffer()).toPrivateJSON(),
      bob_private.toPrivateJSON()))

  it('should round trip public_key through Buffer', () =>
    assert.deepEqual(
      ec_pem.fromBuffer(bob_public.toPublicBuffer()).toPublicJSON(),
      bob_public.toPublicJSON()))

  it('should round load private_key from Base64', () =>
    assert.deepEqual(
      ec_pem.load(bob_private.toPrivateBuffer()).toPrivateJSON(),
      bob_private.toPrivateJSON()))

  it('should round load public_key from Base64', () =>
    assert.deepEqual(
      ec_pem.load(bob_public.toPublicBuffer()).toPublicJSON(),
      bob_public.toPublicJSON()))

  it('should clone properly', () => {
    assert.deepEqual(bob_public.toPublicJSON(), bob_public.clone().toPublicJSON())
    assert.deepEqual(bob_public.toPublicJSON(), bob_private.clone('public').toPublicJSON())
    assert.deepEqual(bob_private.toPrivateJSON(), bob_private.clone().toPrivateJSON())
  })

  it('public clones should throw when private key is accessed', () => {
    assert.throws(() => bob_public.toPrivateJSON())
    assert.throws(() => bob_private.clone('public').toPrivateJSON())
    assert.throws(() => bob_private.clonePublic().toPrivateJSON())
  })

  it('should clone public properly', () =>
    assert.deepEqual(bob_public.toPublicJSON(), bob_private.clone('public').toPublicJSON()) )
  it('should clonePublic properly', () =>
    assert.deepEqual(bob_public.toPublicJSON(), bob_private.clonePublic().toPublicJSON()) )

  it('should clone private properly', () =>
    assert.deepEqual(bob_private.toPrivateJSON(), bob_private.clone('private').toPrivateJSON()) )
  it('should clonePrivate properly', () =>
    assert.deepEqual(bob_private.toPrivateJSON(), bob_private.clonePrivate().toPrivateJSON()) )
})
