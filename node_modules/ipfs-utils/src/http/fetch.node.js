// @ts-check
'use strict'

const { Request, Response, Headers, default: nodeFetch } = require('../fetch')
const toStream = require('it-to-stream')
const { Buffer } = require('buffer')

/**
 * @typedef {RequestInit & ExtraFetchOptions} FetchOptions
 *
 * @typedef {import('stream').Readable} Readable
 * @typedef {Object} LoadProgress
 * @property {number} total
 * @property {number} loaded
 * @property {boolean} lengthComputable
 * @typedef {Object} ExtraFetchOptions
 * @property {number} [timeout]
 * @property {URLSearchParams} [searchParams]
 * @property {function(LoadProgress):void} [onUploadProgress]
 * @property {function(LoadProgress):void} [onDownloadProgress]
 * @property {string} [overrideMimeType]
 * @returns {Promise<Response>}
 */

/**
 * @param {string|URL} url
 * @param {FetchOptions} [options]
 * @returns {Promise<Response>}
 */
const fetch = (url, options = {}) =>
  // @ts-ignore
  nodeFetch(url, withUploadProgress(options))

exports.fetch = fetch
exports.Request = Request
exports.Headers = Headers

/**
 * Takes fetch options and wraps request body to track upload progress if
 * `onUploadProgress` is supplied. Otherwise returns options as is.
 *
 * @param {FetchOptions} options
 * @returns {FetchOptions}
 */
const withUploadProgress = (options) => {
  const { onUploadProgress } = options
  if (onUploadProgress) {
    return {
      ...options,
      // @ts-ignore
      body: bodyWithUploadProgress(options, onUploadProgress)
    }
  } else {
    return options
  }
}

/**
 * Takes request `body` and `onUploadProgress` handler and returns wrapped body
 * that as consumed will report progress to supplied `onUploadProgress` handler.
 *
 * @param {FetchOptions} init
 * @param {function(LoadProgress):void} onUploadProgress
 * @returns {Readable}
 */
const bodyWithUploadProgress = (init, onUploadProgress) => {
  // This works around the fact that electron-fetch serializes `Uint8Array`s
  // and `ArrayBuffer`s to strings.
  const content = normalizeBody(init.body)

  // @ts-ignore - Response does not accept node `Readable` streams.
  const { body } = new Response(content, init)
  // @ts-ignore - Unlike standard Response, node-fetch `body` has a differnt
  // type see: see https://github.com/node-fetch/node-fetch/blob/master/src/body.js
  const source = iterateBodyWithProgress(body, onUploadProgress)
  return toStream.readable(source)
}

/**
 * @param {BodyInit} [input]
 * @returns {Buffer|Readable|Blob|null}
 */
const normalizeBody = (input = null) => {
  if (input instanceof ArrayBuffer) {
    return Buffer.from(input)
  } else if (ArrayBuffer.isView(input)) {
    return Buffer.from(input.buffer, input.byteOffset, input.byteLength)
  } else if (typeof input === 'string') {
    return Buffer.from(input)
  } else {
    // @ts-ignore - Could be FormData|URLSearchParams|ReadableStream<Uint8Array>
    // however electron-fetch does not support either of those types and
    // node-fetch normalizes those to node streams.
    return input
  }
}

/**
 * Takes body from native-fetch response as body and `onUploadProgress` handler
 * and returns async iterable that emits body chunks and emits
 * `onUploadProgress`.
 *
 * @param {Buffer|null|Readable} body
 * @param {function(LoadProgress):void} onUploadProgress
 * @returns {AsyncIterable<Buffer>}
 */
const iterateBodyWithProgress = async function * (body, onUploadProgress) {
  /** @type {Buffer|null|Readable} */
  if (body == null) {
    onUploadProgress({ total: 0, loaded: 0, lengthComputable: true })
  } else if (Buffer.isBuffer(body)) {
    const total = body.byteLength
    const lengthComputable = true
    yield body
    onUploadProgress({ total, loaded: total, lengthComputable })
  } else {
    const total = 0
    const lengthComputable = false
    let loaded = 0
    for await (const chunk of body) {
      loaded += chunk.byteLength
      yield chunk
      onUploadProgress({ total, loaded, lengthComputable })
    }
  }
}
