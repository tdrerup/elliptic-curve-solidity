var capitalized = /^[A-Z]/
var strictCapitalilized = /^[A-Z]([a-z]|$)/

module.exports = isCapitalized

function isCapitalized (str, strict) {
  return strict
    ? strictCapitalilized.test(str)
    : capitalized.test(str)
}
