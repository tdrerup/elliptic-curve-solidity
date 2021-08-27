var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _slicedToArray = require("@babel/runtime/helpers/slicedToArray");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncEnsureIterable = _require.asyncEnsureIterable;

function __asyncToObject(_x) {
  return _asyncToObject.apply(this, arguments);
}

function _asyncToObject() {
  _asyncToObject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterable) {
    var proto,
        obj,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        _value,
        _value2,
        _value3,
        key,
        value,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            proto = _args.length > 1 && _args[1] !== undefined ? _args[1] : Object.prototype;
            obj = Object.create(proto);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 4;
            _iterator = _asyncIterator(iterable);

          case 6:
            _context.next = 8;
            return _iterator.next();

          case 8:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 12;
            return _step.value;

          case 12:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 19;
              break;
            }

            _value2 = _value, _value3 = _slicedToArray(_value2, 2), key = _value3[0], value = _value3[1];
            obj[key] = value;

          case 16:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 19:
            _context.next = 25;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 25:
            _context.prev = 25;
            _context.prev = 26;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 30;
              break;
            }

            _context.next = 30;
            return _iterator["return"]();

          case 30:
            _context.prev = 30;

            if (!_didIteratorError) {
              _context.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context.finish(30);

          case 34:
            return _context.finish(25);

          case 35:
            return _context.abrupt("return", obj);

          case 36:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 21, 25, 35], [26,, 30, 34]]);
  }));
  return _asyncToObject.apply(this, arguments);
}

exports.__asyncToObject = __asyncToObject;

function asyncToObject(iterable, proto) {
  return __asyncToObject(asyncEnsureIterable(iterable), proto);
}

exports.asyncToObject = asyncToObject;