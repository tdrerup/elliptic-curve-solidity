function strs2ab (strs) {
  // Adapted from https://stackoverflow.com/posts/11058858
  const len = strs.reduce(function (total, str) {
    return total + (str.length * 2)
  }, 0)
  const buf = new ArrayBuffer(len) // 2 bytes for each char
  const bufView = new Uint16Array(buf)
  let offset = 0
  strs.forEach(function (str) {
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[offset + i] = str.charCodeAt(i)
    }
    offset += str.length
  })
  return bufView
}

module.exports = function init (window) {
  const seedrandom = require('seedrandom/seedrandom.js')
  function execGlobal (name, value) {
    return window[name](value)
  }

  let SyncRandomBytes
  let seed
  try {
    SyncRandomBytes = execGlobal('require', 'react-native').NativeModules.SyncRandomBytes
    if (SyncRandomBytes) {
      seed = SyncRandomBytes.seed
    }
  } catch (_) {}

  if (!seed && window && 'Expo' in window) {
    seed = strs2ab([
      window.Expo.Constants.installationId,
      window.Expo.Constants.sessionId,
      'performance' in window ? window.performance.now().toString(32) : (new Date()).toISOString(),
      Math.random().toString(32)
    ])
  }

  let prng = seedrandom(seed)
  let early = false

  if (!seed && SyncRandomBytes) {
    early = true
    SyncRandomBytes.randomBytes()
      .then(seed => {
        early = false
        prng = seedrandom(seed)
      })
      .catch(function (err) {
        early = false
        console.log(`WARNING: can not collect seed data: ${err.message}`)
      })
  }

  function randomFillUint32 (input) {
    const len = input.length
    if (len > 16384) { // 65536 by 4
      throw new Error('QuotaExceeded')
    }
    for (let i = len - 1; i >= 0; i--) {
      input[i] = prng.int32()
    }
    return input
  }

  function randomFillInt32 (input) {
    const len = input.length
    if (len > 16384) { // 65536 by 4
      throw new Error('QuotaExceeded')
    }
    for (let i = len - 1; i >= 0; i--) {
      input[i] = prng.int32() - 0x80000000
    }
    return input
  }

  function randomFillUint8 (input) {
    if (input.length > 65536) {
      throw new Error('QuotaExceeded')
    }
    const count = (input.length * 0.25 + 1) | 0
    for (let i = count - 1, n = 0; i >= 0; i--) {
      const value = prng.int32()
      input[n++] = value & 0xff
      input[n++] = (value >> 8) & 0xff
      input[n++] = (value >> 16) & 0xff
      input[n++] = (value >> 24) & 0xff
    }
    return input
  }

  function randomFillInt8 (input) {
    if (input.length > 65536) {
      throw new Error('QuotaExceeded')
    }
    const count = (input.length * 0.25 + 1) | 0
    for (let i = count - 1, n = 0; i >= 0; i--) {
      const value = prng.int32()
      input[n++] = (value & 0xff) - 0x80
      input[n++] = ((value >> 8) & 0xff) - 0x80
      input[n++] = ((value >> 16) & 0xff) - 0x80
      input[n++] = ((value >> 24) & 0xff) - 0x80
    }
    return input
  }

  function randomFillUint16 (input) {
    if (input.length > 32767) {
      throw new Error('QuotaExceeded')
    }
    const count = (input.length * 0.5 + 1) | 0
    for (let i = count - 1, n = 0; i >= 0; i--) {
      const value = prng.int32()
      input[n++] = value & 0xffff
      input[n++] = (value >> 16) & 0xffff
    }
    return input
  }

  function randomFillInt16 (input) {
    if (input.length > 32767) {
      throw new Error('QuotaExceeded')
    }
    const count = (input.length * 0.5 + 1) | 0
    for (let i = count - 1, n = 0; i >= 0; i--) {
      const value = prng.int32()
      input[n++] = (value & 0xffff) - 0x8000
      input[n++] = ((value >> 16) & 0xffff) - 0x8000
    }
    return input
  }

  return function getSeedRandomValues (input) {
    if (early) {
      early = false
      console.log('WARNING: random data is requested before the seed is done')
    }
    if (input === null || input === undefined) {
      throw new Error('invalid type')
    }
    if (input instanceof Uint8Array) {
      return randomFillUint8(input)
    }
    if (input instanceof Uint32Array) {
      return randomFillUint32(input)
    }
    if (input instanceof Uint16Array) {
      return randomFillUint16(input)
    }
    if (input instanceof Int32Array) {
      return randomFillInt32(input)
    }
    if (input instanceof Int16Array) {
      return randomFillInt16(input)
    }
    if (input instanceof Int8Array) {
      return randomFillInt8(input)
    }
    if (input instanceof Uint8ClampedArray) {
      return randomFillUint8(input)
    }
    throw new Error('invalid type')
  }
}
