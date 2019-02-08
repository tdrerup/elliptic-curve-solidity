// Tilman Drerup (2018).

// Test for EllipticCurve contract in SECP256R1 parametrization.
const SECP256R1      = artifacts.require("./EllipticCurve.sol");
const assertRevert   = require('../helpers/assertRevert');
const bigNumber      = require('bignumber.js');
const crypto         = require('crypto');
const ecPem          = require('ec-pem');
const ethereumJSUtil = require('ethereumjs-util');


contract('SECP256R1', async (accounts) => {

  let curve;
  let messageHash;
  let publicKey;
  let signature;

  beforeEach(async () => {

    // Create contract.
    curve = await SECP256R1.new();

    // Create curve object for key and signature generation.
    var prime256v1 = crypto.createECDH('prime256v1');
    prime256v1.generateKeys();

    // Reformat keys.
    var pemFormattedKeyPair = ecPem(prime256v1, 'prime256v1');
    publicKey = [
      '0x' + prime256v1.getPublicKey('hex').slice(2, 66),
      '0x' + prime256v1.getPublicKey('hex').slice(-64)
    ];

    // Create random message and sha256-hash it.
    var message = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    messageHash = ethereumJSUtil.bufferToHex(ethereumJSUtil.sha256(message));

    // Create signature.
    var signer = crypto.createSign('RSA-SHA256');
    signer.update(message);
    var sigString = signer.sign(pemFormattedKeyPair.encodePrivateKey(), 'hex');

    // Reformat signature / extract coordinates.
    var xlength = 2 * ('0x' + sigString.slice(6, 8));
    var sigString = sigString.slice(8)
    signature = [
      '0x' + sigString.slice(0, xlength),
      '0x' + sigString.slice(xlength + 4)
    ];

  });

  it('confirm that a valid point is on the curve', async() => {

    let x = "0x6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296"
    let y = "0x4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5"

    var onCurve = await curve.isOnCurve(x, y);
    assert.equal(onCurve, true);

  });

  it('reject that an invalid point is on the curve', async() => {

    let x = "0x3B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296"
    let y = "0x4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5"

    var onCurve = await curve.isOnCurve(x, y);
    assert.equal(onCurve, false);

  });

  it('confirm valid signature (#1)', async () =>  {

    var result = await curve.validateSignature.call(messageHash, signature, publicKey);
    assert.equal(result, true);

  });

  it('confirm valid signature (#2)', async () =>  {

    var result = await curve.validateSignature.call(messageHash, signature, publicKey);
    assert.equal(result, true);

  });

  it('reject signature with flipped public key coordinates ([x,y] >> [y,x])', async () =>  {

    var flippedPublicKey = [publicKey[1], publicKey[0]];
    var result = await curve.validateSignature.call(messageHash, signature, flippedPublicKey);
    assert.equal(result, false);

  });

  it('reject signature with flipped signature values ([r,s] >> [s,r])', async () =>  {

    var flippedSignature = [signature[1], signature[0]];
    var result = await curve.validateSignature.call(messageHash, flippedSignature, publicKey);
    assert.equal(result, false);

  });

  it('reject signature with invalid message hash', async () =>  {

    var invalidMessage = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    var invalidMessageHash = ethereumJSUtil.bufferToHex(ethereumJSUtil.sha256(invalidMessage));

    var result = await curve.validateSignature.call(invalidMessageHash, signature, publicKey);
    assert.equal(result, false);

  });

});
