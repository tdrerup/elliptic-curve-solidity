function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/any-seq.js'),
    seqsToArray = _require2.seqsToArray;

var _require3 = require('../$window-ahead/window-ahead.js'),
    __windowAhead = _require3.__windowAhead;

var _require4 = require('../$starts-with-any-seq/starts-with-any-seq.js'),
    __startsWithAnySeq = _require4.__startsWithAnySeq;

function __includesAnySeq(iterable, seqs) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  var seqsArr = seqsToArray(seqs);
  if (!seqsArr.length) return false;
  if (seqsArr.find(function (seq) {
    return !seq.length;
  })) return true;
  var maxMatchLength = seqsArr.reduce(function (max, _ref) {
    var length = _ref.length;
    return Math.max(max, length);
  }, 1);

  var _iterator = _createForOfIteratorHelper(__windowAhead(iterable, maxMatchLength)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var buffer = _step.value;

      if (__startsWithAnySeq(buffer, seqsArr, same)) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}

exports.__includesAnySeq = __includesAnySeq;
var includesAnySeq = /*#__PURE__*/iterableCurry(__includesAnySeq, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true
});
exports.includesAnySeq = includesAnySeq;