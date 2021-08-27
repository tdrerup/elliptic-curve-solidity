var _construct = require("@babel/runtime/helpers/construct");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var _require = require('./iterable.js'),
    ensureIterable = _require.ensureIterable,
    callReturn = _require.callReturn;

var _ = Symbol["for"]('_');

var PeekeratorIterator = /*#__PURE__*/function () {
  function PeekeratorIterator(peekr) {
    _classCallCheck(this, PeekeratorIterator);

    this.peekr = peekr;
  }

  _createClass(PeekeratorIterator, [{
    key: "next",
    value: function next() {
      var peekr = this.peekr;
      var current = peekr.current;
      peekr.advance();
      return current;
    }
  }, {
    key: "return",
    value: function _return() {
      this.peekr["return"]();
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return this;
    }
  }]);

  return PeekeratorIterator;
}();

var Peekerator = /*#__PURE__*/function () {
  _createClass(Peekerator, null, [{
    key: "from",
    value: function from(iterable) {
      var iterator = ensureIterable(iterable)[Symbol.iterator]();
      var first = iterator.next();

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return _construct(this, [iterator, first].concat(args));
    }
  }]);

  function Peekerator(iterator, first) {
    _classCallCheck(this, Peekerator);

    this[_] = {
      iterator: iterator,
      current: first,
      index: 0
    };
  }

  _createClass(Peekerator, [{
    key: "advance",
    value: function advance() {
      var this_ = this[_];

      if (!this_.current.done) {
        this_.index++;
        this_.current = this_.iterator.next();
      }

      return this;
    }
  }, {
    key: "return",
    value: function _return() {
      var this_ = this[_];

      if (!this.done) {
        callReturn(this_.iterator);
      }

      this_.current = {
        value: undefined,
        done: true
      };
      return this;
    }
  }, {
    key: "asIterator",
    value: function asIterator() {
      return new PeekeratorIterator(this);
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

  return Peekerator;
}();

exports.Peekerator = Peekerator;