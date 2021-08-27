var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__zip);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/parallel-each.js'),
    parallelEach = _require2.parallelEach;

var _require3 = require('../$peekerate/peekerate.js'),
    __peekerate = _require3.__peekerate;

var _require4 = require('../$map/map.js'),
    __map = _require4.__map;

var _require5 = require('../$some/some.js'),
    __some = _require5.__some;

var _require6 = require('../$to-array/to-array.js'),
    __toArray = _require6.__toArray;

var isDone = function isDone(peekr) {
  return peekr.done;
};

function __zip(sources) {
  var peekrs, done, _iterator, _step, peekr;

  return _regeneratorRuntime.wrap(function __zip$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          peekrs = __toArray(__map(sources, __peekerate));
          done = __some(peekrs, isDone);
          _context.prev = 2;

        case 3:
          if (done) {
            _context.next = 11;
            break;
          }

          _context.next = 6;
          return peekrs.map(function (_ref) {
            var value = _ref.value;
            return value;
          });

        case 6:
          _iterator = _createForOfIteratorHelper(peekrs);

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              peekr = _step.value;
              peekr.advance();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          done = __some(peekrs, isDone);
          _context.next = 3;
          break;

        case 11:
          _context.prev = 11;
          parallelEach(peekrs, function (peekr) {
            return peekr["return"]();
          });
          return _context.finish(11);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2,, 11, 14]]);
}

exports.__zip = __zip;
var zip = /*#__PURE__*/iterableCurry(__zip, {
  variadic: true
});
exports.zip = zip;