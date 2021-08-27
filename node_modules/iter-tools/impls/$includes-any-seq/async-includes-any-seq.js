var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/async-any-seq.js'),
    asyncSeqsToArray = _require2.asyncSeqsToArray;

var _require3 = require('../$window-ahead/async-window-ahead.js'),
    __asyncWindowAhead = _require3.__asyncWindowAhead;

var _require4 = require('../$starts-with-any-seq/starts-with-any-seq.js'),
    __startsWithAnySeq = _require4.__startsWithAnySeq;

function __asyncIncludesAnySeq(_x, _x2) {
  return _asyncIncludesAnySeq.apply(this, arguments);
}

function _asyncIncludesAnySeq() {
  _asyncIncludesAnySeq = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable, seqs) {
    var same,
        seqsArr,
        maxMatchLength,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        _value,
        buffer,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            same = _args.length > 2 && _args[2] !== undefined ? _args[2] : Object.is;
            _context.next = 3;
            return asyncSeqsToArray(seqs);

          case 3:
            seqsArr = _context.sent;

            if (seqsArr.length) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", false);

          case 6:
            if (!seqsArr.find(function (seq) {
              return !seq.length;
            })) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", true);

          case 8:
            maxMatchLength = seqsArr.reduce(function (max, _ref) {
              var length = _ref.length;
              return Math.max(max, length);
            }, 1);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 11;
            _iterator = _asyncIterator(__asyncWindowAhead(iterable, maxMatchLength));

          case 13:
            _context.next = 15;
            return _iterator.next();

          case 15:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 19;
            return _step.value;

          case 19:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 27;
              break;
            }

            buffer = _value;

            if (!__startsWithAnySeq(buffer, seqsArr, same)) {
              _context.next = 24;
              break;
            }

            return _context.abrupt("return", true);

          case 24:
            _iteratorNormalCompletion = true;
            _context.next = 13;
            break;

          case 27:
            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](11);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 33:
            _context.prev = 33;
            _context.prev = 34;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 38;
              break;
            }

            _context.next = 38;
            return _iterator["return"]();

          case 38:
            _context.prev = 38;

            if (!_didIteratorError) {
              _context.next = 41;
              break;
            }

            throw _iteratorError;

          case 41:
            return _context.finish(38);

          case 42:
            return _context.finish(33);

          case 43:
            return _context.abrupt("return", false);

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 29, 33, 43], [34,, 38, 42]]);
  }));
  return _asyncIncludesAnySeq.apply(this, arguments);
}

exports.__asyncIncludesAnySeq = __asyncIncludesAnySeq;
var asyncIncludesAnySeq = /*#__PURE__*/asyncIterableCurry(__asyncIncludesAnySeq, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true
});
exports.asyncIncludesAnySeq = asyncIncludesAnySeq;