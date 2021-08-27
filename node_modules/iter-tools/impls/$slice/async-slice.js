var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncGeneratorDelegate = require("@babel/runtime/helpers/asyncGeneratorDelegate");

var _awaitAsyncGenerator = require("@babel/runtime/helpers/awaitAsyncGenerator");

var _wrapAsyncGenerator = require("@babel/runtime/helpers/wrapAsyncGenerator");

var _asyncIterator = require("@babel/runtime/helpers/asyncIterator");

var _require = require('../../internal/circular-buffer.js'),
    CircularBuffer = _require.CircularBuffer;

var _require2 = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require2.asyncIterableCurry;

var _require3 = require('./internal/validate-args.js'),
    makeValidateArgs = _require3.makeValidateArgs;

function __asyncSliceFromStart(_x) {
  return _asyncSliceFromStart.apply(this, arguments);
}

exports.__asyncSliceFromStart = __asyncSliceFromStart;

function _asyncSliceFromStart() {
  _asyncSliceFromStart = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(source) {
    var start,
        end,
        step,
        currentPos,
        nextValidPos,
        bufferSize,
        buffer,
        counter,
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
            start = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
            end = _args.length > 2 && _args[2] !== undefined ? _args[2] : Infinity;
            step = _args.length > 3 && _args[3] !== undefined ? _args[3] : 1;
            currentPos = 0;
            nextValidPos = start;
            bufferSize = Math.abs(end);
            counter = 0;

            if (end < 0) {
              buffer = new CircularBuffer(bufferSize);
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 10;
            _iterator = _asyncIterator(source);

          case 12:
            _context.next = 14;
            return _awaitAsyncGenerator(_iterator.next());

          case 14:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 18;
            return _awaitAsyncGenerator(_step.value);

          case 18:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 36;
              break;
            }

            value = _value;

            if (!buffer) {
              _context.next = 26;
              break;
            }

            value = buffer.push(value);
            counter++;

            if (!(counter <= bufferSize)) {
              _context.next = 26;
              break;
            }

            return _context.abrupt("continue", 33);

          case 26:
            if (!(currentPos >= end && end >= 0)) {
              _context.next = 28;
              break;
            }

            return _context.abrupt("break", 36);

          case 28:
            if (!(nextValidPos === currentPos)) {
              _context.next = 32;
              break;
            }

            _context.next = 31;
            return value;

          case 31:
            nextValidPos += step;

          case 32:
            currentPos++;

          case 33:
            _iteratorNormalCompletion = true;
            _context.next = 12;
            break;

          case 36:
            _context.next = 42;
            break;

          case 38:
            _context.prev = 38;
            _context.t0 = _context["catch"](10);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 42:
            _context.prev = 42;
            _context.prev = 43;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 47;
              break;
            }

            _context.next = 47;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 47:
            _context.prev = 47;

            if (!_didIteratorError) {
              _context.next = 50;
              break;
            }

            throw _iteratorError;

          case 50:
            return _context.finish(47);

          case 51:
            return _context.finish(42);

          case 52:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 38, 42, 52], [43,, 47, 51]]);
  }));
  return _asyncSliceFromStart.apply(this, arguments);
}

function asyncBufferedSlice(_x3, _x4, _x5, _x6) {
  return _asyncBufferedSlice.apply(this, arguments);
}

function _asyncBufferedSlice() {
  _asyncBufferedSlice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(source, start, end, step) {
    var bufferSize, buffer, counter, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, value, newEnd;

    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            bufferSize = Math.abs(start);
            buffer = new CircularBuffer(bufferSize);
            counter = 0;
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _context3.prev = 5;
            _iterator2 = _asyncIterator(source);

          case 7:
            _context3.next = 9;
            return _iterator2.next();

          case 9:
            _step2 = _context3.sent;
            _iteratorNormalCompletion2 = _step2.done;
            _context3.next = 13;
            return _step2.value;

          case 13:
            _value2 = _context3.sent;

            if (_iteratorNormalCompletion2) {
              _context3.next = 21;
              break;
            }

            value = _value2;
            buffer.push(value);
            counter++;

          case 18:
            _iteratorNormalCompletion2 = true;
            _context3.next = 7;
            break;

          case 21:
            _context3.next = 27;
            break;

          case 23:
            _context3.prev = 23;
            _context3.t0 = _context3["catch"](5);
            _didIteratorError2 = true;
            _iteratorError2 = _context3.t0;

          case 27:
            _context3.prev = 27;
            _context3.prev = 28;

            if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
              _context3.next = 32;
              break;
            }

            _context3.next = 32;
            return _iterator2["return"]();

          case 32:
            _context3.prev = 32;

            if (!_didIteratorError2) {
              _context3.next = 35;
              break;
            }

            throw _iteratorError2;

          case 35:
            return _context3.finish(32);

          case 36:
            return _context3.finish(27);

          case 37:
            if (!(isFinite(end) && end > 0)) {
              _context3.next = 43;
              break;
            }

            newEnd = end - (counter - buffer.size);

            if (!(newEnd < 0)) {
              _context3.next = 41;
              break;
            }

            return _context3.abrupt("return", []);

          case 41:
            _context3.next = 44;
            break;

          case 43:
            newEnd = end;

          case 44:
            return _context3.abrupt("return", __asyncSliceFromStart(buffer, 0, newEnd, step));

          case 45:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[5, 23, 27, 37], [28,, 32, 36]]);
  }));
  return _asyncBufferedSlice.apply(this, arguments);
}

function __asyncSlice(_x2) {
  return _asyncSlice.apply(this, arguments);
}

exports.__asyncSlice = __asyncSlice;

function _asyncSlice() {
  _asyncSlice = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(source) {
    var start,
        end,
        step,
        _args2 = arguments;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            start = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 0;
            end = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : Infinity;
            step = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 1;

            if (!(start >= 0)) {
              _context2.next = 7;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(__asyncSliceFromStart(source, start, end, step)), _awaitAsyncGenerator), "t0", 5);

          case 5:
            _context2.next = 15;
            break;

          case 7:
            _context2.t1 = _asyncGeneratorDelegate;
            _context2.t2 = _asyncIterator;
            _context2.next = 11;
            return _awaitAsyncGenerator(asyncBufferedSlice(source, start, end, step));

          case 11:
            _context2.t3 = _context2.sent;
            _context2.t4 = (0, _context2.t2)(_context2.t3);
            _context2.t5 = _awaitAsyncGenerator;
            return _context2.delegateYield((0, _context2.t1)(_context2.t4, _context2.t5), "t6", 15);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _asyncSlice.apply(this, arguments);
}

var asyncSlice = /*#__PURE__*/asyncIterableCurry(__asyncSlice, {
  validateArgs: /*#__PURE__*/makeValidateArgs('asyncSlice'),
  growRight: true,
  minArgs: 0,
  maxArgs: 3
});
exports.asyncSlice = asyncSlice;