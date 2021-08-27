var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('./symbols.js'),
    split = _require.split;

var _require2 = require('./async-iterable-iterator.js'),
    AsyncIterableIterator = _require2.AsyncIterableIterator;

var _require3 = require('./async-peekerator.js'),
    AsyncPeekerator = _require3.AsyncPeekerator;

var AsyncPartIterator = /*#__PURE__*/function (_AsyncIterableIterato) {
  _inherits(AsyncPartIterator, _AsyncIterableIterato);

  var _super = _createSuper(AsyncPartIterator);

  function AsyncPartIterator(partsIterator) {
    var _this;

    _classCallCheck(this, AsyncPartIterator);

    _this = _super.call(this);
    _this.partsIterator = partsIterator;
    _this.inactive = false;
    _this.done = false;
    return _this;
  }

  _createClass(AsyncPartIterator, [{
    key: "assertActive",
    value: function assertActive() {
      if (this.inactive && !this.done) {
        throw new Error('Cannot take from this split part. It is no longer the active part.');
      }
    }
  }, {
    key: "next",
    value: function () {
      var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var spliterator, current;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                spliterator = this.partsIterator.spliterator;
                current = spliterator.current;
                this.assertActive();

                if (!(this.done || current.done || current.value === split)) {
                  _context.next = 10;
                  break;
                }

                this.done = true;
                _context.next = 7;
                return this.partsIterator.maybeReturnSource();

              case 7:
                return _context.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 10:
                _context.next = 12;
                return spliterator.advance();

              case 12:
                return _context.abrupt("return", current);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function next() {
        return _next.apply(this, arguments);
      }

      return next;
    }()
  }, {
    key: "return",
    value: function () {
      var _return2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.done = true;
                _context2.next = 3;
                return this.partsIterator.maybeReturnSource();

              case 3:
                return _context2.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _return() {
        return _return2.apply(this, arguments);
      }

      return _return;
    }()
  }, {
    key: "throw",
    value: function () {
      var _throw2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this["return"]();

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _throw() {
        return _throw2.apply(this, arguments);
      }

      return _throw;
    }()
  }]);

  return AsyncPartIterator;
}(AsyncIterableIterator);

exports.AsyncPartIterator = AsyncPartIterator;

var AsyncPartsIterator = /*#__PURE__*/function (_AsyncIterableIterato2) {
  _inherits(AsyncPartsIterator, _AsyncIterableIterato2);

  var _super2 = _createSuper(AsyncPartsIterator);

  function AsyncPartsIterator(source, strategy, options) {
    var _this2;

    _classCallCheck(this, AsyncPartsIterator);

    _this2 = _super2.call(this);
    _this2.source = source;
    _this2.strategy = strategy;
    _this2.options = options;
    _this2.initialized = false;
    _this2.returned = false;
    _this2.spliterator = null;
    _this2.currentPart = null;
    _this2.splitStep = null;
    return _this2;
  }

  _createClass(AsyncPartsIterator, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var source, strategy, options;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.initialized = true;
                source = this.source, strategy = this.strategy, options = this.options;
                _context4.next = 4;
                return AsyncPeekerator.from(strategy(split, options, source));

              case 4:
                this.spliterator = _context4.sent;

              case 5:
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
    key: "maybeReturnSource",
    value: function () {
      var _maybeReturnSource = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.spliterator && this.returned && this.currentPart.done)) {
                  _context5.next = 3;
                  break;
                }

                _context5.next = 3;
                return this.spliterator["return"]();

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function maybeReturnSource() {
        return _maybeReturnSource.apply(this, arguments);
      }

      return maybeReturnSource;
    }()
  }, {
    key: "next",
    value: function () {
      var _next2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
        var spliterator;
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
                spliterator = this.spliterator;

                if (!spliterator.done) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", {
                  value: undefined,
                  done: true
                });

              case 6:
                if (!(this.currentPart !== null)) {
                  _context6.next = 16;
                  break;
                }

                if (!(spliterator.value !== split || spliterator.current === this.splitStep)) {
                  _context6.next = 14;
                  break;
                }

                this.currentPart.inactive = true;

              case 9:
                if (!(!spliterator.done && spliterator.value !== split)) {
                  _context6.next = 14;
                  break;
                }

                _context6.next = 12;
                return spliterator.advance();

              case 12:
                _context6.next = 9;
                break;

              case 14:
                _context6.next = 16;
                return spliterator.advance();

              case 16:
                this.splitStep = spliterator.current;
                this.currentPart = new AsyncPartIterator(this);
                return _context6.abrupt("return", {
                  value: this.currentPart,
                  done: false
                });

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function next() {
        return _next2.apply(this, arguments);
      }

      return next;
    }()
  }, {
    key: "return",
    value: function () {
      var _return3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(value) {
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.returned = true;
                _context7.next = 3;
                return this.maybeReturnSource();

              case 3:
                return _context7.abrupt("return", {
                  value: value,
                  done: true
                });

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _return(_x) {
        return _return3.apply(this, arguments);
      }

      return _return;
    }()
  }, {
    key: "throw",
    value: function () {
      var _throw3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8() {
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this["return"]();

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _throw() {
        return _throw3.apply(this, arguments);
      }

      return _throw;
    }()
  }]);

  return AsyncPartsIterator;
}(AsyncIterableIterator);

exports.AsyncPartsIterator = AsyncPartsIterator;