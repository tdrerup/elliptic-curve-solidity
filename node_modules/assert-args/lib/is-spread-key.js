module.exports = isSpreadKey

function isSpreadKey (key) {
  return /^[.]{3}.+/.test(key) ||
  /^\[[.]{3}[^\]]+\]$/.test(key)
}
