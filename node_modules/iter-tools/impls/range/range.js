var _slicedToArray = require("@babel/runtime/helpers/slicedToArray");

var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__range);

var _require = require('../../internal/iterable.js'),
    wrapWithIterableIterator = _require.wrapWithIterableIterator;

var _require2 = require('../../internal/number.js'),
    isInteger = _require2.isInteger,
    isIntegerOrInfinite = _require2.isIntegerOrInfinite;

var _require3 = require('../is-object/is-object.js'),
    isObject = _require3.isObject;

var _require4 = require('../not-undefined/not-undefined.js'),
    notUndefined = _require4.notUndefined;

function __range() {
  var start,
      end,
      step,
      i,
      _args = arguments;
  return _regeneratorRuntime.wrap(function __range$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          start = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
          end = _args.length > 1 && _args[1] !== undefined ? _args[1] : Infinity;
          step = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
          i = start;

        case 4:
          if (!(step > 0 ? i < end : i > end)) {
            _context.next = 10;
            break;
          }

          _context.next = 7;
          return i;

        case 7:
          i += step;
          _context.next = 4;
          break;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

exports.__range = __range;
var range = /*#__PURE__*/wrapWithIterableIterator(__range, {
  growRight: true,
  validateArgs: function validateArgs(args) {
    var _args2 = _slicedToArray(args, 3),
        optsOrEndOrStart = _args2[0],
        _args2$ = _args2[1],
        end = _args2$ === void 0 ? Infinity : _args2$,
        step = _args2[2];

    var start;

    if (isObject(optsOrEndOrStart)) {
      start = optsOrEndOrStart.start;
      end = optsOrEndOrStart.end;
      step = optsOrEndOrStart.step;
    } else {
      if (args.length > 1) {
        start = optsOrEndOrStart;
      } else {
        end = optsOrEndOrStart;
      }
    }

    if (notUndefined(start) && !isInteger(start)) {
      throw new TypeError('The specified start was not an integer');
    }

    if (notUndefined(end) && !isIntegerOrInfinite(end)) {
      throw new TypeError('The specified end was not an integer or infinite');
    }

    if (notUndefined(step) && !isInteger(step, true)) {
      throw new TypeError('The specified step was not a non-zero integer');
    }

    args[0] = start;
    args[1] = end;
    args[2] = step;
  }
});
exports.range = range;