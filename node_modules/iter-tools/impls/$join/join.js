var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator,
    ensureIterable = _require.ensureIterable;

var _require2 = require('../$join-with-seq/join-with-seq.js'),
    __joinWithSeq = _require2.__joinWithSeq;

var emptySeq = [];

function __join(source) {
  return __joinWithSeq(ensureIterable(source), emptySeq);
}

exports.__join = __join;
var join = /*#__PURE__*/wrapWithIterableIterator(__join);
exports.join = join;