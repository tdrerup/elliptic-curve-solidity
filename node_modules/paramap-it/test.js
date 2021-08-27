import test from 'ava'
import paramap from '.'

test('should map a single item', async t => {
  const source = (async function * () { yield 2 })()
  const mapper = async (value) => value * 2

  for await (const value of paramap(source, mapper)) {
    t.is(value, 4)
  }
})

test('should map many items', async t => {
  const source = (async function * () {
    for (let i = 0; i < 100; i++) {
      yield new Promise(resolve => setTimeout(() => resolve(i), Math.random() * 10))
    }
  })()
  const mapper = async value => {
    // console.log('inflight', value + 1)
    return new Promise(resolve => setTimeout(() => resolve(value + 1), 100))
  }

  let i = 1
  for await (const value of paramap(source, mapper)) {
    // console.log(value)
    t.is(value, i)
    i++
  }

  t.is(i, 101)
})

test('should map with synchronous mapper', async t => {
  const source = (async function * () {
    for (let i = 0; i < 100; i++) {
      yield new Promise(resolve => setTimeout(() => resolve(i), Math.random() * 10))
    }
  })()
  const mapper = value => value + 1

  let i = 0
  for await (const value of paramap(source, mapper)) {
    t.is(value, i + 1)
    i++
  }

  t.is(i, 100)
})

test('should not care about order', async t => {
  const input = Array.from(Array(100), (_, i) => i)
  const source = (async function * () {
    for (let i = 0; i < input.length; i++) {
      yield new Promise(resolve => setTimeout(() => resolve(input[i]), Math.random() * 10))
    }
  })()
  const mapper = async value => {
    return new Promise(resolve => setTimeout(() => resolve(value), Math.random() * 100))
  }

  const output = []
  for await (const value of paramap(source, mapper, { ordered: false })) {
    output.push(value)
  }

  t.notDeepEqual(output, input)
})
