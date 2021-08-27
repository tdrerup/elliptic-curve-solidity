const { EventIterator } = require('event-iterator')

class MultiResolver {
  add (promise, id) {
    Promise.resolve(promise)
      .then(result => { if (this.onResolve) this.onResolve({ result, id }) })
      .catch(error => { if (this.onReject) this.onReject({ error, id }) })
    return this
  }
}

class UnorderedMultiResolver {
  constructor () {
    this._length = 0

    this._onResolve = this._onResolve.bind(this)
    this._onReject = this._onReject.bind(this)

    const resolver = new MultiResolver()
    resolver.onResolve = this._onResolve
    resolver.onReject = this._onReject
    this._resolver = resolver
  }

  _onResolve ({ result }) {
    this._length--

    // console.log('resolve', result)
    if (this.onResolve) this.onResolve(result)

    if (!this._length && this.onDrain) {
      this.onDrain()
    }
  }

  _onReject ({ error, id }) {
    this.destroy()
    if (this.onReject) this.onReject(error)
  }

  add (promise) {
    this._length++
    this._resolver.add(promise)
    return this
  }

  // Number of promises left to resolve
  get length () {
    return this._length
  }

  error (err) {
    this.destroy()
    if (this.onError) this.onError(err)
    return this
  }

  end () {
    this.destroy()
    if (this.onEnd) this.onEnd()
    return this
  }

  destroy () {
    this._resolver.onResolve = null
    this._resolver.onReject = null
    this._resolver = null
    this._length = 0
  }
}

class OrderedMultiResolver {
  constructor () {
    this._nextId = 0
    this._promises = []

    this._onResolve = this._onResolve.bind(this)
    this._onReject = this._onReject.bind(this)

    const resolver = new MultiResolver()
    resolver.onResolve = this._onResolve
    resolver.onReject = this._onReject
    this._resolver = resolver
  }

  _onResolve ({ result, id }) {
    if (this._promises[0].id !== id) {
      for (var i = 0; i < this._promises.length; i++) {
        if (this._promises[i].id === id) {
          this._promises[i].result = result
          break
        }
      }
      return
    }

    this._promises.shift()
    // console.log('resolve', result)
    if (this.onResolve) this.onResolve(result)

    while (this._promises.length) {
      if (!this._promises[0].result) break
      const { result } = this._promises.shift()
      // console.log('resolve', result)
      if (this.onResolve) this.onResolve(result)
    }

    if (!this._promises.length && this.onDrain) {
      this.onDrain()
    }
  }

  _onReject ({ error, id }) {
    this.destroy()
    if (this.onReject) this.onReject(error)
  }

  add (promise) {
    this._promises.push({ promise, id: this._nextId })
    this._resolver.add(promise, this._nextId)
    this._nextId++
    return this
  }

  // Number of promises left to resolve
  get length () {
    return this._promises.length
  }

  error (err) {
    this.destroy()
    if (this.onError) this.onError(err)
    return this
  }

  end () {
    this.destroy()
    if (this.onEnd) this.onEnd()
    return this
  }

  destroy () {
    this._resolver.onResolve = null
    this._resolver.onReject = null
    this._resolver = null
    this._promises = null
  }
}

function paramap (source, mapper, options) {
  return (async function * () {
    options = options || {}
    options.ordered = options.ordered == null ? true : options.ordered

    const resolver = options.ordered ? new OrderedMultiResolver() : new UnorderedMultiResolver()

    async function consumer () {
      try {
        for await (const item of source) {
          resolver.add(mapper(item))
        }
      } catch (err) {
        return resolver.error(err)
      }

      // If there are in flight promises, we have to wait for them to be
      // resolved before we end.
      if (resolver.length) {
        await new Promise(resolve => { resolver.onDrain = resolve })
      }

      resolver.end()
    }

    const ei = new EventIterator(
      (push, stop, fail) => {
        resolver.onResolve = push
        resolver.onReject = fail
        resolver.onError = fail
        resolver.onEnd = stop
      },
      (push, stop, fail) => {
        resolver.onResolve = null
        resolver.onReject = null
        resolver.onError = null
        resolver.onEnd = null
      }
    )

    consumer()

    for await (const item of ei) yield item
  })()
}

module.exports = paramap
