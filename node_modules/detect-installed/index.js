/*!
 * detect-installed <https://github.com/tunnckoCore/detect-installed>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

const get = require('get-installed-path')

/**
 * > Detect if some package `name`is
 * installed globally or locally. By default checks
 * if it exists in globally installed modules, using [global-modules][].
 * Pass `opts.local` to check if it exists in locally installed modules
 * or in `opts.cwd` dir.
 *
 * **Example**
 *
 * ```js
 * const detectInstalled = require('detect-installed')
 *
 * detectInstalled('npm').then((exists) => {
 *   console.log(exists) // => true
 * })
 *
 * detectInstalled('foo-bar-barwerwlekrjw').then((exists) => {
 *   console.log(exists) // => false
 * })
 *
 * detectInstalled('npm', {
 *   local: true
 * }).then((exists) => {
 *   console.log(exists) // => false
 * })
 *
 * detectInstalled('global-modules', {
 *   local: true
 * }).then((exists) => {
 *   console.log(exists) // => true
 * })
 *
 * // If you are using it for some sub-directory
 * // pass `opts.cwd` to be where the `node_modules`
 * // folder is.
 * process.chidr('foo-bar-baz')
 * detectInstalled('global-modules', {
 *   local: true,
 *   cwd: '../'
 * }).then((exists) => console.log(exists)) // => true
 * ```
 *
 * @param  {String} `name` package name
 * @param  {Object} `opts` pass `opts.local` to check locally
 * @return {Promise} always resolved promise, never rejected
 * @api public
 */

module.exports = function detectInstalled (name, opts) {
  return new Promise((resolve, reject) => {
    get(name, opts).then(() => resolve(true), () => resolve(false))
  })
}

/**
 * > Synchronously check if package `name` exists
 * as locally or globally installed modules.
 *
 * **Example**
 *
 * ```js
 * const detectInstalled = require('detect-installed')
 *
 * const exists = detectInstalled.sync('npm') // => true
 * const result = detectInstalled.sync('global-modules', { local: true }) // => true
 * ```
 *
 * @name   .sync
 * @param  {String} `name` package name
 * @param  {Object} `opts` pass `opts.local` to check locally
 * @return {Boolean} false, if error or not exists globally/locally
 * @api public
 */

module.exports.sync = function detectInstalledSync (name, opts) {
  let result = null
  try {
    result = get.sync(name, opts)
  } catch (e) {
    return false
  }

  return typeof result === 'string'
}
