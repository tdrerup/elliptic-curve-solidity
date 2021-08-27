var isFunction = require('101/is-function')
var isInteger = require('101/is-integer')
var isObject = require('101/is-object')
var isString = require('101/is-string')

var assertType = require('./assert-type.js')
var isClass = require('./is-class.js')
var NoClass = function () {}
var startsWithVowel = require('./starts-with-vowel.js')
var classes = {
  // primitive classes
  string: String,
  number: Number,
  // extended typeof support
  array: Array,
  regexp: RegExp
}

module.exports = validate
/**
 * validate an argument
 * @param  {string} key argument name
 * @param  {*} arg  argument value
 * @param  {string|function} validator argument validator
 */
function validate (key, arg, validator, _plural) {
  if (validator === '*') { return }

  var keyStr = '"' + key + '"'
  var typeStr
  var article
  var Class
  var errMessage
  var assertion

  if (Array.isArray(validator)) {
    // circular require
    return require('./multi-validate.js')(key, arg, validator)
  } else if (isString(validator)) {
    // validator is a string
    typeStr = validator
    Class = classes[typeStr] || NoClass
    article = startsWithVowel(typeStr) ? 'an' : 'a'
    errMessage = _plural
      ? (keyStr + ' must be ' + typeStr + 's')
      : (keyStr + ' must be ' + article + ' ' + typeStr)

    if (typeStr === 'integer') {
      assertion = isInteger(arg)
    } else if (typeStr === 'object') {
      assertion = isObject(arg)
    } else {
      assertion = arg instanceof Class || typeof arg === validator
    }

    assertType(assertion, errMessage)
  } else if (isClass(validator)) {
    // validator is a class
    typeStr = validator.name
    Class = validator
    errMessage = _plural
      ? (keyStr + ' must be instances of "' + typeStr + '"')
      : (keyStr + ' must be an instance of "' + typeStr + '"')
    assertType(arg instanceof Class, errMessage)
  } else if (isFunction(validator)) {
    // validator is a test
    try {
      // test will throw an error if it fails
      validator(arg)
    } catch (e) {
      e.message = (keyStr += ': ' + e.message)
      throw e
    }
  } else {
    throw new TypeError('"validator" must be a string, class or function')
  }
}
