function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$zip-all/zip-all.js'),
    __zipAll = _require2.__zipAll;

var _require3 = require('../$slice/slice.js'),
    __sliceFromStart = _require3.__sliceFromStart;

var none = Symbol('none');
var zipAllConfig = {
  filler: none
};

function __equal(iterables) {
  var same = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object.is;
  if (iterables.length <= 1) return true;

  var _iterator = _createForOfIteratorHelper(__zipAll(iterables, zipAllConfig)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var stepValues = _step.value;
      var firstValue = stepValues[0];

      var _iterator2 = _createForOfIteratorHelper(__sliceFromStart(stepValues, 1)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var value = _step2.value;
          if (!same(value, firstValue)) return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}

exports.__equal = __equal;
var equal = /*#__PURE__*/iterableCurry(__equal, {
  minArgs: 0,
  maxArgs: 1,
  variadic: true,
  reduces: true
});
exports.equal = equal;