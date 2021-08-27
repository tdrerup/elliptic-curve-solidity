'use strict'

/*
 * It only for Debug Remotely mode for Android
 * When __DEV__ === false, we can't use window.require('NativeModules')
 */
function getByRemoteConfig(hostname) {
  var remoteModuleConfig = typeof window !== 'undefined' &&
    window.__fbBatchedBridgeConfig &&
    window.__fbBatchedBridgeConfig.remoteModuleConfig

  if (
    !Array.isArray(remoteModuleConfig) ||
    hostname !== 'localhost' && hostname !== '127.0.0.1'
  ) return { hostname: hostname, passed: false }

  var result = hostname
  var passed = false
  remoteModuleConfig.some(function (config) {
    if (!config) return false
    
    var name = config[0]
    var content = config[1]
    if (
      (name === 'AndroidConstants' || name === 'PlatformConstants') &&
      content &&
      content.ServerHost
    ) {
      result = content.ServerHost.split(':')[0]
      passed = true
      return true
    }

    if (
      name === 'SourceCode' &&
      content &&
      content.scriptURL
    ) {
      result = content.scriptURL.replace(/https?:\/\//, '').split(':')[0]
      passed = true
      return true
    }
    return false
  })

  return { hostname: result, passed: passed }
}

function getByRNRequirePolyfill(hostname) {
  var originalWarn = console.warn
  var NativeModules
  var Constants
  var SourceCode
  if (
    typeof window === 'undefined' ||
    !window.__DEV__ ||
    typeof window.require !== 'function' ||
    // RN >= 0.56
    // TODO: Get NativeModules for RN >= 0.56
    window.require.name === 'metroRequire'
  ) {
    return hostname
  }
  console.warn = function() {
    if (
      arguments[0] &&
      typeof arguments[0].indexOf == 'function' &&
      arguments[0].indexOf("Requiring module 'NativeModules' by name") > -1
    )
      return
    return originalWarn.apply(console, arguments)
  }
  try {
    NativeModules = window.require('NativeModules')
  } catch (e) {}
  console.warn = originalWarn
  if (!NativeModules) return hostname

  Constants = NativeModules.PlatformConstants || NativeModules.AndroidConstants
  SourceCode = NativeModules.SourceCode

  if (Constants && Constants.ServerHost) {
    return Constants.ServerHost.split(':')[0]
  } else if (SourceCode && SourceCode.scriptURL) {
    return SourceCode.scriptURL.replace(/https?:\/\//, '').split(':')[0]
  }
  return hostname
}

/*
 * Get React Native server IP if hostname is `localhost`
 * On Android emulator, the IP of host is `10.0.2.2` (Genymotion: 10.0.3.2)
 */
module.exports = function (hostname) {
  // Check if it in React Native environment
  if (
    typeof __fbBatchedBridgeConfig !== 'object' ||
    hostname !== 'localhost' && hostname !== '127.0.0.1'
  ) {
    return hostname
  }
  var result = getByRemoteConfig(hostname)

  // Leave if get hostname by remote config successful
  if (result.passed) {
    return result.hostname
  }

  // Otherwise, use RN's require polyfill
  return getByRNRequirePolyfill(hostname)
}
