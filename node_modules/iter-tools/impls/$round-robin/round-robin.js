var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(byPosition);

var _require = require('../../internal/iterable.js'),
    iterableCurry = _require.iterableCurry;

var _require2 = require('../$interleave/interleave.js'),
    __interleave = _require2.__interleave;

var _require3 = require('./internal/validate-args.js'),
    makeValidateArgs = _require3.makeValidateArgs;

function byPosition(_ref, all) {
  var start,
      step,
      _len,
      peekrs,
      _key,
      i,
      peekr,
      _args = arguments;

  return _regeneratorRuntime.wrap(function byPosition$(_context) {
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
            _context.next = 13;
            break;
          }

          peekr = peekrs[i];

          if (peekr.done) {
            _context.next = 10;
            break;
          }

          _context.next = 9;
          return peekr.value;

        case 9:
          peekr.advance();

        case 10:
          i = (i + step) % peekrs.length;
          _context.next = 4;
          break;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function __roundRobin(sources) {
  var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return __interleave(sources, byPosition, {
    start: start,
    step: step
  });
}

exports.__roundRobin = __roundRobin;
var roundRobin = /*#__PURE__*/iterableCurry(__roundRobin, {
  variadic: true,
  minArgs: 0,
  maxArgs: 2,
  validateArgs: /*#__PURE__*/makeValidateArgs('roundRobin')
});
exports.roundRobin = roundRobin;