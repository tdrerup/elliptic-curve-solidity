var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/circular-buffer.js'),
    CircularBuffer = _require2.CircularBuffer,
    ReadOnlyCircularBuffer = _require2.ReadOnlyCircularBuffer;

function __asyncWindowBehind(_x, _x2) {
  return _asyncWindowBehind.apply(this, arguments);
}

exports.__asyncWindowBehind = __asyncWindowBehind;

function _asyncWindowBehind() {
  _asyncWindowBehind = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, size) {
    var _ref,
        filler,
        buffer,
        bufferReadProxy,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        _value,
        value,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 2 && _args[2] !== undefined ? _args[2] : {}, filler = _ref.filler;
            buffer = new CircularBuffer(size);
            bufferReadProxy = new ReadOnlyCircularBuffer(buffer);
            buffer.fill(filler);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 6;
            _iterator = _asyncIterator(source);

          case 8:
            _context.next = 10;
            return _awaitAsyncGenerator(_iterator.next());

          case 10:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 14;
            return _awaitAsyncGenerator(_step.value);

          case 14:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 23;
              break;
            }

            value = _value;
            buffer.push(value);
            _context.next = 20;
            return bufferReadProxy;

          case 20:
            _iteratorNormalCompletion = true;
            _context.next = 8;
            break;

          case 23:
            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 29:
            _context.prev = 29;
            _context.prev = 30;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 34;
              break;
            }

            _context.next = 34;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 34:
            _context.prev = 34;

            if (!_didIteratorError) {
              _context.next = 37;
              break;
            }

            throw _iteratorError;

          case 37:
            return _context.finish(34);

          case 38:
            return _context.finish(29);

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 25, 29, 39], [30,, 34, 38]]);
  }));
  return _asyncWindowBehind.apply(this, arguments);
}

var asyncWindowBehind = /*#__PURE__*/asyncIterableCurry(__asyncWindowBehind, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs: function validateArgs(args) {
    if (typeof args[1] !== 'number') {
      throw new Error('asyncWindowBehind'.concat(" must be passed a numeric size"));
    }
  }
});
exports.asyncWindowBehind = asyncWindowBehind;