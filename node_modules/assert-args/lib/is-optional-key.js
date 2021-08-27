module.exports = isOptionalKey

function isOptionalKey (key) {
  return /^\[.+\]$/.test(key)
}
