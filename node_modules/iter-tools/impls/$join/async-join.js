var _require = require('../../internal/async-iterable.js'),
    asyncWrapWithIterableIterator = _require.asyncWrapWithIterableIterator,
    asyncEnsureIterable = _require.asyncEnsureIterable;

var _require2 = require('../$join-with-seq/async-join-with-seq.js'),
    __asyncJoinWithSeq = _require2.__asyncJoinWithSeq;

var emptySeq = [];

function __asyncJoin(source) {
  return __asyncJoinWithSeq(asyncEnsureIterable(source), emptySeq);
}

exports.__asyncJoin = __asyncJoin;
var asyncJoin = /*#__PURE__*/asyncWrapWithIterableIterator(__asyncJoin);
exports.asyncJoin = asyncJoin;