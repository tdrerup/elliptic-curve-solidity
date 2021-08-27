var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$spliterate/async-spliterate.js'),
    __asyncSpliterate = _require2.__asyncSpliterate;

function asyncPredicateSpliterator(_x, _x2, _x3) {
  return _asyncPredicateSpliterator.apply(this, arguments);
}

function _asyncPredicateSpliterator() {
  _asyncPredicateSpliterator = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(split, _ref, source) {
    var predicate, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            predicate = _ref.predicate;
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
              _context.next = 27;
              break;
            }

            value = _value;
            _context.next = 17;
            return _awaitAsyncGenerator(predicate(value, i++));

          case 17:
            if (!_context.sent) {
              _context.next = 21;
              break;
            }

            _context.t0 = split;
            _context.next = 22;
            break;

          case 21:
            _context.t0 = value;

          case 22:
            _context.next = 24;
            return _context.t0;

          case 24:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 27:
            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 33:
            _context.prev = 33;
            _context.prev = 34;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 38;
              break;
            }

            _context.next = 38;
            return _awaitAsyncGenerator(_iterator["return"]());

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
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 29, 33, 43], [34,, 38, 42]]);
  }));
  return _asyncPredicateSpliterator.apply(this, arguments);
}

function __asyncSplitWhen(source, predicate) {
  return __asyncSpliterate(source, asyncPredicateSpliterator, {
    predicate: predicate
  });
}

exports.__asyncSplitWhen = __asyncSplitWhen;
var asyncSplitWhen = /*#__PURE__*/asyncIterableCurry(__asyncSplitWhen);
exports.asyncSplitWhen = asyncSplitWhen;