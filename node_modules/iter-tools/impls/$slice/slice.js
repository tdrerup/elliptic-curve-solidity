var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(__sliceFromStart),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(__slice);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = require('../../internal/circular-buffer.js'),
    CircularBuffer = _require.CircularBuffer;

var _require2 = require('../../internal/iterable.js'),
    iterableCurry = _require2.iterableCurry;

var _require3 = require('./internal/validate-args.js'),
    makeValidateArgs = _require3.makeValidateArgs;

function __sliceFromStart(source) {
  var start,
      end,
      step,
      currentPos,
      nextValidPos,
      bufferSize,
      buffer,
      counter,
      _iterator2,
      _step2,
      value,
      _args = arguments;

  return _regeneratorRuntime.wrap(function __sliceFromStart$(_context) {
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

          _iterator2 = _createForOfIteratorHelper(source);
          _context.prev = 9;

          _iterator2.s();

        case 11:
          if ((_step2 = _iterator2.n()).done) {
            _context.next = 27;
            break;
          }

          value = _step2.value;

          if (!buffer) {
            _context.next = 18;
            break;
          }

          value = buffer.push(value);
          counter++;

          if (!(counter <= bufferSize)) {
            _context.next = 18;
            break;
          }

          return _context.abrupt("continue", 25);

        case 18:
          if (!(currentPos >= end && end >= 0)) {
            _context.next = 20;
            break;
          }

          return _context.abrupt("break", 27);

        case 20:
          if (!(nextValidPos === currentPos)) {
            _context.next = 24;
            break;
          }

          _context.next = 23;
          return value;

        case 23:
          nextValidPos += step;

        case 24:
          currentPos++;

        case 25:
          _context.next = 11;
          break;

        case 27:
          _context.next = 32;
          break;

        case 29:
          _context.prev = 29;
          _context.t0 = _context["catch"](9);

          _iterator2.e(_context.t0);

        case 32:
          _context.prev = 32;

          _iterator2.f();

          return _context.finish(32);

        case 35:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[9, 29, 32, 35]]);
}

exports.__sliceFromStart = __sliceFromStart;

function bufferedSlice(source, start, end, step) {
  var bufferSize = Math.abs(start);
  var buffer = new CircularBuffer(bufferSize);
  var counter = 0;

  var _iterator = _createForOfIteratorHelper(source),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      buffer.push(value);
      counter++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newEnd;

  if (isFinite(end) && end > 0) {
    newEnd = end - (counter - buffer.size);
    if (newEnd < 0) return [];
  } else {
    newEnd = end;
  }

  return __sliceFromStart(buffer, 0, newEnd, step);
}

function __slice(source) {
  var start,
      end,
      step,
      _args2 = arguments;
  return _regeneratorRuntime.wrap(function __slice$(_context2) {
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

          return _context2.delegateYield(__sliceFromStart(source, start, end, step), "t0", 5);

        case 5:
          _context2.next = 8;
          break;

        case 7:
          return _context2.delegateYield(bufferedSlice(source, start, end, step), "t1", 8);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

exports.__slice = __slice;
var slice = /*#__PURE__*/iterableCurry(__slice, {
  validateArgs: /*#__PURE__*/makeValidateArgs('slice'),
  growRight: true,
  minArgs: 0,
  maxArgs: 3
});
exports.slice = slice;