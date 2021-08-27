var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");

var _createClass = require("@babel/runtime/helpers/createClass");

var AsyncIterableIterator = /*#__PURE__*/function () {
  function AsyncIterableIterator() {
    _classCallCheck(this, AsyncIterableIterator);
  }

  _createClass(AsyncIterableIterator, [{
    key: Symbol.asyncIterator,
    value: function value() {
      return this;
    }
  }]);

  return AsyncIterableIterator;
}();

exports.AsyncIterableIterator = AsyncIterableIterator;