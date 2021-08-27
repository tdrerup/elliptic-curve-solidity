var _createClass = require("@babel/runtime/helpers/createClass");

var _inherits = require("@babel/runtime/helpers/inherits");

var _possibleConstructorReturn = require("@babel/runtime/helpers/possibleConstructorReturn");

var _getPrototypeOf = require("@babel/runtime/helpers/getPrototypeOf");

var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('./iterable-iterator.js'),
    IterableIterator = _require.IterableIterator;

var _require2 = require('./iterable.js'),
    callReturn = _require2.callReturn;

var QueueItem = function QueueItem(step) {
  _classCallCheck(this, QueueItem);

  this.step = step;
  this.next = null;
};

var Fork = /*#__PURE__*/function (_IterableIterator) {
  _inherits(Fork, _IterableIterator);

  var _super = _createSuper(Fork);

  function Fork(head, exchange) {
    var _this;

    _classCallCheck(this, Fork);

    _this = _super.call(this);
    _this.head = head;
    _this.done = false;
    _this.exchange = exchange;
    return _this;
  }

  _createClass(Fork, [{
    key: "next",
    value: function next() {
      var done = this.done,
          exchange = this.exchange;

      if (done) {
        return {
          value: undefined,
          done: done
        };
      } else {
        var head = this.head;
        if (!head.next) exchange.fetch();
        head = head.next;
        var _head = head,
            step = _head.step;
        this.done = step.done;
        this.head = head;
        return step;
      }
    }
  }, {
    key: "return",
    value: function _return() {
      var done = this.done,
          exchange = this.exchange;
      if (!done) exchange["return"]();
    }
  }]);

  return Fork;
}(IterableIterator);

var Exchange = /*#__PURE__*/function () {
  function Exchange(iterator) {
    _classCallCheck(this, Exchange);

    this.iterator = iterator;
    this.tail = new QueueItem(null);
    this.head = this.tail;
    this.forks = 0;
  }

  _createClass(Exchange, [{
    key: "fork",
    value: function fork() {
      ++this.forks;
      return new Fork(this.tail, this);
    }
  }, {
    key: "advance",
    value: function advance() {
      this.tail = this.tail.next;
    }
  }, {
    key: "fetch",
    value: function fetch() {
      var step = this.iterator.next();
      var newItem = new QueueItem(step);
      this.head.next = this.head = newItem;
    }
  }, {
    key: "return",
    value: function _return() {
      --this.forks;

      if (this.forks === 0) {
        callReturn(this.iterator);
      }
    }
  }]);

  return Exchange;
}();

exports.Exchange = Exchange;