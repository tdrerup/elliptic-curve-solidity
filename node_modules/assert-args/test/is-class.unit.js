var Code = require('code')
var Lab = require('lab')

var isClass = require('../lib/is-class.js')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var expect = Code.expect
var it = lab.it

describe('isClass', function () {
  it('should return true for a class', function (done) {
    function Class () {
      // mock babel class: classCallCheck()
    }
    expect(isClass(Class)).to.be.true()
    done()
  })
  it('should return true for a class-like function', function (done) {
    function Class () {}
    expect(isClass(Class)).to.be.true()
    done()
  })
  it('should return false for a function', function (done) {
    var fn = function () {}
    expect(isClass(fn)).to.be.false()
    done()
  })
  it('should return false for a non-function', function (done) {
    expect(isClass({})).to.be.false()
    done()
  })
})
