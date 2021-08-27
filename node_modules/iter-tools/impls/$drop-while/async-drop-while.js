var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

function __asyncDropWhile(_x, _x2) {
  return _asyncDropWhile.apply(this, arguments);
}

exports.__asyncDropWhile = __asyncDropWhile;

function _asyncDropWhile() {
  _asyncDropWhile = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, predicate) {
    var drop, c, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            drop = true;
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
              _context.next = 29;
              break;
            }

            value = _value;

            if (drop) {
              _context.next = 20;
              break;
            }

            _context.next = 18;
            return value;

          case 18:
            _context.next = 26;
            break;

          case 20:
            _context.next = 22;
            return _awaitAsyncGenerator(predicate(value, c++));

          case 22:
            drop = _context.sent;

            if (drop) {
              _context.next = 26;
              break;
            }

            _context.next = 26;
            return value;

          case 26:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 29:
            _context.next = 35;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 35:
            _context.prev = 35;
            _context.prev = 36;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 40;
              break;
            }

            _context.next = 40;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 40:
            _context.prev = 40;

            if (!_didIteratorError) {
              _context.next = 43;
              break;
            }

            throw _iteratorError;

          case 43:
            return _context.finish(40);

          case 44:
            return _context.finish(35);

          case 45:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 31, 35, 45], [36,, 40, 44]]);
  }));
  return _asyncDropWhile.apply(this, arguments);
}

var asyncDropWhile = /*#__PURE__*/asyncIterableCurry(__asyncDropWhile);
exports.asyncDropWhile = asyncDropWhile;