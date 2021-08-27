var _typeof = require("@babel/runtime/helpers/typeof");

var _defineProperty = require("@babel/runtime/helpers/defineProperty");

var emptyIterator = {
  next: function next() {
    return {
      value: undefined,
      done: true
    };
  }
};
var emptySpreadable = Object.freeze(Object.create(_defineProperty({}, Symbol.iterator, function () {
  return emptyIterator;
})));

function when(condition, value) {
  var valueType = _typeof(value);

  if (!(value == null || value[Symbol.iterator] || valueType === 'object' || valueType === 'function')) {
    throw new Error('Second argument to when must be an object, iterable, or function.');
  }

  return condition && value != null ? valueType === 'function' ? value() : value : emptySpreadable;
}

exports.when = when;