'use strict'

const globalThis = require('globalthis')()

if (globalThis.AbortController && globalThis.AbortSignal) {
  module.exports = class AbortController extends globalThis.AbortController {}
  module.exports.AbortSignal = globalThis.AbortSignal
  module.exports.default = module.exports
} else {
  module.exports = require('abort-controller')
}
