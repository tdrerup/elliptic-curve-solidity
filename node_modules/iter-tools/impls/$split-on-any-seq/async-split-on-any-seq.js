var _regeneratorRuntime = require("@babel/runtime/regenerator");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/async-any-seq.js'),
    asyncSeqsToArray = _require2.asyncSeqsToArray;

var _require3 = require('../$starts-with-seq/starts-with-seq.js'),
    __startsWithSeq = _require3.__startsWithSeq;

var _require4 = require('../$window-ahead/async-window-ahead.js'),
    __asyncWindowAhead = _require4.__asyncWindowAhead;

var _require5 = require('../$spliterate/async-spliterate.js'),
    __asyncSpliterate = _require5.__asyncSpliterate;

function getMatchingLength(buffer, separatorSeqs, same) {
  var _iterator2 = _createForOfIteratorHelper(separatorSeqs),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var subsequence = _step2.value;

      if (__startsWithSeq(buffer, subsequence, same)) {
        return subsequence.length;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return 0;
}

function asyncAnySeqspliterator(_x, _x2, _x3) {
  return _asyncAnySeqspliterator.apply(this, arguments);
}

function _asyncAnySeqspliterator() {
  _asyncAnySeqspliterator = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(split, _ref, source) {
    var separatorSeqs, same, maxMatchLength, skip, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, buffer, matchingLength;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            separatorSeqs = _ref.separatorSeqs, same = _ref.same;
            maxMatchLength = separatorSeqs.reduce(function (max, _ref2) {
              var length = _ref2.length;
              return Math.max(max, length);
            }, 1);
            skip = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 5;
            _iterator = _asyncIterator(__asyncWindowAhead(source, maxMatchLength, {
              useFiller: false
            }));

          case 7:
            _context.next = 9;
            return _awaitAsyncGenerator(_iterator.next());

          case 9:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 13;
            return _awaitAsyncGenerator(_step.value);

          case 13:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 31;
              break;
            }

            buffer = _value;

            if (!(skip > 0)) {
              _context.next = 19;
              break;
            }

            skip--;
            return _context.abrupt("continue", 28);

          case 19:
            matchingLength = getMatchingLength(buffer, separatorSeqs, same);

            if (!(matchingLength > 0)) {
              _context.next = 26;
              break;
            }

            _context.next = 23;
            return split;

          case 23:
            skip = matchingLength - 1;
            _context.next = 28;
            break;

          case 26:
            _context.next = 28;
            return buffer.get(0);

          case 28:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 31:
            _context.next = 37;
            break;

          case 33:
            _context.prev = 33;
            _context.t0 = _context["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 37:
            _context.prev = 37;
            _context.prev = 38;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 42;
              break;
            }

            _context.next = 42;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 42:
            _context.prev = 42;

            if (!_didIteratorError) {
              _context.next = 45;
              break;
            }

            throw _iteratorError;

          case 45:
            return _context.finish(42);

          case 46:
            return _context.finish(37);

          case 47:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 33, 37, 47], [38,, 42, 46]]);
  }));
  return _asyncAnySeqspliterator.apply(this, arguments);
}

function __asyncSplitOnAnySeq(_x4, _x5) {
  return _asyncSplitOnAnySeq.apply(this, arguments);
}

exports.__asyncSplitOnAnySeq = __asyncSplitOnAnySeq;

function _asyncSplitOnAnySeq() {
  _asyncSplitOnAnySeq = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(source, separatorSeqs) {
    var same,
        separatorSeqsArr,
        _args2 = arguments;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            same = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : Object.is;
            _context2.next = 3;
            return _awaitAsyncGenerator(asyncSeqsToArray(separatorSeqs));

          case 3:
            separatorSeqsArr = _context2.sent.filter(function (s) {
              return s.length > 0;
            });
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(__asyncSpliterate(source, asyncAnySeqspliterator, {
              separatorSeqs: separatorSeqsArr.sort(function (a, b) {
                return b.length - a.length;
              }),
              same: same
            })), _awaitAsyncGenerator), "t0", 5);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _asyncSplitOnAnySeq.apply(this, arguments);
}

var asyncSplitOnAnySeq = /*#__PURE__*/asyncIterableCurry(__asyncSplitOnAnySeq, {
  minArgs: 1,
  maxArgs: 2
});
exports.asyncSplitOnAnySeq = asyncSplitOnAnySeq;