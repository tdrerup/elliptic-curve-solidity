var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry,
    asyncEnsureIterable = _require.asyncEnsureIterable;

var _require2 = require('../$starts-with-any-seq/async-starts-with-any-seq.js'),
    __asyncStartsWithAnySeq = _require2.__asyncStartsWithAnySeq;

function __asyncStartsWithSeq(iterable, seq) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  return __asyncStartsWithAnySeq(iterable, [seq], same);
}

exports.__asyncStartsWithSeq = __asyncStartsWithSeq;
var asyncStartsWithSeq = /*#__PURE__*/asyncIterableCurry(__asyncStartsWithSeq, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    args[1] = asyncEnsureIterable(args[1]);
  }
});
exports.asyncStartsWithSeq = asyncStartsWithSeq;