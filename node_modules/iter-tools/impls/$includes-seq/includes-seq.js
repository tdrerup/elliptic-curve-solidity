var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry,
    ensureIterable = _require.ensureIterable;

var _require2 = require('../$includes-any-seq/includes-any-seq.js'),
    __includesAnySeq = _require2.__includesAnySeq;

function __includesSeq(iterable, seq) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __includesAnySeq(iterable, [seq], same);
}

exports.__includesSeq = __includesSeq;
var includesSeq = /*#__PURE__*/iterableCurry(__includesSeq, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    args[1] = ensureIterable(args[1]);
  }
});
exports.includesSeq = includesSeq;