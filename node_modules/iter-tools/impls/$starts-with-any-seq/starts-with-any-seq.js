var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry,
    ensureIterable = _require.ensureIterable;

var _require2 = require('../$zip-all/zip-all.js'),
    __zipAll = _require2.__zipAll;

var _require3 = require('../$peekerate/peekerate.js'),
    __peekerate = _require3.__peekerate;

var none = Symbol('none');

function _startsWithAnySeq(peekr, subseqPeekr, same) {
  if (subseqPeekr.done || subseqPeekr.value.includes(none)) return true;
  var matches = subseqPeekr.value.map(function () {
    return true;
  });

  while (!peekr.done && !subseqPeekr.done) {
    var value = peekr.value;
    var seqValue = subseqPeekr.value;

    for (var i = 0; i < seqValue.length; i++) {
      if (!matches[i]) continue;

      if (seqValue[i] === none) {
        return true;
      } else {
        matches[i] = same(seqValue[i], value);
      }
    }

    subseqPeekr.advance();
    peekr.advance();
  }

  return subseqPeekr.done && matches.includes(true);
}

exports._startsWithAnySeq = _startsWithAnySeq;

function __startsWithAnySeq(iterable, seqs) {
  var same = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.is;
  if (!seqs.length) return false;

  var peekr = __peekerate(iterable);

  var subseqPeekr = __peekerate(__zipAll(seqs, {
    filler: none
  }));

  var seqFound = _startsWithAnySeq(peekr, subseqPeekr, same);

  subseqPeekr["return"]();
  peekr["return"]();
  return seqFound;
}

exports.__startsWithAnySeq = __startsWithAnySeq;
var startsWithAnySeq = /*#__PURE__*/iterableCurry(__startsWithAnySeq, {
  minArgs: 1,
  maxArgs: 2,
  reduces: true,
  validateArgs: function validateArgs(args) {
    args[1] = args[1].map(function (arg) {
      return ensureIterable(arg);
    });
  }
});
exports.startsWithAnySeq = startsWithAnySeq;