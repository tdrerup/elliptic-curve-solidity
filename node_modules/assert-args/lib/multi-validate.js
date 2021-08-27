var compoundSubject = require('compound-subject')
var isEmpty = require('101/is-empty')
var isString = require('101/is-string')
var isFunction = require('101/is-function')

var assertType = require('./assert-type')
var isClass = require('./is-class.js')
var validate = require('./validate.js')
var startsWithVowel = require('./starts-with-vowel.js')

module.exports = multiValidate
/**
 * validate an argument against multiple validators
 * @param  {string} key argument name
 * @param  {*} arg  argument value
 * @param  {array} validators array of validators
 */
function multiValidate (key, arg, validators) {
  var errMessage = '"' + key + '" must be '
  assertType(!isEmpty(validators), '"validators" cannot be empty')
  var typeArr = validators.map(function (validator) {
    if (isString(validator)) {
      return validator
    } else if (isClass(validator)) {
      return '"' + validator.name + '"'
    } else if (isFunction(validator)) {
      return 'pass "' + (validator.name || 'anonymous') + '"'
    } else {
      throw new TypeError('"validators" must be an array containing only strings, classes, or functions')
    }
  })
  var typeStr = compoundSubject(typeArr)
    .endWith('or')
    .make()
  var article = startsWithVowel(typeStr) ? 'an' : 'a'

  errMessage += article + ' ' + typeStr

  var passedAnyValidator = validators.some(function (validator) {
    try {
      validate(key, arg, validator)
      return true
    } catch (e) {
      return false
    }
  })

  if (!passedAnyValidator) {
    throw new TypeError(errMessage)
  }
}
