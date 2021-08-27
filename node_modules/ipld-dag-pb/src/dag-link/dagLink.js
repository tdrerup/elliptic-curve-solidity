'use strict'

const CID = require('cids')
const withIs = require('class-is')
const uint8ArrayFromString = require('uint8arrays/from-string')

// Link represents an IPFS Merkle DAG Link between Nodes.
class DAGLink {
  constructor (name, size, cid) {
    if (!cid) {
      throw new Error('A link requires a cid to point to')
    }

    // assert(size, 'A link requires a size')
    //  note - links should include size, but this assert is disabled
    //  for now to maintain consistency with go-ipfs pinset

    Object.defineProperties(this, {
      Name: { value: name || '', writable: false, enumerable: true },
      Tsize: { value: size, writable: false, enumerable: true },
      Hash: { value: new CID(cid), writable: false, enumerable: true },
      _nameBuf: { value: null, writable: true, enumerable: false }
    })
  }

  toString () {
    return `DAGLink <${this.Hash.toBaseEncodedString()} - name: "${this.Name}", size: ${this.Tsize}>`
  }

  toJSON () {
    if (!this._json) {
      this._json = Object.freeze({
        name: this.Name,
        size: this.Tsize,
        cid: this.Hash.toBaseEncodedString()
      })
    }

    return Object.assign({}, this._json)
  }

  // Memoize the Uint8Array representation of name
  // We need this to sort the links, otherwise
  // we will reallocate new Uint8Arrays every time
  get nameAsBuffer () {
    if (this._nameBuf !== null) {
      return this._nameBuf
    }

    this._nameBuf = uint8ArrayFromString(this.Name)
    return this._nameBuf
  }
}

exports = module.exports = withIs(DAGLink, { className: 'DAGLink', symbolName: '@ipld/js-ipld-dag-pb/daglink' })
