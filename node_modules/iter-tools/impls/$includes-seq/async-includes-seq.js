var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry,
    asyncEnsureIterable = _require.asyncEnsureIterable;

var _require2 = require('../$includes-any-seq/async-includes-any-seq.js'),
    __asyncIncludesAnySeq = _require2.__asyncIncludesAnySeq;

function __asyncIncludesSeq(iterable, seq) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __asyncIncludesAnySeq(iterable, [seq], same);
}

exports.__asyncIncludesSeq = __asyncIncludesSeq;
var asyncIncludesSeq = /*#__PURE__*/asyncIterableCurry(__asyncIncludesSeq, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    args[1] = asyncEnsureIterable(args[1]);
  }
});
exports.asyncIncludesSeq = asyncIncludesSeq;