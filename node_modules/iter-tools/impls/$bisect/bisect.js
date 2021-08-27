function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(indexStrategy),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(conditionStrategy);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/bisector.js'),
    Bisector = _require2.Bisector;

var _require3 = require('../$to-array/to-array.js'),
    __toArray = _require3.__toArray;

var _require4 = require('../$peekerate/peekerate.js'),
    __peekerate = _require4.__peekerate;

function indexStrategy(split, _ref, source) {
  var at, _source, idx, peekr;

  return _regeneratorRuntime.wrap(function indexStrategy$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          at = _ref.at;
          _source = at < 0 ? __toArray(source) : source;
          idx = at < 0 ? _source.length + at : at;
          peekr = __peekerate(_source);
          _context.prev = 4;

        case 5:
          if (peekr.done) {
            _context.next = 14;
            break;
          }

          if (!(peekr.index === idx)) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return split;

        case 9:
          _context.next = 11;
          return peekr.value;

        case 11:
          peekr.advance();
          _context.next = 5;
          break;

        case 14:
          _context.prev = 14;
          peekr["return"]();
          return _context.finish(14);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[4,, 14, 17]]);
}

exports.indexStrategy = indexStrategy;

function conditionStrategy(split, _ref2, source) {
  var predicate, i, splat, _iterator, _step, value;

  return _regeneratorRuntime.wrap(function conditionStrategy$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          predicate = _ref2.at;
          i = 0;
          splat = false;
          _iterator = _createForOfIteratorHelper(source);
          _context2.prev = 4;

          _iterator.s();

        case 6:
          if ((_step = _iterator.n()).done) {
            _context2.next = 16;
            break;
          }

          value = _step.value;

          if (!(!splat && predicate(value, i++))) {
            _context2.next = 12;
            break;
          }

          _context2.next = 11;
          return split;

        case 11:
          splat = true;

        case 12:
          _context2.next = 14;
          return value;

        case 14:
          _context2.next = 6;
          break;

        case 16:
          _context2.next = 21;
          break;

        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](4);

          _iterator.e(_context2.t0);

        case 21:
          _context2.prev = 21;

          _iterator.f();

          return _context2.finish(21);

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[4, 18, 21, 24]]);
}

exports.conditionStrategy = conditionStrategy;

function __bisect(source, at) {
  var strategy = typeof at === 'number' ? indexStrategy : conditionStrategy;
  return new Bisector(source, strategy, {
    at: at
  });
}

exports.__bisect = __bisect;
var bisect = /*#__PURE__*/iterableCurry(__bisect, {
  forceSync: true
});
exports.bisect = bisect;