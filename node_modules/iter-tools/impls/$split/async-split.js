var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(iterableOf);

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$map/async-map.js'),
    __asyncMap = _require2.__asyncMap;

function iterableOf(value) {
  return _regeneratorRuntime.wrap(function iterableOf$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return value;

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function __asyncSplit(source) {
  return __asyncMap(source, function (value) {
    return iterableOf(value);
  });
}

exports.__asyncSplit = __asyncSplit;
var asyncSplit = /*#__PURE__*/asyncIterableCurry(__asyncSplit);
exports.asyncSplit = asyncSplit;