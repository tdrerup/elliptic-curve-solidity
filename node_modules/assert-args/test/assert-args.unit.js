var Code = require('code')
var Lab = require('lab')

var assertArgs = require('../index.js')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it

var customValue = { custom: true }
var customValidation = function (v) { return Boolean(v.custom) }
var expect = Code.expect
var SomeClass = function () {}
var OtherClass = function () {}

describe('assert-args', function () {
  describe('invalidArgs', function () {
    it('should throw an error if given invalid args', function (done) {
      expect(function () {
        assertArgs('invalidArg', {})
      }).to.throw(TypeError, '"args" must be an array or array-like object (arguments)')
      done()
    })

    it('should throw an error if given invalid validation', function (done) {
      expect(function () {
        assertArgs({length: 0}, 'invalidArg')
      }).to.throw(TypeError, '"validation" must be an object')
      done()
    })
  })

  describe('required args', function () {
    it('should throw', function (done) {
      expect(function () {
        var args = []
        assertArgs(args, {
          foo: '*'
        })
      }).to.throw(TypeError, '"foo" is required')
      done()
    })
    it('should not throw for extra args', function (done) {
      expect(function () {
        var args = [1, 2, 3]
        assertArgs(args, {
          foo: '*',
          bar: '*'
        })
      }).to.not.throw()
      done()
    })
  })

  describe('type arguments', function () {
    // * test
    it('should return args if validations pass (*)', function (done) {
      var args = [{}]
      var out = assertArgs(args, {
        foo: '*'
      })
      expect(out).to.deep.equal({
        foo: args[0]
      })
      done()
    })
    // object test
    it('should return args if validations pass (object)', function (done) {
      var args = [{}]
      var out = assertArgs(args, {
        foo: 'object'
      })
      expect(out).to.deep.equal({
        foo: args[0]
      })
      done()
    })
    // string tests
    describe('string tests', function () {
      var validArgs = [
        ['str'],
        /*eslint-disable */
        [new String('str')]
        /*eslint-enable */
      ]
      validArgs.forEach(function (args) {
        // generated test
        it('should return args if validations pass', function (done) {
          var out = assertArgs(args, {
            foo: 'string'
          })
          expect(out).to.deep.equal({
            foo: args[0]
          })
          done()
        })
      })

      var invalidArgs = [
        [10],
        [/regexp/],
        [{}],
        [[]]
      ]
      invalidArgs.forEach(function (args) {
        // generated test
        it('should throw', function (done) {
          expect(function () {
            assertArgs(args, {
              foo: 'string'
            })
          }).to.throw(TypeError, '"foo" must be a string')
          done()
        })
      })
    })

    describe('integer tests', function () {
      // integer tests
      var validArgs = [
        [10],
        [-10]
      ]
      validArgs.forEach(function (args) {
        // generated test
        it('should return args if validations pass', function (done) {
          var out = assertArgs(args, {
            foo: 'integer'
          })
          expect(out).to.deep.equal({
            foo: args[0]
          })
          done()
        })
      })

      var invalidArgs = [
        ['boom'],
        [/regexp/],
        [{}],
        [[]]
      ]
      invalidArgs.forEach(function (args) {
        // generated test
        it('should throw', function (done) {
          expect(function () {
            assertArgs(args, {
              foo: 'integer'
            })
          }).to.throw(TypeError, '"foo" must be an integer')
          done()
        })
      })
    })
  })

  describe('instance arguments', function () {
    it('should return args if validations pass', function (done) {
      var args = [new SomeClass()]
      var out = assertArgs(args, {
        foo: SomeClass
      })
      expect(out).to.deep.equal({
        foo: args[0]
      })
      done()
    })

    var invalidArgs = [
      [10],
      [/regexp/],
      [{}],
      [[]],
      [OtherClass]
    ]
    invalidArgs.forEach(function (args) {
      // generated test
      it('should throw', function (done) {
        expect(function () {
          assertArgs(args, {
            foo: 'string'
          })
        }).to.throw(TypeError, '"foo" must be a string')
        done()
      })
    })
  })

  describe('custom arguments', function () {
    it('should return args if validations pass', function (done) {
      var args = [customValue]
      args = assertArgs(args, {
        foo: customValidation
      })
      expect(args).to.deep.equal({
        foo: customValue
      })
      done()
    })

    var invalidArgs = [
      [10],
      [/regexp/],
      [{}],
      [[]],
      [OtherClass]
    ]
    invalidArgs.forEach(function (args) {
      // generated test
      it('should throw', function (done) {
        expect(function () {
          assertArgs(args, {
            foo: 'string'
          })
        }).to.throw(TypeError, '"foo" must be a string')
        done()
      })
    })
  })

  describe('optional arguments', function () {
    var validArgs = [
      [],
      [null],
      [undefined],
      ['str']
    ]
    validArgs.forEach(function (args) {
      // generated test
      it('should return args if validations pass', function (done) {
        var out = assertArgs(args, {
          '[foo]': 'string'
        })
        expect(out).to.deep.equal({
          foo: args[0]
        })
        done()
      })
    })
    it('should throw', function (done) {
      var args = [{}]
      expect(function () {
        assertArgs(args, {
          '[foo]': 'string'
        })
      }).to.throw(TypeError, '"foo" must be a string')
      done()
    })

    describe('leading optional arguments', function () {
      var fn = function () {}
      var validArgs = [
        [fn],
        [fn, null],
        [fn, undefined],
        [null, fn],
        [undefined, fn],
        ['str', fn]
      ]
      var expectedResults = [
        { foo: undefined, bar: undefined, cb: fn },
        { foo: undefined, bar: undefined, cb: fn },
        { foo: undefined, bar: undefined, cb: fn },
        { foo: null, bar: undefined, cb: fn },
        { foo: undefined, bar: undefined, cb: fn },
        { foo: 'str', bar: undefined, cb: fn }
      ]
      validArgs.forEach(function (args, i) {
        // generated test
        it('should return args if validations pass: ' + i, function (done) {
          var out = assertArgs(args, {
            '[foo]': 'string',
            '[bar]': 'string',
            'cb': 'function'
          })
          expect(out).to.deep.equal(expectedResults[i])
          done()
        })
      })

      var invalidArgs = [
        [],
        [null],
        [undefined],
        ['str'],
        ['str', null],
        ['str', undefined],
        ['str', {}],
        ['str', {}, function () {}]
      ]
      var expectedErrors = [
        '"cb" is required',
        '"cb" is required',
        '"cb" is required',
        '"cb" is required',
        '"cb" is required',
        '"cb" is required',
        '"cb" must be a function',
        '"bar" must be a string'
      ]
      invalidArgs.forEach(function (args, i) {
        // generated test
        it('should return args if validations pass: ' + i, function (done) {
          expect(function () {
            assertArgs(args, {
              '[foo]': 'string',
              '[bar]': 'string',
              'cb': 'function'
            })
          }).to.throw(TypeError, expectedErrors[i])
          done()
        })
      })
    })

    describe('trailing optional arguments', function () {
      var fn = function () {}
      var validArgs = [
        [fn],
        [fn, null],
        [fn, undefined],
        [fn, 10],
        [fn, 10, null],
        [fn, 10, undefined]
      ]
      var expectedResults = [
        { cb: fn, foo: undefined },
        { cb: fn, foo: null },
        { cb: fn, foo: undefined },
        { cb: fn, foo: 10 },
        { cb: fn, foo: 10 },
        { cb: fn, foo: 10 }
      ]
      validArgs.forEach(function (args, i) {
        // generated test
        it('should return args if validations pass: ' + i, function (done) {
          var out = assertArgs(args, {
            'cb': 'function',
            '[foo]': 'number'
          })
          expect(out).to.deep.equal(expectedResults[i])
          done()
        })
      })
    })
  })

  describe('spread argument', function () {
    describe('multiple', function () {
      it('should return args if validations pass', function (done) {
        expect(function () {
          assertArgs([], {
            '...foo': 'number',
            '...bar': 'function'
          })
        }).to.throw(Error, 'assert-args only supports a single spread argument')
        done()
      })
    })

    describe('optional', function () {
      var fn = function () {}

      describe('only', function () {
        var validArgs = [
          [],
          [null],
          [undefined, undefined],
          [10],
          [10, 10],
          [10, 10, 10]
        ]
        var expectedResults = [
          { foo: [] },
          { foo: [] },
          { foo: [] },
          { foo: [10] },
          { foo: [10, 10] },
          { foo: [10, 10, 10] }
        ]
        validArgs.forEach(function (args, i) {
          // generated test
          it('should return args if validations pass: ' + i, function (done) {
            var out = assertArgs(args, {
              '[...foo]': 'number'
            })
            expect(out).to.deep.equal(expectedResults[i])
            done()
          })
        })

        var invalidArgs = [
          ['no'],
          [null, 'no']
        ]
        var expectedErrors = [
          '"...foo" must be numbers',
          '"...foo" must be numbers'
        ]
        invalidArgs.forEach(function (args, i) {
          // generated test
          it('should throw: ' + i, function (done) {
            expect(function () {
              assertArgs(args, {
                '[...foo]': 'number'
              })
            }).to.throw(TypeError, expectedErrors[i])
            done()
          })
        })
      })

      describe('leading', function () {
        describe('required', function () {
          var validArgs = [
            [fn],
            [null, fn],
            [undefined, fn],
            [undefined, undefined, undefined, fn],
            [10, fn],
            [10, 10, fn],
            [10, 10, 10, fn]
          ]
          var expectedResults = [
            { foo: [], bar: fn },
            { foo: [], bar: fn },
            { foo: [], bar: fn },
            { foo: [], bar: fn },
            { foo: [10], bar: fn },
            { foo: [10, 10], bar: fn },
            { foo: [10, 10, 10], bar: fn }
          ]
          validArgs.forEach(function (args, i) {
            // generated test
            it('should return args if validations pass: ' + i, function (done) {
              var out = assertArgs(args, {
                '[...foo]': 'number',
                'bar': 'function'
              })
              expect(out).to.deep.equal(expectedResults[i])
              done()
            })
          })

          var invalidArgs = [
            [null, null, 'no'],
            ['no', fn],
            [{}, 10, 'no'],
            [{}, 10, 10, 'no'],
            [{}, 10, 'no', fn]
          ]
          var expectedErrors = [
            '"bar" must be a function',
            '"qux" must be an object',
            '"bar" must be a function',
            '"bar" must be a function',
            '"...foo" must be numbers'
          ]
          invalidArgs.forEach(function (args, i) {
            // generated test
            it('should throw: ' + i, function (done) {
              expect(function () {
                assertArgs(args, {
                  '[qux]': 'object',
                  '[...foo]': 'number',
                  'bar': 'function'
                })
              }).to.throw(TypeError, expectedErrors[i])
              done()
            })
          })
        })
        describe('optional', function () {
          var fn = function () {}
          var validArgs = [
            [],
            [null],
            [null, null],
            [fn],
            [null, fn],
            [undefined, fn],
            [undefined, undefined, undefined, fn],
            [undefined, undefined, undefined, null],
            [10, fn],
            [10, 10, fn],
            [10, 10, 10, fn]
          ]
          var expectedResults = [
            { foo: [], bar: undefined },
            { foo: [], bar: undefined },
            { foo: [], bar: undefined },
            { foo: [], bar: fn },
            { foo: [], bar: fn },
            { foo: [], bar: fn },
            { foo: [], bar: fn },
            { foo: [], bar: undefined },
            { foo: [10], bar: fn },
            { foo: [10, 10], bar: fn },
            { foo: [10, 10, 10], bar: fn }
          ]
          validArgs.forEach(function (args, i) {
            // generated test
            it('should return args if validations pass: ' + i, function (done) {
              var out = assertArgs(args, {
                '[...foo]': 'number',
                '[bar]': 'function'
              })
              expect(out).to.deep.equal(expectedResults[i])
              done()
            })
          })

          var invalidArgs = [
            [null, null, 'no'],
            ['no', fn],
            [{}, 10, 'no'],
            [{}, 10, 10, 'no'],
            [{}, 10, 'no', fn]
          ]
          var expectedErrors = [
            '"...foo" must be numbers',
            '"qux" must be an object',
            '"...foo" must be numbers',
            '"...foo" must be numbers',
            '"...foo" must be numbers'
          ]
          invalidArgs.forEach(function (args, i) {
            // generated test
            it('should throw: ' + i, function (done) {
              expect(function () {
                assertArgs(args, {
                  '[qux]': 'object',
                  '[...foo]': 'number',
                  '[bar]': 'function'
                })
              }).to.throw(TypeError, expectedErrors[i])
              done()
            })
          })
        })
      })

      describe('trailing', function () {
        describe('required', function () {
          var fn = function () {}
          var validArgs = [
            [fn],
            [fn, null],
            [fn, undefined],
            [fn, undefined, undefined, undefined],
            [fn, 10],
            [fn, 10, 10],
            [fn, 10, 10, 10]
          ]
          var expectedResults = [
            { foo: fn, bar: [] },
            { foo: fn, bar: [] },
            { foo: fn, bar: [] },
            { foo: fn, bar: [] },
            { foo: fn, bar: [10] },
            { foo: fn, bar: [10, 10] },
            { foo: fn, bar: [10, 10, 10] }
          ]
          validArgs.forEach(function (args, i) {
            // generated test
            it('should return args if validations pass: ' + i, function (done) {
              var out = assertArgs(args, {
                'foo': 'function',
                '[...bar]': 'number'
              })
              expect(out).to.deep.equal(expectedResults[i])
              done()
            })
          })

          var invalidArgs = [
            [null],
            [undefined],
            [null, 10],
            [undefined, 10],
            ['yes', 'no'],
            ['yes', null, 'no'],
            ['yes', undefined, 'no']
          ]
          var expectedErrors = [
            '"foo" must be a string',
            '"foo" must be a string',
            '"foo" must be a string',
            '"foo" must be a string',
            '"...bar" must be numbers',
            '"...bar" must be numbers',
            '"...bar" must be numbers'
          ]
          invalidArgs.forEach(function (args, i) {
            // generated test
            it('should throw: ' + i, function (done) {
              expect(function () {
                assertArgs(args, {
                  'foo': 'string',
                  '[...bar]': 'number'
                })
              }).to.throw(TypeError, expectedErrors[i])
              done()
            })
          })
        })

        describe('optional', function () {
          var validArgs = [
            [null],
            [undefined],
            [null, 10],
            [undefined, 10],
            [10],
            [10, 10],
            [10, 10, 10],
            [10, 10, 10, 10],
            [fn, 10, 10, 10, 10]
          ]
          var expectedResults = [
            { bar: [], foo: null },
            { bar: [], foo: undefined },
            { bar: [10], foo: null },
            { bar: [10], foo: undefined },
            { bar: [10], foo: undefined },
            { bar: [10, 10], foo: undefined },
            { bar: [10, 10, 10], foo: undefined },
            { bar: [10, 10, 10, 10], foo: undefined },
            { bar: [10, 10, 10, 10], foo: fn }
          ]
          validArgs.forEach(function (args, i) {
            // generated test
            it('should return args if validations pass: ' + i, function (done) {
              var out = assertArgs(args, {
                '[foo]': 'function',
                '[...bar]': 'number'
              })
              expect(out).to.deep.equal(expectedResults[i])
              done()
            })
          })

          var invalidArgs = [
            [fn],
            ['yes', 'no'],
            ['yes', null, 'no'],
            ['yes', undefined, 'no']
          ]
          var expectedErrors = [
            '"foo" must be a string',
            '"...bar" must be numbers',
            '"...bar" must be numbers',
            '"...bar" must be numbers'
          ]
          invalidArgs.forEach(function (args, i) {
            // generated test
            it('should throw: ' + i, function (done) {
              expect(function () {
                assertArgs(args, {
                  '[foo]': 'string',
                  '[...bar]': 'number'
                })
              }).to.throw(TypeError, expectedErrors[i])
              done()
            })
          })

          // 'foo': 'string',
          // '[bar]': 'number',
          // '[qux]': 'string',
          // '...corge': 'function'
          var validArgs2 = [
            ['f'],
            ['f', 10],
            ['f', 'b'],
            ['f', fn],
            ['f', 10, 'b'],
            ['f', 10, fn],
            ['f', 10, 'b', fn],
            ['f', 10, 'b', fn, fn]
          ]
          var expectedResults2 = [
            { foo: 'f', bar: undefined, qux: undefined, corge: [] },
            { foo: 'f', bar: 10, qux: undefined, corge: [] },
            { foo: 'f', bar: undefined, qux: 'b', corge: [] },
            { foo: 'f', bar: undefined, qux: undefined, corge: [fn] },
            { foo: 'f', bar: 10, qux: 'b', corge: [] },
            { foo: 'f', bar: 10, qux: undefined, corge: [fn] },
            { foo: 'f', bar: 10, qux: 'b', corge: [fn] },
            { foo: 'f', bar: 10, qux: 'b', corge: [fn, fn] }
          ]
          validArgs2.forEach(function (args, i) {
            // generated test
            it('should return args if validations pass: ' + i, function (done) {
              var out = assertArgs(args, {
                'foo': 'string',
                '[bar]': 'number',
                '[qux]': 'string',
                '[...corge]': 'function'
              })
              expect(out).to.deep.equal(expectedResults2[i])
              done()
            })
          })
        })
      })
    })

    describe('required', function () {
      describe('only', function () {
        var validArgs = [
          [10],
          [10, 10],
          [10, 10, 10]
        ]
        var expectedResults = [
          { foo: [10] },
          { foo: [10, 10] },
          { foo: [10, 10, 10] }
        ]
        validArgs.forEach(function (args, i) {
          // generated test
          it('should return args if validations pass: ' + i, function (done) {
            var out = assertArgs(args, {
              '...foo': 'number'
            })
            expect(out).to.deep.equal(expectedResults[i])
            done()
          })
        })

        var invalidArgs = [
          [],
          ['no'],
          [null, 'no']
        ]
        var expectedErrors = [
          '"...foo" is required',
          '"...foo" must be numbers',
          '"...foo" must be numbers'
        ]
        invalidArgs.forEach(function (args, i) {
          // generated test
          it('should throw: ' + i, function (done) {
            expect(function () {
              assertArgs(args, {
                '...foo': 'number'
              })
            }).to.throw(TypeError, expectedErrors[i])
            done()
          })
        })
      })

      describe('leading', function () {
        var fn = function () {}
        describe('required', function () {
          var validArgs = [
            [10, fn],
            [10, 10, fn],
            [10, 10, 10, fn],
            [10, 10, 10, 10, fn]
          ]
          var expectedResults = [
            { foo: [10], bar: fn },
            { foo: [10, 10], bar: fn },
            { foo: [10, 10, 10], bar: fn },
            { foo: [10, 10, 10, 10], bar: fn }
          ]
          validArgs.forEach(function (args, i) {
            // generated test
            it('should return args if validations pass: ' + i, function (done) {
              var out = assertArgs(args, {
                '...foo': 'number',
                'bar': 'function'
              })
              expect(out).to.deep.equal(expectedResults[i])
              done()
            })
          })

          var invalidArgs = [
            [{}, fn],
            [{}, 10, 'no'],
            ['str', 10, fn],
            [{}, 10, 10, 'no'],
            [{}, 10, 'no', fn]
          ]
          var expectedErrors = [
            '"...foo" is required',
            '"bar" must be a function',
            '"qux" must be an object',
            '"bar" must be a function',
            '"...foo" must be numbers'
          ]
          invalidArgs.forEach(function (args, i) {
            // generated test
            it('should throw: ' + i, function (done) {
              expect(function () {
                assertArgs(args, {
                  '[qux]': 'object',
                  '...foo': 'number',
                  'bar': 'function'
                })
              }).to.throw(TypeError, expectedErrors[i])
              done()
            })
          })
        })

        describe('optional', function () {
          var validArgs = [
            [10],
            [10, 10],
            [10, 10, 10],
            [10, 10, 10, 10],
            [10, 10, 10, 10, fn]
          ]
          var expectedResults = [
            { foo: [10], bar: undefined },
            { foo: [10, 10], bar: undefined },
            { foo: [10, 10, 10], bar: undefined },
            { foo: [10, 10, 10, 10], bar: undefined },
            { foo: [10, 10, 10, 10], bar: fn }
          ]
          validArgs.forEach(function (args, i) {
            // generated test
            it('should return args if validations pass: ' + i, function (done) {
              var out = assertArgs(args, {
                '...foo': 'number',
                '[bar]': 'function'
              })
              expect(out).to.deep.equal(expectedResults[i])
              done()
            })
          })
        })
      })

      describe('trailing', function () {
        describe('required', function () {
          var fn = function () {}
          var validArgs = [
            [fn, 10],
            [fn, 10, 10],
            [fn, 10, 10, 10],
            [fn, 10, 10, 10, 10]
          ]
          var expectedResults = [
            { foo: fn, bar: [10] },
            { foo: fn, bar: [10, 10] },
            { foo: fn, bar: [10, 10, 10] },
            { foo: fn, bar: [10, 10, 10, 10] }
          ]
          validArgs.forEach(function (args, i) {
            // generated test
            it('should return args if validations pass: ' + i, function (done) {
              var out = assertArgs(args, {
                'foo': 'function',
                '...bar': 'number'
              })
              expect(out).to.deep.equal(expectedResults[i])
              done()
            })
          })

          var invalidArgs = [
            [fn],
            [10, 'no'],
            [10, 10, 'no'],
            [10, 'no', fn]
          ]
          var expectedErrors = [
            '"foo" must be a number',
            '"...bar" must be functions',
            '"...bar" must be functions',
            '"...bar" must be functions'
          ]
          invalidArgs.forEach(function (args, i) {
            // generated test
            it('should throw: ' + i + ' ' + args, function (done) {
              expect(function () {
                assertArgs(args, {
                  'foo': 'number',
                  '...bar': 'function'
                })
              }).to.throw(TypeError, expectedErrors[i])
              done()
            })
          })
        })

        describe('optional', function () {
          var fn = function () {}
          var validArgs = [
            [fn, 10],
            [fn, 10, 10],
            [fn, 10, 10, 10],
            [fn, 10, 10, 10, 10]
          ]
          var expectedResults = [
            { foo: fn, bar: [10] },
            { foo: fn, bar: [10, 10] },
            { foo: fn, bar: [10, 10, 10] },
            { foo: fn, bar: [10, 10, 10, 10] }
          ]
          validArgs.forEach(function (args, i) {
            // generated test
            it('should return args if validations pass: ' + i, function (done) {
              var out = assertArgs(args, {
                '[foo]': 'function',
                '...bar': 'number'
              })
              expect(out).to.deep.equal(expectedResults[i])
              done()
            })
          })

          var invalidArgs = [
            ['no'],
            [10, 'no'],
            [10, 10, 'no'],
            [10, 'no', fn]
          ]
          var expectedErrors = [
            '"...bar" must be functions',
            '"...bar" must be functions',
            '"...bar" must be functions',
            '"...bar" must be functions'
          ]
          invalidArgs.forEach(function (args, i) {
            // generated test
            it('should throw: ' + i + ' ' + args, function (done) {
              expect(function () {
                assertArgs(args, {
                  '[foo]': 'number',
                  '...bar': 'function'
                })
              }).to.throw(TypeError, expectedErrors[i])
              done()
            })
          })

          // 'foo': 'number',
          // '[bar]': 'number',
          // '[qux]': 'number',
          // '...corge': 'function'
          var invalidArgs2 = [
            ['no'],
            [10, 'no'],
            [10, 'no', 'no'],
            [10, 10, 'no', 'no'],
            [10, 10, 'no'],
            [10, 10, 10, 'no'],
            [10, 'no', 10, 'no'],
            [10, 10, 'no', fn],
            [10, fn, fn, 10],
            [10, 10, 'no', 'no', 'no']
          ]
          var expectedErrors2 = [
            '"foo" must be a number',
            '"...corge" must be functions',
            '"bar" must be a number',
            '"qux" must be a number',
            '"...corge" must be functions',
            '"...corge" must be functions',
            '"bar" must be a number',
            '"qux" must be a number',
            '"...corge" must be functions',
            '"qux" must be a number'
          ]
          invalidArgs2.forEach(function (args, i) {
            // generated test
            it('should throw: ' + i + ' ' + args, function (done) {
              expect(function () {
                assertArgs(args, {
                  'foo': 'number',
                  '[bar]': 'number',
                  '[qux]': 'number',
                  '...corge': 'function'
                })
              }).to.throw(TypeError, expectedErrors2[i])
              done()
            })
          })
        })
      })
    })
  })
})
