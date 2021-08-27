'use strict'

/* eslint-env mocha */
const { expect } = require('aegir/utils/chai')
const NativeAbortController = require('../src')
const AbortControllerPollyfill = require('abort-controller')
const globalthis = require('globalthis')()

describe('env', function () {
  it('AbortController should be correct in each env', function () {
    switch (process.env.AEGIR_RUNNER) {
      case 'electron-main':
        expect(NativeAbortController).to.equal(AbortControllerPollyfill)
        expect(new NativeAbortController()).to.be.instanceOf(AbortControllerPollyfill)
        expect(globalthis.AbortController).to.be.undefined()
        break
      case 'electron-renderer':
        expect(NativeAbortController).to.not.equal(AbortControllerPollyfill)
        expect(new NativeAbortController()).to.be.instanceOf(globalthis.AbortController)
        expect(globalthis.AbortController).to.be.ok()
        break
      case 'node':
        expect(NativeAbortController).to.equal(AbortControllerPollyfill)
        expect(new NativeAbortController()).to.be.instanceOf(AbortControllerPollyfill)
        expect(globalthis.AbortController).to.be.undefined()
        break
      case 'browser':
        expect(NativeAbortController).to.not.equal(AbortControllerPollyfill)
        expect(new NativeAbortController()).to.be.instanceOf(globalthis.AbortController)
        expect(globalthis.AbortController).to.be.ok()
        break
      case 'webworker':
        expect(NativeAbortController).to.not.equal(AbortControllerPollyfill)
        expect(new NativeAbortController()).to.be.instanceOf(globalthis.AbortController)
        expect(globalthis.AbortController).to.be.ok()
        break
      default:
        expect.fail(`Could not detect env. Current env is ${process.env.AEGIR_RUNNER}`)
        break
    }
  })
})
