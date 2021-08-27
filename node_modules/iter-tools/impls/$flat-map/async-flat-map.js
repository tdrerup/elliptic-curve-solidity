var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$map/async-map.js'),
    __asyncMap = _require2.__asyncMap;

function __asyncFlatMap(_x, _x2) {
  return _asyncFlatMap.apply(this, arguments);
}

exports.__asyncFlatMap = __asyncFlatMap;

function _asyncFlatMap() {
  _asyncFlatMap = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, func) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 2;
            _iterator = _asyncIterator(__asyncMap(source, func));

          case 4:
            _context.next = 6;
            return _awaitAsyncGenerator(_iterator.next());

          case 6:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 10;
            return _awaitAsyncGenerator(_step.value);

          case 10:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 17;
              break;
            }

            value = _value;
            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(value), _awaitAsyncGenerator), "t0", 14);

          case 14:
            _iteratorNormalCompletion = true;
            _context.next = 4;
            break;

          case 17:
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t1 = _context["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 23:
            _context.prev = 23;
            _context.prev = 24;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 28;
              break;
            }

            _context.next = 28;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 28:
            _context.prev = 28;

            if (!_didIteratorError) {
              _context.next = 31;
              break;
            }

            throw _iteratorError;

          case 31:
            return _context.finish(28);

          case 32:
            return _context.finish(23);

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 19, 23, 33], [24,, 28, 32]]);
  }));
  return _asyncFlatMap.apply(this, arguments);
}

var asyncFlatMap = /*#__PURE__*/asyncIterableCurry(__asyncFlatMap);
exports.asyncFlatMap = asyncFlatMap;