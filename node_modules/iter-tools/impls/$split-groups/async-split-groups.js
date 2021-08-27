var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$spliterate-grouped/async-spliterate-grouped.js'),
    __asyncSpliterateGrouped = _require2.__asyncSpliterateGrouped;

var _require3 = require('../$peekerate/async-peekerate.js'),
    __asyncPeekerate = _require3.__asyncPeekerate;

var initialKey = Symbol('initial group key');

function asyncGroupingSpliterator(_x, _x2, _x3) {
  return _asyncGroupingSpliterator.apply(this, arguments);
}

function _asyncGroupingSpliterator() {
  _asyncGroupingSpliterator = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(split, _ref, source) {
    var getKey, peekr, key, idx, lastKey;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getKey = _ref.getKey;
            _context.next = 3;
            return _awaitAsyncGenerator(__asyncPeekerate(source));

          case 3:
            peekr = _context.sent;
            key = initialKey;
            idx = 0;

          case 6:
            if (peekr.done) {
              _context.next = 22;
              break;
            }

            lastKey = key;
            _context.next = 10;
            return _awaitAsyncGenerator(getKey(peekr.value, idx++));

          case 10:
            key = _context.sent;

            if (!(lastKey !== key)) {
              _context.next = 16;
              break;
            }

            _context.next = 14;
            return split;

          case 14:
            _context.next = 16;
            return key;

          case 16:
            _context.next = 18;
            return peekr.value;

          case 18:
            _context.next = 20;
            return _awaitAsyncGenerator(peekr.advance());

          case 20:
            _context.next = 6;
            break;

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncGroupingSpliterator.apply(this, arguments);
}

function __asyncSplitGroups(source) {
  var getKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };
  return __asyncSpliterateGrouped(source, asyncGroupingSpliterator, {
    getKey: getKey
  });
}

exports.__asyncSplitGroups = __asyncSplitGroups;
var asyncSplitGroups = /*#__PURE__*/asyncIterableCurry(__asyncSplitGroups, {
  minArgs: 0,
  maxArgs: 1
});
exports.asyncSplitGroups = asyncSplitGroups;