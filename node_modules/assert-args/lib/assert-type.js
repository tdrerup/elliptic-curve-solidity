module.exports = assertType

function assertType (bool, message) {
  if (!bool) {
    throw new TypeError(message)
  }
}
