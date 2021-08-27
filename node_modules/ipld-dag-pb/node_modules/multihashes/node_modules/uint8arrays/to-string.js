'use strict'

const bases = require('./util/bases')

/**
 * @typedef {import('./util/bases').SupportedEncodings} SupportedEncodings
 */

/**
 * Turns a `Uint8Array` into a string.
 *
 * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {Uint8Array} array - The array to turn into a string
 * @param {SupportedEncodings} [encoding=utf8] - The encoding to use
 * @returns {string}
 */
function toString (array, encoding = 'utf8') {
  const base = bases[encoding]

  if (!base) {
    throw new Error(`Unsupported encoding "${encoding}"`)
  }

  // strip multibase prefix
  return base.encoder.encode(array).substring(1)
}

module.exports = toString
