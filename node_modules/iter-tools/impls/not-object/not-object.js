var _typeof = require("@babel/runtime/helpers/typeof");

function notObject(value) {
  return _typeof(value) !== 'object' || value === null;
}

exports.notObject = notObject;