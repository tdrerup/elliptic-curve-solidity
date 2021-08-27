var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(anySeqspliterator),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(__splitOnAnySeq);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/any-seq.js'),
    seqsToArray = _require2.seqsToArray;

var _require3 = require('../$starts-with-seq/starts-with-seq.js'),
    __startsWithSeq = _require3.__startsWithSeq;

var _require4 = require('../$window-ahead/window-ahead.js'),
    __windowAhead = _require4.__windowAhead;

var _require5 = require('../$spliterate/spliterate.js'),
    __spliterate = _require5.__spliterate;

function getMatchingLength(buffer, separatorSeqs, same) {
  var _iterator = _createForOfIteratorHelper(separatorSeqs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var subsequence = _step.value;

      if (__startsWithSeq(buffer, subsequence, same)) {
        return subsequence.length;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return 0;
}

function anySeqspliterator(split, _ref, source) {
  var separatorSeqs, same, maxMatchLength, skip, _iterator2, _step2, buffer, matchingLength;

  return _regeneratorRuntime.wrap(function anySeqspliterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          separatorSeqs = _ref.separatorSeqs, same = _ref.same;
          maxMatchLength = separatorSeqs.reduce(function (max, _ref2) {
            var length = _ref2.length;
            return Math.max(max, length);
          }, 1);
          skip = 0;
          _iterator2 = _createForOfIteratorHelper(__windowAhead(source, maxMatchLength, {
            useFiller: false
          }));
          _context.prev = 4;

          _iterator2.s();

        case 6:
          if ((_step2 = _iterator2.n()).done) {
            _context.next = 22;
            break;
          }

          buffer = _step2.value;

          if (!(skip > 0)) {
            _context.next = 11;
            break;
          }

          skip--;
          return _context.abrupt("continue", 20);

        case 11:
          matchingLength = getMatchingLength(buffer, separatorSeqs, same);

          if (!(matchingLength > 0)) {
            _context.next = 18;
            break;
          }

          _context.next = 15;
          return split;

        case 15:
          skip = matchingLength - 1;
          _context.next = 20;
          break;

        case 18:
          _context.next = 20;
          return buffer.get(0);

        case 20:
          _context.next = 6;
          break;

        case 22:
          _context.next = 27;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](4);

          _iterator2.e(_context.t0);

        case 27:
          _context.prev = 27;

          _iterator2.f();

          return _context.finish(27);

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[4, 24, 27, 30]]);
}

function __splitOnAnySeq(source, separatorSeqs) {
  var same,
      separatorSeqsArr,
      _args2 = arguments;
  return _regeneratorRuntime.wrap(function __splitOnAnySeq$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          same = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : Object.is;
          separatorSeqsArr = seqsToArray(separatorSeqs).filter(function (s) {
            return s.length > 0;
          });
          return _context2.delegateYield(__spliterate(source, anySeqspliterator, {
            separatorSeqs: separatorSeqsArr.sort(function (a, b) {
              return b.length - a.length;
            }),
            same: same
          }), "t0", 3);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

exports.__splitOnAnySeq = __splitOnAnySeq;
var splitOnAnySeq = /*#__PURE__*/iterableCurry(__splitOnAnySeq, {
  minArgs: 1,
  maxArgs: 2
});
exports.splitOnAnySeq = splitOnAnySeq;