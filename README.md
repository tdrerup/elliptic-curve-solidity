# elliptic-curve-solidity

A pure Solidity implementation of elliptic curve secp256r1 / prime256v1 / p256.

#### Signature verification

The main purpose of this contract is verification of ECDSA signatures based on curve secp256r1 / prime256v1 / p256. To verify a signature, use the function

    function validateSignature(bytes32 message, uint[2] memory rs, uint[2] memory Q) public pure
        returns (bool)

where

* `bytes32 message` is the hash of the signed message
* `uint[2] rs` contains the signature
* `uint[2] Q` contains the coordinates of the public key

The function returns `true` for valid signatures, `false` otherwise.

Notes:

* To disambiguate public keys when verifying signatures, activate condition `rs[1] > lowSmax` in `validateSignature()`.
* To run the tests, first install the node packages (`npm install`) and then run `truffle test`.
* Verifying signatures is costly (!) in terms of gas.

#### Miscellanea

* Tested with Solidity 0.5.0 and Truffle v5.0.1.
* Some newer versions of web3.js cause issues due to improper handling of bigNumber objects.
* Some components of the contract are based on code written by Andreas Olofsson, Alexander Vlasov (https://github.com/BANKEX/CurveArithmetics), and Avi Asayag (https://github.com/orbs-network/elliptic-curve-solidity).
* Versions of the contract have been deployed on the main Ethereum network (https://etherscan.io/address/0xf471789937856d80e589f5996cf8b0511ddd9de4) as well as the Ropsten test network (https://ropsten.etherscan.io/address/0x8025532f39e089d8bb3ed783ccdd974ee8c3948f).
