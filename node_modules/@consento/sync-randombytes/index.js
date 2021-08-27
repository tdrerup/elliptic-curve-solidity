module.exports = (function (window) {
  if (window && window.crypto && window.crypto.getRandomValues) {
    return window.crypto.getRandomValues.bind(window.crypto)
  }
  try {
    return require('./index-crypto.js')(window)
  } catch (_) {
    return require('./index-seedrandom.js')(window)
  }
})(typeof window === 'object' ? window : module)
