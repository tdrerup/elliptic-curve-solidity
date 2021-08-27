var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$zip-all/async-zip-all.js'),
    __asyncZipAll = _require2.__asyncZipAll;

var _require3 = require('../$slice/slice.js'),
    __sliceFromStart = _require3.__sliceFromStart;

var none = Symbol('none');
var zipAllConfig = {
  filler: none
};

function __asyncEqual(_x) {
  return _asyncEqual.apply(this, arguments);
}

function _asyncEqual() {
  _asyncEqual = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(iterables) {
    var same,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        _value,
        stepValues,
        firstValue,
        _iterator2,
        _step2,
        value,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            same = _args.length > 1 && _args[1] !== undefined ? _args[1] : Object.is;

            if (!(iterables.length <= 1)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", true);

          case 3:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 5;
            _iterator = _asyncIterator(__asyncZipAll(iterables, zipAllConfig));

          case 7:
            _context.next = 9;
            return _iterator.next();

          case 9:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 13;
            return _step.value;

          case 13:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 37;
              break;
            }

            stepValues = _value;
            firstValue = stepValues[0];
            _iterator2 = _createForOfIteratorHelper(__sliceFromStart(stepValues, 1));
            _context.prev = 18;

            _iterator2.s();

          case 20:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 26;
              break;
            }

            value = _step2.value;

            if (same(value, firstValue)) {
              _context.next = 24;
              break;
            }

            return _context.abrupt("return", false);

          case 24:
            _context.next = 20;
            break;

          case 26:
            _context.next = 31;
            break;

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](18);

            _iterator2.e(_context.t0);

          case 31:
            _context.prev = 31;

            _iterator2.f();

            return _context.finish(31);

          case 34:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 37:
            _context.next = 43;
            break;

          case 39:
            _context.prev = 39;
            _context.t1 = _context["catch"](5);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 43:
            _context.prev = 43;
            _context.prev = 44;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 48;
              break;
            }

            _context.next = 48;
            return _iterator["return"]();

          case 48:
            _context.prev = 48;

            if (!_didIteratorError) {
              _context.next = 51;
              break;
            }

            throw _iteratorError;

          case 51:
            return _context.finish(48);

          case 52:
            return _context.finish(43);

          case 53:
            return _context.abrupt("return", true);

          case 54:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 39, 43, 53], [18, 28, 31, 34], [44,, 48, 52]]);
  }));
  return _asyncEqual.apply(this, arguments);
}

exports.__asyncEqual = __asyncEqual;
var asyncEqual = /*#__PURE__*/asyncIterableCurry(__asyncEqual, {
  minArgs: 0,
  maxArgs: 1,
  variadic: true,
  reduces: true
});
exports.asyncEqual = asyncEqual;