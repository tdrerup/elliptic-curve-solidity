'use strict'

const withIs = require('class-is')
const sortLinks = require('./sortLinks')
const DAGLink = require('../dag-link/dagLink')
const { serializeDAGNode } = require('../serialize.js')
const toDAGLink = require('./toDagLink')
const addLink = require('./addLink')
const rmLink = require('./rmLink')
const uint8ArrayFromString = require('uint8arrays/from-string')
const uint8ArrayToString = require('uint8arrays/to-string')

class DAGNode {
  constructor (data, links = [], serializedSize = null) {
    if (!data) {
      data = new Uint8Array(0)
    }
    if (typeof data === 'string') {
      data = uint8ArrayFromString(data)
    }

    if (!(data instanceof Uint8Array)) {
      throw new Error('Passed \'data\' is not a Uint8Array or a String!')
    }

    if (serializedSize !== null && typeof serializedSize !== 'number') {
      throw new Error('Passed \'serializedSize\' must be a number!')
    }

    links = links.map((link) => {
      return DAGLink.isDAGLink(link)
        ? link
        : DAGLink.util.createDagLinkFromB58EncodedHash(link)
    })
    sortLinks(links)

    Object.defineProperties(this, {
      Data: { value: data, writable: false, enumerable: true },
      Links: { value: links, writable: false, enumerable: true },
      _serializedSize: { value: serializedSize, writable: true, enumerable: false },
      _size: { value: null, writable: true, enumerable: false }
    })
  }

  toJSON () {
    if (!this._json) {
      this._json = Object.freeze({
        data: this.Data,
        links: this.Links.map((l) => l.toJSON()),
        size: this.size
      })
    }

    return Object.assign({}, this._json)
  }

  toString () {
    return `DAGNode <data: "${uint8ArrayToString(this.Data, 'base64urlpad')}", links: ${this.Links.length}, size: ${this.size}>`
  }

  _invalidateCached () {
    this._serializedSize = null
    this._size = null
  }

  addLink (link) {
    this._invalidateCached()
    return addLink(this, link)
  }

  rmLink (link) {
    this._invalidateCached()
    return rmLink(this, link)
  }

  // @returns {Promise.<DAGLink>}
  toDAGLink (options) {
    return toDAGLink(this, options)
  }

  serialize () {
    return serializeDAGNode(this)
  }

  get size () {
    if (this._size === null) {
      if (this._serializedSize === null) {
        this._serializedSize = this.serialize().length
      }
      this._size = this.Links.reduce((sum, l) => sum + l.Tsize, this._serializedSize)
    }

    return this._size
  }

  set size (size) {
    throw new Error("Can't set property: 'size' is immutable")
  }
}

exports = module.exports = withIs(DAGNode, { className: 'DAGNode', symbolName: '@ipld/js-ipld-dag-pb/dagnode' })
