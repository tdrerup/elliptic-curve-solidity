var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('./async-iterable-iterator.js'),
    AsyncIterableIterator = _require.AsyncIterableIterator;

var _require2 = require('./async-iterable.js'),
    asyncCallReturn = _require2.asyncCallReturn;

var QueueItem = function QueueItem(step) {
  _classCallCheck(this, QueueItem);

  this.step = step;
  this.next = null;
};

var AsyncFork = /*#__PURE__*/function (_AsyncIterableIterato) {
  _inherits(AsyncFork, _AsyncIterableIterato);

  var _super = _createSuper(AsyncFork);

  function AsyncFork(head, exchange) {
    var _this;

    _classCallCheck(this, AsyncFork);

    _this = _super.call(this);
    _this.head = head;
    _this.done = false;
    _this.exchange = exchange;
    return _this;
  }

  _createClass(AsyncFork, [{
    key: "next",
    value: function () {
      var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var done, exchange, head, _head, step;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                done = this.done, exchange = this.exchange;

                if (!done) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", {
                  value: undefined,
                  done: done
                });

              case 5:
                head = this.head;

                if (head.next) {
                  _context.next = 9;
                  break;
                }

                _context.next = 9;
                return exchange.fetch();

              case 9:
                head = head.next;
                _head = head, step = _head.step;
                this.done = step.done;
                this.head = head;
                return _context.abrupt("return", step);

              case 14:
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
        var done, exchange;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                done = this.done, exchange = this.exchange;

                if (done) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return exchange["return"]();

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
  }]);

  return AsyncFork;
}(AsyncIterableIterator);

var AsyncExchange = /*#__PURE__*/function () {
  function AsyncExchange(iterator) {
    _classCallCheck(this, AsyncExchange);

    this.iterator = iterator;
    this.tail = new QueueItem(null);
    this.head = this.tail;
    this.forks = 0;
  }

  _createClass(AsyncExchange, [{
    key: "fork",
    value: function fork() {
      ++this.forks;
      return new AsyncFork(this.tail, this);
    }
  }, {
    key: "advance",
    value: function advance() {
      this.tail = this.tail.next;
    }
  }, {
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var step, newItem;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.iterator.next();

              case 2:
                step = _context3.sent;
                newItem = new QueueItem(step);
                this.head.next = this.head = newItem;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetch() {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
  }, {
    key: "return",
    value: function () {
      var _return3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                --this.forks;

                if (!(this.forks === 0)) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 4;
                return asyncCallReturn(this.iterator);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _return() {
        return _return3.apply(this, arguments);
      }

      return _return;
    }()
  }]);

  return AsyncExchange;
}();

exports.AsyncExchange = AsyncExchange;