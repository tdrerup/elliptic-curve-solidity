var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../$interleave/async-interleave.js'),
    __asyncInterleave = _require2.__asyncInterleave;

var _require3 = require('./internal/validate-args.js'),
    makeValidateArgs = _require3.makeValidateArgs;

function asyncByPosition(_x, _x2) {
  return _asyncByPosition.apply(this, arguments);
}

function _asyncByPosition() {
  _asyncByPosition = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref, all) {
    var start,
        step,
        _len,
        peekrs,
        _key,
        i,
        peekr,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = _ref.start, step = _ref.step;

            for (_len = _args.length, peekrs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              peekrs[_key - 2] = _args[_key];
            }

            start = start % peekrs.length;
            i = start;

          case 4:
            if (all.done) {
              _context.next = 14;
              break;
            }

            peekr = peekrs[i];

            if (peekr.done) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return peekr.value;

          case 9:
            _context.next = 11;
            return _awaitAsyncGenerator(peekr.advance());

          case 11:
            i = (i + step) % peekrs.length;
            _context.next = 4;
            break;

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncByPosition.apply(this, arguments);
}

function __asyncRoundRobin(sources) {
  var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return __asyncInterleave(sources, asyncByPosition, {
    start: start,
    step: step
  });
}

exports.__asyncRoundRobin = __asyncRoundRobin;
var asyncRoundRobin = /*#__PURE__*/asyncIterableCurry(__asyncRoundRobin, {
  variadic: true,
  minArgs: 0,
  maxArgs: 2,
  validateArgs: /*#__PURE__*/makeValidateArgs('asyncRoundRobin')
});
exports.asyncRoundRobin = asyncRoundRobin;