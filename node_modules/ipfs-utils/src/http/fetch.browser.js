'use strict'
/* eslint-env browser */

const { TimeoutError, AbortError } = require('./error')
const { Request, Response, Headers } = require('../fetch')

/**
 * @typedef {RequestInit & ExtraFetchOptions} FetchOptions
 * @typedef {Object} ExtraFetchOptions
 * @property {number} [timeout]
 * @property {URLSearchParams} [searchParams]
 * @property {function({total:number, loaded:number, lengthComputable:boolean}):void} [onUploadProgress]
 * @property {string} [overrideMimeType]
 * @returns {Promise<Response>}
 */

/**
 * @param {string|URL} url
 * @param {FetchOptions} [options]
 * @returns {Promise<Response>}
 */
const fetchWithProgress = (url, options = {}) => {
  const request = new XMLHttpRequest()
  request.open(options.method || 'GET', url.toString(), true)

  const { timeout } = options
  if (timeout > 0 && timeout < Infinity) {
    request.timeout = options.timeout
  }

  if (options.overrideMimeType != null) {
    request.overrideMimeType(options.overrideMimeType)
  }

  if (options.headers) {
    for (const [name, value] of options.headers.entries()) {
      request.setRequestHeader(name, value)
    }
  }

  if (options.signal) {
    options.signal.onabort = () => request.abort()
  }

  if (options.onUploadProgress) {
    request.upload.onprogress = options.onUploadProgress
  }

  // Note: Need to use `arraybuffer` here instead of `blob` because `Blob`
  // instances coming from JSDOM are not compatible with `Response` from
  // node-fetch (which is the setup we get when testing with jest because
  // it uses JSDOM which does not provide a global fetch
  // https://github.com/jsdom/jsdom/issues/1724)
  request.responseType = 'arraybuffer'

  return new Promise((resolve, reject) => {
    /**
     * @param {Event} event
     */
    const handleEvent = (event) => {
      switch (event.type) {
        case 'error': {
          resolve(Response.error())
          break
        }
        case 'load': {
          resolve(
            new ResponseWithURL(request.responseURL, request.response, {
              status: request.status,
              statusText: request.statusText,
              headers: parseHeaders(request.getAllResponseHeaders())
            })
          )
          break
        }
        case 'timeout': {
          reject(new TimeoutError())
          break
        }
        case 'abort': {
          reject(new AbortError())
          break
        }
        default: {
          break
        }
      }
    }
    request.onerror = handleEvent
    request.onload = handleEvent
    request.ontimeout = handleEvent
    request.onabort = handleEvent

    request.send(options.body)
  })
}

const fetchWithStreaming = fetch

const fetchWith = (url, options = {}) =>
  (options.onUploadProgress != null)
    ? fetchWithProgress(url, options)
    : fetchWithStreaming(url, options)

exports.fetch = fetchWith
exports.Request = Request
exports.Headers = Headers

/**
 * @param {string} input
 * @returns {Headers}
 */
const parseHeaders = (input) => {
  const headers = new Headers()
  for (const line of input.trim().split(/[\r\n]+/)) {
    const index = line.indexOf(': ')
    if (index > 0) {
      headers.set(line.slice(0, index), line.slice(index + 1))
    }
  }

  return headers
}

class ResponseWithURL extends Response {
  /**
   * @param {string} url
   * @param {string|Blob|ArrayBufferView|ArrayBuffer|FormData|ReadableStream<Uint8Array>} body
   * @param {ResponseInit} options
   */
  constructor (url, body, options) {
    super(body, options)
    Object.defineProperty(this, 'url', { value: url })
  }
}
