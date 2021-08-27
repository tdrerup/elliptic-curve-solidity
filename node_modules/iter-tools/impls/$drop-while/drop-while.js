var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__dropWhile);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

function __dropWhile(source, predicate) {
  var drop, c, _iterator, _step, value;

  return _regeneratorRuntime.wrap(function __dropWhile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          drop = true;
          c = 0;
          _iterator = _createForOfIteratorHelper(source);
          _context.prev = 3;

          _iterator.s();

        case 5:
          if ((_step = _iterator.n()).done) {
            _context.next = 18;
            break;
          }

          value = _step.value;

          if (drop) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return value;

        case 10:
          _context.next = 16;
          break;

        case 12:
          drop = predicate(value, c++);

          if (drop) {
            _context.next = 16;
            break;
          }

          _context.next = 16;
          return value;

        case 16:
          _context.next = 5;
          break;

        case 18:
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](3);

          _iterator.e(_context.t0);

        case 23:
          _context.prev = 23;

          _iterator.f();

          return _context.finish(23);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[3, 20, 23, 26]]);
}

exports.__dropWhile = __dropWhile;
var dropWhile = /*#__PURE__*/iterableCurry(__dropWhile);
exports.dropWhile = dropWhile;