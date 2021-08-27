var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

function __asyncTap(_x, _x2) {
  return _asyncTap.apply(this, arguments);
}

exports.__asyncTap = __asyncTap;

function _asyncTap() {
  _asyncTap = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, callback) {
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
              _context.next = 20;
              break;
            }

            value = _value;
            callback(value, c++);
            _context.next = 17;
            return value;

          case 17:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 20:
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 26:
            _context.prev = 26;
            _context.prev = 27;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 31;
              break;
            }

            _context.next = 31;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 31:
            _context.prev = 31;

            if (!_didIteratorError) {
              _context.next = 34;
              break;
            }

            throw _iteratorError;

          case 34:
            return _context.finish(31);

          case 35:
            return _context.finish(26);

          case 36:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 22, 26, 36], [27,, 31, 35]]);
  }));
  return _asyncTap.apply(this, arguments);
}

var asyncTap = /*#__PURE__*/asyncIterableCurry(__asyncTap);
exports.asyncTap = asyncTap;