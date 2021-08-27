var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry,
    asyncCache = _require.asyncCache;

function __asyncInterposeSeq(_x, _x2) {
  return _asyncInterposeSeq.apply(this, arguments);
}

exports.__asyncInterposeSeq = __asyncInterposeSeq;

function _asyncInterposeSeq() {
  _asyncInterposeSeq = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, seq) {
    var subseq_, first, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, sourceValue;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _awaitAsyncGenerator(asyncCache(seq));

          case 2:
            subseq_ = _context.sent;
            first = true;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 6;
            _iterator = _asyncIterator(source);

          case 8:
            _context.next = 10;
            return _awaitAsyncGenerator(_iterator.next());

          case 10:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 14;
            return _awaitAsyncGenerator(_step.value);

          case 14:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 25;
              break;
            }

            sourceValue = _value;

            if (first) {
              _context.next = 19;
              break;
            }

            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(subseq_), _awaitAsyncGenerator), "t0", 19);

          case 19:
            _context.next = 21;
            return sourceValue;

          case 21:
            first = false;

          case 22:
            _iteratorNormalCompletion = true;
            _context.next = 8;
            break;

          case 25:
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t1 = _context["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 31:
            _context.prev = 31;
            _context.prev = 32;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 36;
              break;
            }

            _context.next = 36;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 36:
            _context.prev = 36;

            if (!_didIteratorError) {
              _context.next = 39;
              break;
            }

            throw _iteratorError;

          case 39:
            return _context.finish(36);

          case 40:
            return _context.finish(31);

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 27, 31, 41], [32,, 36, 40]]);
  }));
  return _asyncInterposeSeq.apply(this, arguments);
}

var asyncInterposeSeq = /*#__PURE__*/asyncIterableCurry(__asyncInterposeSeq);
exports.asyncInterposeSeq = asyncInterposeSeq;