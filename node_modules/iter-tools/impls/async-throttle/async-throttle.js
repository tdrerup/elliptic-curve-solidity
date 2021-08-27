var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/number.js'),
    isPositiveInteger = _require2.isPositiveInteger;

var _require3 = require('../../internal/delay.js'),
    delay = _require3.delay;

function __asyncThrottle(_x, _x2) {
  return _asyncThrottle.apply(this, arguments);
}

exports.__asyncThrottle = __asyncThrottle;

function _asyncThrottle() {
  _asyncThrottle = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, intervalMs) {
    var waitSince, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value, duration;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            waitSince = 0;
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
              _context.next = 23;
              break;
            }

            value = _value;
            duration = intervalMs - (Date.now() - waitSince);
            _context.next = 17;
            return _awaitAsyncGenerator(duration > 0 && delay(duration));

          case 17:
            waitSince = Date.now();
            _context.next = 20;
            return value;

          case 20:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 23:
            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 29:
            _context.prev = 29;
            _context.prev = 30;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 34;
              break;
            }

            _context.next = 34;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 34:
            _context.prev = 34;

            if (!_didIteratorError) {
              _context.next = 37;
              break;
            }

            throw _iteratorError;

          case 37:
            return _context.finish(34);

          case 38:
            return _context.finish(29);

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 25, 29, 39], [30,, 34, 38]]);
  }));
  return _asyncThrottle.apply(this, arguments);
}

var asyncThrottle = /*#__PURE__*/asyncIterableCurry(__asyncThrottle, {
  validateArgs: function validateArgs(args) {
    if (!isPositiveInteger(args[1], true)) {
      throw new Error('intervalMs argument to asyncThrottle must be a number > 0');
    }
  }
});
exports.asyncThrottle = asyncThrottle;