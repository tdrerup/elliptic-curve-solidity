'use strict'

const sort = require('stable')
const uint8ArrayCompare = require('uint8arrays/compare')

const linkSort = (a, b) => {
  const buf1 = a.nameAsBuffer
  const buf2 = b.nameAsBuffer

  return uint8ArrayCompare(buf1, buf2)
}

/**
 * Sorts links in place (mutating given array)
 * @param {Array} links
 * @returns {void}
 */
const sortLinks = (links) => {
  sort.inplace(links, linkSort)
}

module.exports = sortLinks
