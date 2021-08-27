var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

function __asyncFilter(_x, _x2) {
  return _asyncFilter.apply(this, arguments);
}

exports.__asyncFilter = __asyncFilter;

function _asyncFilter() {
  _asyncFilter = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, predicate) {
    var c, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            c = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = _asyncIterator(source);

          case 5:
            _context.next = 7;
            return _awaitAsyncGenerator(_iterator.next());

          case 7:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 11;
            return _awaitAsyncGenerator(_step.value);

          case 11:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 22;
              break;
            }

            value = _value;
            _context.next = 16;
            return _awaitAsyncGenerator(predicate(value, c++));

          case 16:
            if (!_context.sent) {
              _context.next = 19;
              break;
            }

            _context.next = 19;
            return value;

          case 19:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 22:
            _context.next = 28;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 28:
            _context.prev = 28;
            _context.prev = 29;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 33;
              break;
            }

            _context.next = 33;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 33:
            _context.prev = 33;

            if (!_didIteratorError) {
              _context.next = 36;
              break;
            }

            throw _iteratorError;

          case 36:
            return _context.finish(33);

          case 37:
            return _context.finish(28);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 24, 28, 38], [29,, 33, 37]]);
  }));
  return _asyncFilter.apply(this, arguments);
}

var asyncFilter = /*#__PURE__*/asyncIterableCurry(__asyncFilter);
exports.asyncFilter = asyncFilter;