'use strict'

const CID = require('cids')
const uint8ArrayEquals = require('uint8arrays/equals')

const rmLink = (dagNode, nameOrCid) => {
  let predicate = null

  // It's a name
  if (typeof nameOrCid === 'string') {
    predicate = (link) => link.Name === nameOrCid
  } else if (nameOrCid instanceof Uint8Array || CID.isCID(nameOrCid)) {
    predicate = (link) => uint8ArrayEquals(link.Hash, nameOrCid)
  }

  if (predicate) {
    const links = dagNode.Links
    let index = 0
    while (index < links.length) {
      const link = links[index]
      if (predicate(link)) {
        links.splice(index, 1)
      } else {
        index++
      }
    }
  } else {
    throw new Error('second arg needs to be a name or CID')
  }
}

module.exports = rmLink
