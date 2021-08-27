var _toConsumableArray = require("@babel/runtime/helpers/toConsumableArray");

var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _get = require("@babel/runtime/helpers/get");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('../../internal/async-iterable.js'),
    asyncIterableCurry = _require.asyncIterableCurry,
    asyncCallReturn = _require.asyncCallReturn;

var _require2 = require('../../internal/async-iterable-iterator.js'),
    AsyncIterableIterator = _require2.AsyncIterableIterator;

var _require3 = require('../../internal/async-parallel-each.js'),
    asyncParallelEach = _require3.asyncParallelEach;

var _require4 = require('../../internal/async-peekerator.js'),
    AsyncPeekerator = _require4.AsyncPeekerator;

var _require5 = require('../$map/async-map.js'),
    __asyncMap = _require5.__asyncMap;

var _require6 = require('../$to-array/async-to-array.js'),
    __asyncToArray = _require6.__asyncToArray;

var _ = Symbol["for"]('_');

var __advance = Symbol["for"]('__advance');

var AsyncSummarizedPeekerator = /*#__PURE__*/function (_AsyncPeekerator) {
  _inherits(AsyncSummarizedPeekerator, _AsyncPeekerator);

  var _super = _createSuper(AsyncSummarizedPeekerator);

  function AsyncSummarizedPeekerator(iterator, first, inputSummary) {
    var _this;

    _classCallCheck(this, AsyncSummarizedPeekerator);

    _this = _super.call(this, iterator, first);
    _this[_].inputSummary = inputSummary;
    return _this;
  }

  _createClass(AsyncSummarizedPeekerator, [{
    key: "advance",
    value: function () {
      var _advance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this[_].inputSummary.advanceBuffer(this);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function advance() {
        return _advance.apply(this, arguments);
      }

      return advance;
    }()
  }, {
    key: __advance,
    value: function () {
      var _value = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _get(_getPrototypeOf(AsyncSummarizedPeekerator.prototype), "advance", this).call(this);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function value() {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  }]);

  return AsyncSummarizedPeekerator;
}(AsyncPeekerator);

var AsyncInputSummaryInternal = /*#__PURE__*/function () {
  function AsyncInputSummaryInternal() {
    _classCallCheck(this, AsyncInputSummaryInternal);

    this.buffers = [];
    this.notDoneBuffer = null;
    this.index = 0;
  }

  _createClass(AsyncInputSummaryInternal, [{
    key: "init",
    value: function init(buffers) {
      this.buffers = buffers;
      this.updateNotDone();
    }
  }, {
    key: "updateNotDone",
    value: function updateNotDone() {
      this.notDoneBuffer = this.buffers.find(function (buffer) {
        return !buffer.done;
      });
    }
  }, {
    key: "advanceBuffer",
    value: function () {
      var _advanceBuffer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(buffer) {
        var wasDone;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                wasDone = buffer.done;
                _context3.next = 3;
                return buffer[__advance]();

              case 3:
                this.index++;

                if (!wasDone && buffer.done) {
                  this.updateNotDone();
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function advanceBuffer(_x) {
        return _advanceBuffer.apply(this, arguments);
      }

      return advanceBuffer;
    }()
  }]);

  return AsyncInputSummaryInternal;
}();

var AsyncInputSummary = /*#__PURE__*/function () {
  function AsyncInputSummary(internal) {
    _classCallCheck(this, AsyncInputSummary);

    this[_] = internal;
  }

  _createClass(AsyncInputSummary, [{
    key: "advance",
    value: function advance() {
      throw new Error('advance() is not supported on an interleave summary');
    }
  }, {
    key: "current",
    get: function get() {
      return {
        value: this.value,
        done: this.done
      };
    }
  }, {
    key: "value",
    get: function get() {
      return this[_].notDoneBuffer;
    }
  }, {
    key: "done",
    get: function get() {
      return this[_].notDoneBuffer === undefined;
    }
  }, {
    key: "index",
    get: function get() {
      return this[_].index;
    }
  }]);

  return AsyncInputSummary;
}();

exports.AsyncInputSummary = AsyncInputSummary;

var AsyncInterleaver = /*#__PURE__*/function (_AsyncIterableIterato) {
  _inherits(AsyncInterleaver, _AsyncIterableIterato);

  var _super2 = _createSuper(AsyncInterleaver);

  function AsyncInterleaver(sources, strategy, options) {
    var _this2;

    _classCallCheck(this, AsyncInterleaver);

    _this2 = _super2.call(this);
    _this2.sources = sources;
    _this2.strategy = strategy;
    _this2.options = options;
    _this2.initialized = false;
    _this2.inputSummary = new AsyncInputSummaryInternal(sources);
    return _this2;
  }

  _createClass(AsyncInterleaver, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var strategy, options, inputSummary;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.initialized = true;
                strategy = this.strategy, options = this.options, inputSummary = this.inputSummary;
                _context4.next = 4;
                return __asyncToArray(__asyncMap(this.sources, function (source) {
                  return AsyncSummarizedPeekerator.from(source, inputSummary);
                }));

              case 4:
                this.buffers = _context4.sent;
                this.iterator = strategy.apply(void 0, [options, new AsyncInputSummary(inputSummary)].concat(_toConsumableArray(this.buffers)));
                _context4.next = 8;
                return inputSummary.init(this.buffers);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "returnBuffers",
    value: function () {
      var _returnBuffers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return asyncParallelEach(this.buffers, function (buffer) {
                  return buffer["return"]();
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function returnBuffers() {
        return _returnBuffers.apply(this, arguments);
      }

      return returnBuffers;
    }()
  }, {
    key: "next",
    value: function () {
      var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
        var step;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.initialized) {
                  _context6.next = 3;
                  break;
                }

                _context6.next = 3;
                return this.init();

              case 3:
                _context6.next = 5;
                return this.iterator.next();

              case 5:
                step = _context6.sent;

                if (!step.done) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 9;
                return this.returnBuffers();

              case 9:
                return _context6.abrupt("return", step);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function next() {
        return _next.apply(this, arguments);
      }

      return next;
    }()
  }, {
    key: "return",
    value: function () {
      var _return2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return asyncCallReturn(this.iterator);

              case 2:
                _context7.next = 4;
                return this.returnBuffers();

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _return() {
        return _return2.apply(this, arguments);
      }

      return _return;
    }()
  }]);

  return AsyncInterleaver;
}(AsyncIterableIterator);

function __asyncInterleave(sources, strategy) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new AsyncInterleaver(sources, strategy, options);
}

exports.__asyncInterleave = __asyncInterleave;
var asyncInterleave = /*#__PURE__*/asyncIterableCurry(__asyncInterleave, {
  variadic: true,
  growRight: true,
  minArgs: 1,
  maxArgs: 2
});
exports.asyncInterleave = asyncInterleave;