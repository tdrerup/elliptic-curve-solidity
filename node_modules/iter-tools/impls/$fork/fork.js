var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__fork);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../../internal/fork.js'),
    Exchange = _require2.Exchange;

function __fork(source) {
  var exchange, dummyFork;
  return _regeneratorRuntime.wrap(function __fork$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          exchange = new Exchange(source[Symbol.iterator]());
          dummyFork = exchange.fork();
          _context.prev = 2;

        case 3:
          if (!true) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return exchange.fork();

        case 6:
          _context.next = 3;
          break;

        case 8:
          _context.prev = 8;
          dummyFork["return"]();
          return _context.finish(8);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2,, 8, 11]]);
}

exports.__fork = __fork;
var fork = /*#__PURE__*/iterableCurry(__fork, {
  forceSync: true
});
exports.fork = fork;