var Code = require('code')
var Lab = require('lab')

var isCapitalized = require('../')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

describe('is-capitalized', function () {
  var capitalized = [
    'Aaa',
    'Bbb',
    'Ccc',
    'A',
    'B',
    'C',
    'AAA',
    'BBB',
    'CCC'
  ]

  // generated tests for true cases
  capitalized.forEach(function (str) {
    it('returns true for "' + str + '"', function (done) {
      expect(isCapitalized(str)).to.be.true()
      done()
    })
  })

  var notCapitalized = [
    'aaa',
    'abb',
    'acc',
    'a',
    'a',
    'a',
    'aAA',
    'aBB',
    'aCC'
  ]
  // generated tests for false cases
  notCapitalized.forEach(function (str) {
    it('returns false for "' + str + '"', function (done) {
      expect(isCapitalized(str)).to.be.false()
      done()
    })
  })

  describe('strict', function () {
    var capitalized = [
      'Aaa',
      'Bbb',
      'Ccc',
      'A',
      'B',
      'C'
    ]

    // generated tests for true cases
    capitalized.forEach(function (str) {
      it('returns true for "' + str + '"', function (done) {
        expect(isCapitalized(str, true)).to.be.true()
        done()
      })
    })

    var notCapitalized = [
      'aaa',
      'abb',
      'acc',
      'a',
      'a',
      'a',
      'aAA',
      'aBB',
      'aCC',
      'AAA',
      'BBB',
      'CCC'
    ]
    // generated tests for false cases
    notCapitalized.forEach(function (str) {
      it('returns false for "' + str + '"', function (done) {
        expect(isCapitalized(str, true)).to.be.false()
        done()
      })
    })
  })
})
