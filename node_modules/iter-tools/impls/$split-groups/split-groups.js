var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(groupingSpliterator);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$spliterate-grouped/spliterate-grouped.js'),
    __spliterateGrouped = _require2.__spliterateGrouped;

var _require3 = require('../$peekerate/peekerate.js'),
    __peekerate = _require3.__peekerate;

var initialKey = Symbol('initial group key');

function groupingSpliterator(split, _ref, source) {
  var getKey, peekr, key, idx, lastKey;
  return _regeneratorRuntime.wrap(function groupingSpliterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          getKey = _ref.getKey;
          peekr = __peekerate(source);
          key = initialKey;
          idx = 0;

        case 4:
          if (peekr.done) {
            _context.next = 17;
            break;
          }

          lastKey = key;
          key = getKey(peekr.value, idx++);

          if (!(lastKey !== key)) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return split;

        case 10:
          _context.next = 12;
          return key;

        case 12:
          _context.next = 14;
          return peekr.value;

        case 14:
          peekr.advance();
          _context.next = 4;
          break;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function __splitGroups(source) {
  var getKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };
  return __spliterateGrouped(source, groupingSpliterator, {
    getKey: getKey
  });
}

exports.__splitGroups = __splitGroups;
var splitGroups = /*#__PURE__*/iterableCurry(__splitGroups, {
  minArgs: 0,
  maxArgs: 1
});
exports.splitGroups = splitGroups;