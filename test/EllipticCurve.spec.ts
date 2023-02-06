// Tilman Drerup (2018).

import { ethers } from "hardhat"
import crypto from "crypto"
import ecPem from "ec-pem"
import { bufferToHex, sha256 } from "ethereumjs-util"
import { assert } from "chai"

describe("EllipticCurve", async () => {
    let curve
    let messageHash
    let publicKey
    let signature

    beforeEach(async () => {
        // Create contract.
        const facory = await ethers.getContractFactory("EllipticCurve")
        curve = await facory.deploy()

        // Create curve object for key and signature generation.
        const prime256v1 = crypto.createECDH("prime256v1")
        prime256v1.generateKeys()

        // Reformat keys.
        const pemFormattedKeyPair = ecPem(prime256v1, "prime256v1")
        publicKey = [
            "0x" + prime256v1.getPublicKey("hex").slice(2, 66),
            "0x" + prime256v1.getPublicKey("hex").slice(-64),
        ]

        // Create random message and sha256-hash it.
        const message = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substring(0, 5)
        messageHash = bufferToHex(sha256(Buffer.from(message)))

        // Create signature.
        const signer = crypto.createSign("RSA-SHA256")
        signer.update(message)
        let sigString = signer.sign(pemFormattedKeyPair.encodePrivateKey(), "hex")

        // Reformat signature / extract coordinates.
        // @ts-ignore
        const xlength = 2 * ("0x" + sigString.slice(6, 8))
        sigString = sigString.slice(8)
        signature = ["0x" + sigString.slice(0, xlength), "0x" + sigString.slice(xlength + 4)]
    })

    it("confirm that a valid point is on the curve", async () => {
        const x = "0x6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296"
        const y = "0x4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5"

        const onCurve = await curve.isOnCurve(x, y)
        assert.equal(onCurve, true)
    })

    it("reject that an invalid point is on the curve", async () => {
        const x = "0x3B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296"
        const y = "0x4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5"

        const onCurve = await curve.isOnCurve(x, y)
        assert.equal(onCurve, false)
    })

    it("confirm valid signature (#1)", async () => {
        const result = await curve.validateSignature(messageHash, signature, publicKey)
        console.log(result)
    })

    it("confirm valid signature (#2)", async () => {
        const result = await curve.validateSignature(messageHash, signature, publicKey)
        assert.equal(result, true)
    })

    it("reject signature with flipped public key coordinates ([x,y] >> [y,x])", async () => {
        const flippedPublicKey = [publicKey[1], publicKey[0]]
        const result = await curve.validateSignature(messageHash, signature, flippedPublicKey)
        assert.equal(result, false)
    })

    it("reject signature with flipped signature values ([r,s] >> [s,r])", async () => {
        const flippedSignature = [signature[1], signature[0]]
        const result = await curve.validateSignature(messageHash, flippedSignature, publicKey)
        assert.equal(result, false)
    })

    it("reject signature with invalid message hash", async () => {
        const invalidMessage = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, "")
            .substring(0, 5)
        const invalidMessageHash = bufferToHex(sha256(Buffer.from(invalidMessage)))

        const result = await curve.validateSignature(invalidMessageHash, signature, publicKey)
        assert.equal(result, false)
    })
})
