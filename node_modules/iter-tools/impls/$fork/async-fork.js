var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__asyncFork);

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/async-fork.js'),
    AsyncExchange = _require2.AsyncExchange;

function __asyncFork(source) {
  var exchange, dummyFork;
  return _regeneratorRuntime.wrap(function __asyncFork$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          exchange = new AsyncExchange(source[Symbol.asyncIterator]());
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

exports.__asyncFork = __asyncFork;
var asyncFork = /*#__PURE__*/asyncIterableCurry(__asyncFork, {
  forceSync: true
});
exports.asyncFork = asyncFork;