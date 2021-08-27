import test from 'ava'
import pull from 'pull-stream'
import pullParamap from 'pull-paramap'
import Stream, { Readable, Writable } from 'stream'
import paraTransform from 'parallel-transform'
import { promisify } from 'util'
import paramap from '.'

const pipeline = promisify(Stream.pipeline)

;[10, 100, 500, 1000].forEach(length => {
  test.serial(`Node.js stream ${length} items`, async t => {
    const input = []

    for (let i = 1; i < length + 1; i++) {
      input.push(i)
    }

    console.time('Node.js stream')
    let values = []

    await pipeline(
      new Readable({
        objectMode: true,
        read () {
          setTimeout(() => {
            const value = input.shift()
            this.push(value || null)
          }, 10)
        }
      }),
      paraTransform(length, (value, cb) => {
        setTimeout(() => cb(null, value + 1), 100)
      }),
      new Writable({
        objectMode: true,
        write (chunk, enc, cb) {
          values.push(chunk)
          cb()
        }
      })
    )

    console.timeEnd('Node.js stream')
    t.is(values.length, length)
  })

  test.serial.cb(`pull stream ${length} items`, t => {
    const input = []

    for (let i = 0; i < length; i++) {
      input.push(i)
    }

    console.time('pull stream')
    pull(
      pull.values(input),
      pull.asyncMap((value, cb) => setTimeout(() => cb(null, value), 10)),
      pullParamap((value, cb) => setTimeout(() => cb(null, value + 1), 100)),
      pull.collect((err, values) => {
        if (err) return t.end(err)
        console.timeEnd('pull stream')
        t.is(values.length, length)
        t.end()
      })
    )
  })

  test.serial(`paramap-it ${length} items`, async t => {
    console.time('paramap-it')

    const iterable = (async function * () {
      for (let i = 0; i < length; i++) {
        yield new Promise(resolve => setTimeout(() => resolve(i), 10))
      }
    })()
    const mapper = async value => {
      // console.log('inflight', value + 1)
      return new Promise(resolve => setTimeout(() => resolve(value + 1), 100))
    }

    const values = []
    for await (const value of paramap(iterable, mapper)) {
      values.push(value)
    }

    console.timeEnd('paramap-it')
    t.is(values.length, length)
  })
})
