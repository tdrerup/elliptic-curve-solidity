var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$spliterate/async-spliterate.js'),
    __asyncSpliterate = _require2.__asyncSpliterate;

function asyncBatchSpliterator(_x, _x2, _x3) {
  return _asyncBatchSpliterator.apply(this, arguments);
}

function _asyncBatchSpliterator() {
  _asyncBatchSpliterator = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(split, _ref, source) {
    var size, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            size = _ref.size;
            i = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 4;
            _iterator = _asyncIterator(source);

          case 6:
            _context.next = 8;
            return _awaitAsyncGenerator(_iterator.next());

          case 8:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 12;
            return _awaitAsyncGenerator(_step.value);

          case 12:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 25;
              break;
            }

            value = _value;

            if (!(i === size)) {
              _context.next = 19;
              break;
            }

            _context.next = 18;
            return split;

          case 18:
            i = 0;

          case 19:
            _context.next = 21;
            return value;

          case 21:
            i++;

          case 22:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 25:
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

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
    }, _callee, null, [[4, 27, 31, 41], [32,, 36, 40]]);
  }));
  return _asyncBatchSpliterator.apply(this, arguments);
}

function __asyncBatch(source, size) {
  return __asyncSpliterate(source, asyncBatchSpliterator, {
    size: size
  });
}

exports.__asyncBatch = __asyncBatch;
var asyncBatch = /*#__PURE__*/asyncIterableCurry(__asyncBatch, {
  validateArgs: function validateArgs(args) {
    if (typeof args[1] !== 'number' || args[1] < 1) {
      throw new TypeError('batch size should be a number greater than zero');
    }
  }
});
exports.asyncBatch = asyncBatch;