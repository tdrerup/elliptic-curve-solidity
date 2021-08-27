var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

function __asyncStr(_x) {
  return _asyncStr.apply(this, arguments);
}

function _asyncStr() {
  _asyncStr = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(chars) {
    var result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _char;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = '';
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = _asyncIterator(chars);

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
              _context.next = 18;
              break;
            }

            _char = _value;
            result += _char.toString();

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 29;
              break;
            }

            _context.next = 29;
            return _iterator["return"]();

          case 29:
            _context.prev = 29;

            if (!_didIteratorError) {
              _context.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context.finish(29);

          case 33:
            return _context.finish(24);

          case 34:
            return _context.abrupt("return", result);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 20, 24, 34], [25,, 29, 33]]);
  }));
  return _asyncStr.apply(this, arguments);
}

exports.__asyncStr = __asyncStr;
var asyncStr = /*#__PURE__*/asyncIterableCurry(__asyncStr, {
  reduces: true
});
exports.asyncStr = asyncStr;