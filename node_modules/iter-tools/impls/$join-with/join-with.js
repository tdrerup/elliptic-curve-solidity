var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$join-with-seq/join-with-seq.js'),
    __joinWithSeq = _require2.__joinWithSeq;

function __joinWith(source, separator) {
  return __joinWithSeq(source, [separator]);
}

exports.__joinWith = __joinWith;
var joinWith = /*#__PURE__*/iterableCurry(__joinWith, {
  validateArgs: function validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn("For string inputs use joinWithSeq instead of joinWith");
    }
  }
});
exports.joinWith = joinWith;