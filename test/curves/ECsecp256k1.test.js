// Aratrika Mukherjee (2021)

// Test for ECsecp256k1 contract in SECP256K1 parametrization.
const SECP256K1 = artifacts.require("./ECsecp256k1.sol");
const assertRevert = require('../helpers/assertRevert');
const EC = require('elliptic').ec;
const createHash = require('create-hash')
const Buffer = require('buffer/').Buffer;

contract('SECP256K1', async() => {

    let curve;
    let messageHash;
    let publicKey;
    let signature;

    let ec = new EC('secp256k1');

    beforeEach(async function() {

        // Create contract.
        curve = await SECP256K1.new();

        // Generate keypairs
        let key = ec.genKeyPair();

        // Create random message and sha256-hash it.
        let msg = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        let mBuf = Buffer.from(msg, 'utf8')
        let hash = createHash('sha256').update(mBuf).digest()
        let hashex = hash.toString('hex')
        let hashBuff = Buffer.from(hashex, 'hex')
        messageHash = '0x' + hashex

        // Create signature.
        let sig = key.sign(hashBuff);
        let sigOpt = {
            r: sig.r,
            s: sig.s,
            v: sig.recoveryParam
        };
        let rhex = '0x' + sig.r.toString('hex')
        let shex = '0x' + sig.s.toString('hex')
        signature = [rhex, shex]

        // Public key
        const pubk = ec.recoverPubKey(hashBuff, sigOpt, sigOpt.v);
        const pubkx = '0x' + pubk.x.toString('hex')
        const pubky = '0x' + pubk.y.toString('hex')
        publicKey = [pubkx, pubky]

    });

    it('confirm valid signature (#1)', async() => {
        var result = await curve.validateSignature(messageHash, signature, publicKey);
        assert.equal(result, true);
    });

    it('confirm valid signature (#2)', async() => {
        var result = await curve.validateSignature(messageHash, signature, publicKey);
        assert.equal(result, true);
    });

    it('reject signature with flipped public key coordinates ([x,y] >> [y,x])', async() => {
        var flippedPublicKey = [publicKey[1], publicKey[0]];
        var result = await curve.validateSignature.call(messageHash, signature, flippedPublicKey);
        assert.equal(result, false);
    });

    it('reject signature with flipped signature values ([r,s] >> [s,r])', async() => {
        var flippedSignature = [signature[1], signature[0]];
        var result = await curve.validateSignature.call(messageHash, flippedSignature, publicKey);
        assert.equal(result, false);
    });

    it('reject signature with invalid message hash', async() => {
        var invalidMsg = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
        let imBuf = Buffer.from(invalidMsg, 'utf8')
        let imHash = createHash('sha256').update(imBuf).digest()
        let imHasHex = imHash.toString('hex')
        var invalidMessageHash = '0x' + imHasHex
        var result = await curve.validateSignature.call(invalidMessageHash, signature, publicKey);
        assert.equal(result, false);
    });
});