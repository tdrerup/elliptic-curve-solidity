let node8 = false

if ('process' in global) {
  node8 = /^v8\./.test(global.process.version)
}

module.exports = function init (window) {
  function execGlobal (name, value) {
    return window[name](value)
  }
  const crypto = execGlobal('require', 'crypto')

  function randomFillUint32 (input, bytes) {
    const len = input.length
    for (let i = 0, o = 0; i < len; i++) {
      input[i] = (
        (bytes[o++] << 24) |
        (bytes[o++] << 16) |
        (bytes[o++] << 8) |
        bytes[o++]
      )
    }
    return input
  }

  function randomFillInt32 (input, bytes) {
    const len = input.length
    for (let i = 0, o = 0; i < len; i++) {
      input[i] = (
        (bytes[o++] << 24) |
        (bytes[o++] << 16) |
        (bytes[o++] << 8) |
        bytes[o++]
      ) - 0x80000000
    }
    return input
  }

  function randomFillUint16 (input, bytes) {
    const len = input.length
    for (let i = 0, o = 0; i < len; i++) {
      input[i] = (bytes[o++] << 8) | bytes[o++]
    }
    return input
  }

  function randomFillInt16 (input, bytes) {
    const len = input.length
    for (let i = 0, o = 0; i < len; i++) {
      input[i] = ((bytes[o++] << 8) | bytes[o++]) - 0x8000
    }
    return input
  }

  function randomFillUint8 (input, bytes) {
    const len = input.length
    for (let i = 0; i < len; i++) {
      input[i] = bytes[i]
    }
    return input
  }

  function randomFillInt8 (input, bytes) {
    const len = input.length
    for (let i = 0; i < len; i++) {
      input[i] = bytes[i] - 0x80
    }
    return input
  }

  if (node8) {
    return function randomFillNode8 (input) {
      if (input instanceof Uint8Array) {
        return crypto.randomFillSync(input)
      }
      const bytes = crypto.randomBytes(input.byteLength)
      if (input instanceof Uint32Array) {
        return randomFillUint32(input, bytes)
      }
      if (input instanceof Uint16Array) {
        return randomFillUint16(input, bytes)
      }
      if (input instanceof Int32Array) {
        return randomFillInt32(input, bytes)
      }
      if (input instanceof Int16Array) {
        return randomFillInt16(input, bytes)
      }
      if (input instanceof Int8Array) {
        return randomFillInt8(input, bytes)
      }
      if (input instanceof Uint8ClampedArray) {
        return randomFillUint8(input, bytes)
      }
      throw new Error('invalid type')
    }
  }

  return crypto.randomFillSync || function randomFillClassic (input) {
    const bytes = crypto.randomBytes(input.byteLength)
    if (input instanceof Uint8Array) {
      return randomFillUint8(input, bytes)
    }
    if (input instanceof Uint32Array) {
      return randomFillUint32(input, bytes)
    }
    if (input instanceof Uint16Array) {
      return randomFillUint16(input, bytes)
    }
    if (input instanceof Int32Array) {
      return randomFillInt32(input, bytes)
    }
    if (input instanceof Int16Array) {
      return randomFillInt16(input, bytes)
    }
    if (input instanceof Int8Array) {
      return randomFillInt8(input, bytes)
    }
    if (input instanceof Uint8ClampedArray) {
      return randomFillUint8(input, bytes)
    }
    throw new Error('invalid type')
  }
}
