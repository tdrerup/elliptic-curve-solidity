import "./symbol-polyfill"

import {assert} from "chai"
import {EventIterator} from "../src/event-iterator"

describe("event iterator", function() {
  describe("with listen", function() {
    it("should await immediate value", async function() {
      const it = new EventIterator(next => {
        next("val")
      })

      await new Promise(setImmediate)
      const result = await it[Symbol.asyncIterator]().next()
      assert.deepEqual(result, {value: "val", done: false})
    })

    it("should await delayed value", async function() {
      const it = new EventIterator(next => {
        setImmediate(() => next("val"))
      })

      await new Promise(setImmediate)
      const result = await it[Symbol.asyncIterator]().next()
      assert.deepEqual(result, {value: "val", done: false})
    })

    it("should await immediate end", async function() {
      const it = new EventIterator((next, stop) => {
        stop()
      })

      await new Promise(setImmediate)
      const result = await it[Symbol.asyncIterator]().next()
      assert.deepEqual(result, {done: true})
    })

    it("should await delayed end", async function() {
      const it = new EventIterator((next, stop) => {
        setImmediate(stop)
      })

      await new Promise(setImmediate)
      const result = await it[Symbol.asyncIterator]().next()
      assert.deepEqual(result, {done: true})
    })

    it("should await immediate error", async function() {
      const it = new EventIterator((next, stop, fail) => {
        fail(new Error)
      })

      try {
        await new Promise(setImmediate)
        const result = await it[Symbol.asyncIterator]().next()
        assert.fail()
      } catch (err) {
        assert.instanceOf(err, Error)
      }
    })

    it("should await delayed error", async function() {
      const it = new EventIterator((next, stop, fail) => {
        setImmediate(() => fail(new Error))
      })

      try {
        await new Promise(setImmediate)
        const result = await it[Symbol.asyncIterator]().next()
        assert.fail()
      } catch (err) {
        assert.instanceOf(err, Error)
      }
    })
  })

  describe("with listen and remove", function() {
    it("should call handlers with identical arguments", async function() {
      let a, b
      const it = new EventIterator(
        (...args: any[]) => a = args,
        (...args: any[]) => b = args,
      )

      assert.equal(a, b)
    })

    it("should call remove handler on return", async function() {
      let removed = 0
      const it = new EventIterator(() => {}, () => removed += 1)

      await new Promise(setImmediate)
      const result = await it[Symbol.asyncIterator]().return!()
      assert.deepEqual(result, {done: true})
      assert.equal(removed, 1)
    })

    it("should call remove handler on immediate end", async function() {
      let removed = 0
      const it = new EventIterator((next, stop) => {
        stop()
      }, () => removed += 1)

      await new Promise(setImmediate)
      const result = await it[Symbol.asyncIterator]().next()
      assert.deepEqual(result, {done: true})
      assert.equal(removed, 1)
    })

    it("should call remove handler on delayed end", async function() {
      let removed = 0
      const it = new EventIterator((next, stop) => {
        setImmediate(stop)
      }, () => removed += 1)

      await new Promise(setImmediate)
      const result = await it[Symbol.asyncIterator]().next()
      assert.deepEqual(result, {done: true})
      assert.equal(removed, 1)
    })

    it("should call remove handler on immediate error", async function() {
      let removed = 0
      const it = new EventIterator((next, stop, fail) => {
        fail(new Error)
      }, () => removed += 1)

      try {
        await new Promise(setImmediate)
        const result = await it[Symbol.asyncIterator]().next()
        assert.fail()
      } catch (err) {
        assert.instanceOf(err, Error)
        assert.equal(removed, 1)
      }
    })

    it("should call remove handler on delayed error", async function() {
      let removed = 0
      const it = new EventIterator((next, stop, fail) => {
        setImmediate(() => fail(new Error))
      }, () => removed += 1)

      try {
        await new Promise(setImmediate)
        const result = await it[Symbol.asyncIterator]().next()
        assert.fail()
      } catch (err) {
        assert.instanceOf(err, Error)
        assert.equal(removed, 1)
      }
    })
  })

  describe("with high water mark", function() {
    it("should warn", async function() {
      const oldconsole = console
      const log = global.console = new MemoryConsole

      const it = new EventIterator(next => {next("val")}, undefined, {highWaterMark: 1})

      await new Promise(setImmediate)
      const result = await it[Symbol.asyncIterator]().next()

      global.console = oldconsole

      assert.equal(log.stderr.toString(), "EventIterator queue reached 1 items\n")
    })
  })
})

import {Console} from "console"
import {Writable} from "stream"

export class BufferStream extends Writable {
  private readonly buffers: Buffer[] = []

  _write(chunk: Buffer | string, encoding: string, callback: (err?: Error) => void) {
    if (typeof chunk === "string") chunk = Buffer.from(chunk)
    this.buffers.push(chunk)
    callback()
    return true
  }

  clear() {
    this.buffers.length = 0
  }

  inspect() {
    return Buffer.concat(this.buffers).toString()
  }

  toString() {
    return Buffer.concat(this.buffers).toString()
  }
}

export class MemoryConsole extends Console {
  stdout: BufferStream
  stderr: BufferStream

  constructor() {
    const stdout = new BufferStream
    const stderr = new BufferStream
    super(stdout, stderr)

    this.stdout = stdout
    this.stderr = stderr
    Object.freeze(this)
  }

  clear() {
    this.stdout.clear()
    this.stderr.clear()
  }
}
