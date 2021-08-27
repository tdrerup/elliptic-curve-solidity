var Code = require('code')
var isString = require('101/is-string')
var Lab = require('lab')
var proxyquire = require('proxyquire')
var sinon = require('sinon')

var assertType = require('../lib/assert-type.js')
var validate = require('../lib/validate.js')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var expect = Code.expect
var it = lab.it
var beforeEach = lab.beforeEach

function assertString (str) {
  assertType(isString(str), 'value must be a string')
}

describe('validate', function () {
  var ctx
  beforeEach(function (done) {
    ctx = {}
    done()
  })

  it('should validate an argument w/ a string validator', function (done) {
    validate('foo', 'value', '*')
    validate('foo', 'value', 'string')
    validate('[foo]', 'value', 'string')
    validate('foo', new String('value'), 'string') // eslint-disable-line
    done()
  })

  it('should validate an argument w/ a class validator', function (done) {
    validate('foo', new String('value'), String) // eslint-disable-line
    done()
  })

  it('should validate an argument w/ a function validator', function (done) {
    validate('foo', 'value', assertString)
    validate('foo', new String('value'), assertString) // eslint-disable-line
    done()
  })

  it('should validate an argument w/ a function bool validator', function (done) {
    validate('foo', 'value', assertString)
    validate('foo', new String('value'), isString) // eslint-disable-line
    done()
  })

  describe('stub multiValidate', function () {
    beforeEach(function (done) {
      ctx.multiValidateStub = sinon.stub()
      ctx.validate = proxyquire('../lib/validate.js', {
        './multi-validate.js': ctx.multiValidateStub
      })
      done()
    })

    it('should call multiValidate if passed an array', function (done) {
      var key = 'foo'
      var val = 'value'
      var validators = []
      ctx.validate(key, val, validators)
      sinon.assert.calledWith(ctx.multiValidateStub, key, val, validators)
      done()
    })
  })

  describe('errors', function () {
    it('should validate an argument w/ a string validator', function (done) {
      expect(validate.bind(null, 'foo', 10, 'foo'))
        .to.throw(TypeError, '"foo" must be a foo')
      expect(validate.bind(null, 'foo', 10, 'string'))
        .to.throw(TypeError, '"foo" must be a string')
      expect(validate.bind(null, 'foo', 10, 'object'))
        .to.throw(TypeError, '"foo" must be an object')
      expect(validate.bind(null, 'foo', 10, 'object', true))
        .to.throw(TypeError, '"foo" must be objects')
      done()
    })

    it('should validate an argument w/ a class validator', function (done) {
      expect(validate.bind(null, 'foo', 10, String))
        .to.throw(TypeError, '"foo" must be an instance of "String"')
      expect(validate.bind(null, 'foo', 10, String, true))
        .to.throw(TypeError, '"foo" must be instances of "String"')
      done()
    })

    it('should validate an argument w/ a function validator', function (done) {
      expect(validate.bind(null, 'foo', 10, assertString))
        .to.throw(TypeError, '"foo": value must be a string')
      done()
    })

    it('should throw an error if passed an invalid validator', function (done) {
      var validator = {}
      expect(validate.bind(null, 'foo', 10, validator))
        .to.throw(TypeError, '"validator" must be a string, class or function')
      done()
    })
  })
})
