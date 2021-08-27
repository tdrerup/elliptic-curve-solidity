var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var IterableIterator = /*#__PURE__*/function () {
  function IterableIterator() {
    _classCallCheck(this, IterableIterator);
  }

  _createClass(IterableIterator, [{
    key: Symbol.iterator,
    value: function value() {
      return this;
    }
  }]);

  return IterableIterator;
}();

exports.IterableIterator = IterableIterator;