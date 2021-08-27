var _require = require('../../is-object/is-object.js'),
    isObject = _require.isObject;

function validateArgs(args) {
  var depthOrOptions = args[1];
  var shouldFlat = args[2];
  var depth = depthOrOptions;

  if (isObject(depthOrOptions)) {
    shouldFlat = depthOrOptions.shouldFlat;
    depth = depthOrOptions.depth;
  }

  args[2] = shouldFlat;
  args[1] = depth;
}

exports.validateArgs = validateArgs;