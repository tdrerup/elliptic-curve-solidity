var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$join-with-seq/async-join-with-seq.js'),
    __asyncJoinWithSeq = _require2.__asyncJoinWithSeq;

function __asyncJoinWith(source, separator) {
  return __asyncJoinWithSeq(source, [separator]);
}

exports.__asyncJoinWith = __asyncJoinWith;
var asyncJoinWith = /*#__PURE__*/asyncIterableCurry(__asyncJoinWith, {
  validateArgs: function validateArgs(args) {}
});
exports.asyncJoinWith = asyncJoinWith;