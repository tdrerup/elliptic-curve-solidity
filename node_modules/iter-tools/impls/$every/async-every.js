var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

function __asyncEvery(_x, _x2) {
  return _asyncEvery.apply(this, arguments);
}

function _asyncEvery() {
  _asyncEvery = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable, predicate) {
    var c, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            c = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = _asyncIterator(iterable);

          case 5:
            _context.next = 7;
            return _iterator.next();

          case 7:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 11;
            return _step.value;

          case 11:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 21;
              break;
            }

            value = _value;
            _context.next = 16;
            return predicate(value, c++);

          case 16:
            if (_context.sent) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", false);

          case 18:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 27:
            _context.prev = 27;
            _context.prev = 28;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 32;
              break;
            }

            _context.next = 32;
            return _iterator["return"]();

          case 32:
            _context.prev = 32;

            if (!_didIteratorError) {
              _context.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context.finish(32);

          case 36:
            return _context.finish(27);

          case 37:
            return _context.abrupt("return", true);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 23, 27, 37], [28,, 32, 36]]);
  }));
  return _asyncEvery.apply(this, arguments);
}

exports.__asyncEvery = __asyncEvery;
var asyncEvery = /*#__PURE__*/asyncIterableCurry(__asyncEvery, {
  reduces: true
});
exports.asyncEvery = asyncEvery;