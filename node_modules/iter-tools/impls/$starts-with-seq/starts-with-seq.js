var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry,
    ensureIterable = _require.ensureIterable;

var _require2 = require('../$starts-with-any-seq/starts-with-any-seq.js'),
    __startsWithAnySeq = _require2.__startsWithAnySeq;

function __startsWithSeq(iterable, seq) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __startsWithAnySeq(iterable, [seq], same);
}

exports.__startsWithSeq = __startsWithSeq;
var startsWithSeq = /*#__PURE__*/iterableCurry(__startsWithSeq, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    args[1] = ensureIterable(args[1]);
  }
});
exports.startsWithSeq = startsWithSeq;