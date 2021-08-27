var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry,
    asyncEnsureIterable = _require.asyncEnsureIterable;

var _require2 = require('../$split-on-any-seq/async-split-on-any-seq.js'),
    __asyncSplitOnAnySeq = _require2.__asyncSplitOnAnySeq;

function __asyncSplitOnSeq(source, separatorSeq) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __asyncSplitOnAnySeq(source, [separatorSeq], same);
}

exports.__asyncSplitOnSeq = __asyncSplitOnSeq;
var asyncSplitOnSeq = /*#__PURE__*/asyncIterableCurry(__asyncSplitOnSeq, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs: function validateArgs(args) {
    args[1] = asyncEnsureIterable(args[1]);
  }
});
exports.asyncSplitOnSeq = asyncSplitOnSeq;