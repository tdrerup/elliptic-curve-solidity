var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry,
    ensureIterable = _require.ensureIterable;

var _require2 = require('../$split-on-any-seq/split-on-any-seq.js'),
    __splitOnAnySeq = _require2.__splitOnAnySeq;

function __splitOnSeq(source, separatorSeq) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __splitOnAnySeq(source, [separatorSeq], same);
}

exports.__splitOnSeq = __splitOnSeq;
var splitOnSeq = /*#__PURE__*/iterableCurry(__splitOnSeq, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs: function validateArgs(args) {
    args[1] = ensureIterable(args[1]);
  }
});
exports.splitOnSeq = splitOnSeq;