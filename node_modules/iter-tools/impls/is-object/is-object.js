var _typeof = require("@babel/runtime/helpers/typeof");

function isObject(value) {
  return _typeof(value) === 'object' && value !== null;
}

exports.isObject = isObject;