var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry;

var _require2 = require('../../internal/circular-buffer.js'),
    CircularBuffer = _require2.CircularBuffer,
    ReadOnlyCircularBuffer = _require2.ReadOnlyCircularBuffer;

function __asyncWindow(_x, _x2) {
  return _asyncWindow.apply(this, arguments);
}

exports.__asyncWindow = __asyncWindow;

function _asyncWindow() {
  _asyncWindow = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source, size) {
    var buffer, bufferReadProxy, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, value;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            buffer = new CircularBuffer(size);
            bufferReadProxy = new ReadOnlyCircularBuffer(buffer);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 4;
            _iterator = _asyncIterator(source);

          case 6:
            _context.next = 8;
            return _awaitAsyncGenerator(_iterator.next());

          case 8:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 12;
            return _awaitAsyncGenerator(_step.value);

          case 12:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 22;
              break;
            }

            value = _value;
            buffer.push(value);

            if (!buffer.isFull()) {
              _context.next = 19;
              break;
            }

            _context.next = 19;
            return bufferReadProxy;

          case 19:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 22:
            _context.next = 28;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 28:
            _context.prev = 28;
            _context.prev = 29;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 33;
              break;
            }

            _context.next = 33;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 33:
            _context.prev = 33;

            if (!_didIteratorError) {
              _context.next = 36;
              break;
            }

            throw _iteratorError;

          case 36:
            return _context.finish(33);

          case 37:
            return _context.finish(28);

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 24, 28, 38], [29,, 33, 37]]);
  }));
  return _asyncWindow.apply(this, arguments);
}

var asyncWindow = /*#__PURE__*/asyncIterableCurry(__asyncWindow, {
  validateArgs: function validateArgs(args) {
    if (typeof args[1] !== 'number') {
      throw new Error('asyncWindow'.concat(" must be passed a numeric size"));
    }
  }
});
exports.asyncWindow = asyncWindow;