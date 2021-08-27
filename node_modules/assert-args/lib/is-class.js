var isCapitalized = require('is-capitalized')
var isClassStrict = require('is-class')
var isFunction = require('101/is-function')

module.exports = isClass

function isClass (fn) {
  return isClassStrict(fn) ||
  (isFunction(fn) && isCapitalized(fn.name))
}
