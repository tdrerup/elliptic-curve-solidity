var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/circular-buffer.js'),
    CircularBuffer = _require2.CircularBuffer,
    ReadOnlyCircularBuffer = _require2.ReadOnlyCircularBuffer;

function __asyncWindowAhead(_x, _x2) {
  return _asyncWindowAhead.apply(this, arguments);
}

exports.__asyncWindowAhead = __asyncWindowAhead;

function _asyncWindowAhead() {
  _asyncWindowAhead = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, size) {
    var _ref,
        _ref$filler,
        filler,
        _ref$useFiller,
        useFiller,
        buffer,
        bufferReadProxy,
        len,
        _iteratorNormalCompletion,
        _didIteratorError,
        _iteratorError,
        _iterator,
        _step,
        _value,
        value,
        i,
        _i,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 2 && _args[2] !== undefined ? _args[2] : {}, _ref$filler = _ref.filler, filler = _ref$filler === void 0 ? undefined : _ref$filler, _ref$useFiller = _ref.useFiller, useFiller = _ref$useFiller === void 0 ? true : _ref$useFiller;
            buffer = new CircularBuffer(size);
            bufferReadProxy = new ReadOnlyCircularBuffer(buffer);
            len = 0;
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
              _context.next = 25;
              break;
            }

            value = _value;
            buffer.push(value);

            if (!buffer.isFull()) {
              _context.next = 21;
              break;
            }

            _context.next = 21;
            return bufferReadProxy;

          case 21:
            len++;

          case 22:
            _iteratorNormalCompletion = true;
            _context.next = 8;
            break;

          case 25:
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 31:
            _context.prev = 31;
            _context.prev = 32;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 36;
              break;
            }

            _context.next = 36;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 36:
            _context.prev = 36;

            if (!_didIteratorError) {
              _context.next = 39;
              break;
            }

            throw _iteratorError;

          case 39:
            return _context.finish(36);

          case 40:
            return _context.finish(31);

          case 41:
            if (useFiller) {
              for (i = len; i < size; i++) {
                buffer.push(filler);
              }
            }

            if (!(len > 0 && len < size)) {
              _context.next = 45;
              break;
            }

            _context.next = 45;
            return bufferReadProxy;

          case 45:
            _i = 0;

          case 46:
            if (!(_i < Math.min(size, len) - 1)) {
              _context.next = 54;
              break;
            }

            buffer.shift();

            if (useFiller) {
              buffer.push(filler);
            }

            _context.next = 51;
            return bufferReadProxy;

          case 51:
            _i++;
            _context.next = 46;
            break;

          case 54:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 27, 31, 41], [32,, 36, 40]]);
  }));
  return _asyncWindowAhead.apply(this, arguments);
}

var asyncWindowAhead = /*#__PURE__*/asyncIterableCurry(__asyncWindowAhead, {
  minArgs: 1,
  maxArgs: 2,
  validateArgs: function validateArgs(args) {
    if (typeof args[1] !== 'number') {
      throw new Error('asyncWindowAhead'.concat(" must be passed a numeric size"));
    }
  }
});
exports.asyncWindowAhead = asyncWindowAhead;