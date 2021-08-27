var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

function __asyncTakeWhile(_x, _x2) {
  return _asyncTakeWhile.apply(this, arguments);
}

exports.__asyncTakeWhile = __asyncTakeWhile;

function _asyncTakeWhile() {
  _asyncTakeWhile = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, predicate) {
    var take, c, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            take = true;
            c = 0;
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
            return _awaitAsyncGenerator(predicate(value, c++));

          case 17:
            take = _context.sent;

            if (!take) {
              _context.next = 23;
              break;
            }

            _context.next = 21;
            return value;

          case 21:
            _context.next = 24;
            break;

          case 23:
            return _context.abrupt("break", 27);

          case 24:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 27:
            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](4);
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
  return _asyncTakeWhile.apply(this, arguments);
}

var asyncTakeWhile = /*#__PURE__*/asyncIterableCurry(__asyncTakeWhile);
exports.asyncTakeWhile = asyncTakeWhile;