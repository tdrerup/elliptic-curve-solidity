var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$cycle-times/cycle-times.js'),
    __cycleTimes = _require2.__cycleTimes;

function __cycle(source) {
  return __cycleTimes(source, Infinity);
}

exports.__cycle = __cycle;
var cycle = /*#__PURE__*/iterableCurry(__cycle);
exports.cycle = cycle;