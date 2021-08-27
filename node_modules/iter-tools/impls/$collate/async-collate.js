var _regeneratorRuntime = require("@babel/runtime/regenerator");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$interleave/async-interleave.js'),
    __asyncInterleave = _require2.__asyncInterleave;

function asyncByComparison(_x, _x2) {
  return _asyncByComparison.apply(this, arguments);
}

function _asyncByComparison() {
  _asyncByComparison = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref, all) {
    var compare,
        candidate,
        _len,
        peekrs,
        _key,
        _iterator,
        _step,
        peekr,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            compare = _ref.compare;

            for (_len = _args.length, peekrs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              peekrs[_key - 2] = _args[_key];
            }

          case 2:
            if (all.done) {
              _context.next = 12;
              break;
            }

            candidate = all.value;
            _iterator = _createForOfIteratorHelper(peekrs);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                peekr = _step.value;

                if (!peekr.done && compare(peekr.value, candidate.value) < 0) {
                  candidate = peekr;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _context.next = 8;
            return candidate.value;

          case 8:
            _context.next = 10;
            return _awaitAsyncGenerator(candidate.advance());

          case 10:
            _context.next = 2;
            break;

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncByComparison.apply(this, arguments);
}

function __asyncCollate(sources, compare) {
  return __asyncInterleave(sources, asyncByComparison, {
    compare: compare
  });
}

exports.__asyncCollate = __asyncCollate;
var asyncCollate = /*#__PURE__*/asyncIterableCurry(__asyncCollate, {
  variadic: true
});
exports.asyncCollate = asyncCollate;