var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

function __asyncConsume(_x) {
  return _asyncConsume.apply(this, arguments);
}

function _asyncConsume() {
  _asyncConsume = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 2;
            _iterator = _asyncIterator(iterable);

          case 4:
            _context.next = 6;
            return _iterator.next();

          case 6:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 10;
            return _step.value;

          case 10:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 16;
              break;
            }

            _ = _value;

          case 13:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 16:
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 22:
            _context.prev = 22;
            _context.prev = 23;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 27;
              break;
            }

            _context.next = 27;
            return _iterator["return"]();

          case 27:
            _context.prev = 27;

            if (!_didIteratorError) {
              _context.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return _context.finish(27);

          case 31:
            return _context.finish(22);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 18, 22, 32], [23,, 27, 31]]);
  }));
  return _asyncConsume.apply(this, arguments);
}

exports.__asyncConsume = __asyncConsume;
var asyncConsume = /*#__PURE__*/asyncIterableCurry(__asyncConsume, {
  reduces: true
});
exports.asyncConsume = asyncConsume;