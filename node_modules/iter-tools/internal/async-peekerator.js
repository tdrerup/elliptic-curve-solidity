var _construct = require("@babel/runtime/helpers/construct");

var _regeneratorRuntime = require("@babel/runtime/regenerator");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _require = require('./async-iterable.js'),
    asyncEnsureIterable = _require.asyncEnsureIterable,
    asyncCallReturn = _require.asyncCallReturn;

var _ = Symbol["for"]('_');

var AsyncPeekeratorIterator = /*#__PURE__*/function () {
  function AsyncPeekeratorIterator(peekr) {
    _classCallCheck(this, AsyncPeekeratorIterator);

    this.peekr = peekr;
  }

  _createClass(AsyncPeekeratorIterator, [{
    key: "next",
    value: function () {
      var _next = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var peekr, current;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                peekr = this.peekr;
                current = peekr.current;
                _context.next = 4;
                return peekr.advance();

              case 4:
                return _context.abrupt("return", current);

              case 5:
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
                _context2.next = 2;
                return this.peekr["return"]();

              case 2:
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
    key: Symbol.asyncIterator,
    value: function value() {
      return this;
    }
  }]);

  return AsyncPeekeratorIterator;
}();

var AsyncPeekerator = /*#__PURE__*/function () {
  _createClass(AsyncPeekerator, null, [{
    key: "from",
    value: function () {
      var _from = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(iterable) {
        var iterator,
            first,
            _len,
            args,
            _key,
            _args3 = arguments;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                iterator = asyncEnsureIterable(iterable)[Symbol.asyncIterator]();
                _context3.next = 3;
                return iterator.next();

              case 3:
                first = _context3.sent;

                for (_len = _args3.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = _args3[_key];
                }

                return _context3.abrupt("return", _construct(this, [iterator, first].concat(args)));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function from(_x) {
        return _from.apply(this, arguments);
      }

      return from;
    }()
  }]);

  function AsyncPeekerator(iterator, first) {
    _classCallCheck(this, AsyncPeekerator);

    this[_] = {
      iterator: iterator,
      current: first,
      index: 0
    };
  }

  _createClass(AsyncPeekerator, [{
    key: "advance",
    value: function () {
      var _advance = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var this_;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this_ = this[_];

                if (this_.current.done) {
                  _context4.next = 6;
                  break;
                }

                this_.index++;
                _context4.next = 5;
                return this_.iterator.next();

              case 5:
                this_.current = _context4.sent;

              case 6:
                return _context4.abrupt("return", this);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function advance() {
        return _advance.apply(this, arguments);
      }

      return advance;
    }()
  }, {
    key: "return",
    value: function () {
      var _return3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
        var this_;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this_ = this[_];

                if (this.done) {
                  _context5.next = 4;
                  break;
                }

                _context5.next = 4;
                return asyncCallReturn(this_.iterator);

              case 4:
                this_.current = {
                  value: undefined,
                  done: true
                };
                return _context5.abrupt("return", this);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _return() {
        return _return3.apply(this, arguments);
      }

      return _return;
    }()
  }, {
    key: "asIterator",
    value: function asIterator() {
      return new AsyncPeekeratorIterator(this);
    }
  }, {
    key: "current",
    get: function get() {
      return this[_].current;
    }
  }, {
    key: "value",
    get: function get() {
      return this[_].current.value;
    }
  }, {
    key: "done",
    get: function get() {
      return this[_].current.done;
    }
  }, {
    key: "index",
    get: function get() {
      return this[_].index;
    }
  }]);

  return AsyncPeekerator;
}();

exports.AsyncPeekerator = AsyncPeekerator;