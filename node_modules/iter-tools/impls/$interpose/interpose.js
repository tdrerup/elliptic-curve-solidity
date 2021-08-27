var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$interpose-seq/interpose-seq.js'),
    __interposeSeq = _require2.__interposeSeq;

function __interpose(source, value) {
  return __interposeSeq(source, [value]);
}

exports.__interpose = __interpose;
var interpose = /*#__PURE__*/iterableCurry(__interpose, {
  validateArgs: function validateArgs(args) {
    if (true && typeof args[0] === 'string') {
      console.warn("For string inputs use interposeSeq instead of interpose");
    }
  }
});
exports.interpose = interpose;