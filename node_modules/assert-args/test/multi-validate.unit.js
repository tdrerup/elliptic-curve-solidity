var Code = require('code')
var isObject = require('101/is-object')
var isString = require('101/is-string')
var Lab = require('lab')

var assertType = require('../lib/assert-type.js')
var multiValidate = require('../lib/multi-validate.js')
var assertObject = function (obj) {
  assertType(isObject(obj), 'must be an  object')
}
var assertString = function assertString (str) {
  assertType(isString(str), 'must be a string')
}

var lab = exports.lab = Lab.script()
var describe = lab.describe
var expect = Code.expect
var it = lab.it

describe('multiValidate', function () {
  it('should validate an argument w/ multiple validators', function (done) {
    multiValidate('key', 'str', ['string', String, assertString])
    done()
  })

  describe('errors', function () {
    it('should throw an error if any of the assertions fail', function (done) {
      expect(
        multiValidate.bind(null, 'key', 10, ['object', String, assertString])
      ).to.throw(TypeError, '"key" must be an object, "String" or pass "assertString"')
      done()
    })

    it('should throw an error if any of the assertions fail', function (done) {
      expect(
        multiValidate.bind(null, 'key', 10, ['string', Object, assertString])
      ).to.throw(TypeError, '"key" must be a string, "Object" or pass "assertString"')
      done()
    })

    it('should throw an error if any of the assertions fail', function (done) {
      expect(
        multiValidate.bind(null, 'key', 10, ['string', String, assertObject])
      ).to.throw(TypeError, '"key" must be a string, "String" or pass "anonymous"')
      done()
    })

    it('should throw an error if any validator is invalid', function (done) {
      expect(
        multiValidate.bind(null, 'key', 10, ['string', String, assertObject, 10])
      ).to.throw(TypeError, '"validators" must be an array containing only strings, classes, or functions')
      done()
    })

    it('should throw an error if validators is empty', function (done) {
      expect(
        multiValidate.bind(null, 'key', 10, [])
      ).to.throw(TypeError, '"validators" cannot be empty')
      done()
    })
  })
})
