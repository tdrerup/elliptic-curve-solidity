function stats (parts) {
  let max = Number.NEGATIVE_INFINITY
  let min = Number.POSITIVE_INFINITY
  for (let i = 0; i < parts.length; i++) {
    const value = parts[i]
    if (value > max) {
      max = value
    }
    if (value < min) {
      min = value
    }
  }
  return { min, max, diff: Math.abs(max - min) }
}

function validateResult (t, input, result, valueMin, valueMax) {
  t.equals(result, input, 'the value is only filled!')
  validateStats(t, result, valueMin, valueMax)
}

function validateStats (t, input, valueMin, valueMax) {
  const maxDiff = Math.abs(valueMin - valueMax)
  const lowerThreshold = (valueMin + (maxDiff / 4) | 0)
  const upperThreshold = (valueMin + (maxDiff / 4 * 3) | 0)
  const { min, max, diff } = stats(input)
  t.ok(min >= valueMin, `lower bounds: ${min}/${valueMin}`)
  t.ok(min < lowerThreshold, `lower thres: ${min}/${lowerThreshold}`)
  t.ok(max <= valueMax, `lower bounds: ${max}/${valueMax}`)
  t.ok(max > upperThreshold, `upper thres: ${max}/${upperThreshold}`)
  const spectrum = ((1000 / maxDiff * diff) | 0) / 10
  t.ok(spectrum > 75, `spectrum used: ${spectrum}% ${diff}/${maxDiff}`)
}

const SAMPLES = 1000
const main = typeof window === 'object' ? window : module
const test = require('tape')
;[
  () => ['main', require('../index.js')],
  () => {
    try {
      return ['crypto', require('../index-crypto.js')(main)]
    } catch (_) {
      console.log(_)
    }
  },
  () => ['seedrandom', require('../index-seedrandom.js')(main)]
].forEach(fn => {
  const parts = fn()
  if (!parts) return

  const name = parts[0]
  const getRandomValues = parts[1]
  test(`${name} - Uint8ClampedArray`, t => {
    const input = new Uint8ClampedArray(SAMPLES)
    validateResult(t, input, getRandomValues(input), 0, 0xff)
    t.end()
  })
  test(`${name} - Uint8Array`, t => {
    const input = new Uint8Array(SAMPLES)
    validateResult(t, input, getRandomValues(input), 0, 0xff)
    t.end()
  })
  test(`${name} - Int8Array`, t => {
    const input = new Int8Array(SAMPLES)
    validateResult(t, input, getRandomValues(input), -0x80, 0x7f)
    t.end()
  })
  test(`${name} - Uint16Array`, t => {
    const input = new Uint16Array(SAMPLES)
    validateResult(t, input, getRandomValues(input), 0, 0xffff)
    t.end()
  })
  test(`${name} - Int16Array`, t => {
    const input = new Int16Array(SAMPLES)
    validateResult(t, input, getRandomValues(input), -0x8000, 0x7fff)
    t.end()
  })
  test(`${name} - Uint32Array`, t => {
    const input = new Uint32Array(SAMPLES)
    validateResult(t, input, getRandomValues(input), 0, 0xffffffff)
    t.end()
  })
  test(`${name} - Int32Array`, t => {
    const input = new Int32Array(SAMPLES)
    validateResult(t, input, getRandomValues(input), -0x80000000, 0x7fffffff)
    t.end()
  })
})
