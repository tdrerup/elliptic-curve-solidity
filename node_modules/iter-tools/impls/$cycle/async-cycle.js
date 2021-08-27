var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$cycle-times/async-cycle-times.js'),
    __asyncCycleTimes = _require2.__asyncCycleTimes;

function __asyncCycle(source) {
  return __asyncCycleTimes(source, Infinity);
}

exports.__asyncCycle = __asyncCycle;
var asyncCycle = /*#__PURE__*/asyncIterableCurry(__asyncCycle);
exports.asyncCycle = asyncCycle;