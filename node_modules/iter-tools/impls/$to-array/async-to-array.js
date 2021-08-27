var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncEnsureIterable = _require.asyncEnsureIterable;

function __asyncToArray(_x) {
  return _asyncToArray.apply(this, arguments);
}

function _asyncToArray() {
  _asyncToArray = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source) {
    var out, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            out = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = _asyncIterator(source);

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

            value = _value;
            out.push(value);

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
            return _context.abrupt("return", out);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 20, 24, 34], [25,, 29, 33]]);
  }));
  return _asyncToArray.apply(this, arguments);
}

exports.__asyncToArray = __asyncToArray;

function asyncToArray(source) {
  return __asyncToArray(asyncEnsureIterable(source));
}

exports.asyncToArray = asyncToArray;