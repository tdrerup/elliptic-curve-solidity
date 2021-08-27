# sync-randombytes

<a href="https://travis-ci.org/consento-org/sync-randombytes"><img src="https://travis-ci.org/consento-org/sync-randombytes.svg?branch=master" alt="Build Status"/></a>
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`sync-randombytes` is a polyfill for `crypto.randomBytes` that works in `node`, browsers, react-native 
_(with support for versions &lt; 0.60)_ and expo.

`npm i sync-randombytes --save`

## Usage

You can use it like an other randomBytes function by calling:

```javascript
const randomBytes = require('sync-randombytes')
const randomUint8Array = randomBytes(new Uint8Array(16))
```

## Why?

- React-native < 0.60 does not support crypto.randomBytes and you need a custom solution to implement a sync random method
- Metro bundlers complain when you try to use [`react-native-randombytes`](https://www.npmjs.com/package/react-native-randombytes) as it's dependencies try to `require('crypto')` - which is not available in react-native. 

## How it works?

- It uses [`window.crypto.getRandomBytes`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) if available.
- If 'crypto' can be "required" it will use
    - from node > 6.13: [`crypo.randomFill`](https://nodejs.org/api/crypto.html#crypto_crypto_randomfill_buffer_offset_size_callback) - or a polyfill that implements it using crypto.randomBytes for node < 6.13
- .. else it will use [`seedrandom`](https://www.npmjs.com/package/seedrandom)
    - with a randomseed from the native environment.
    - if not available: with a custom random-seed if expo is available. **Random quality degraded**
    - else the default random-seed if. **Random quality degraded**

## License

[MIT](./LICENSE)

with some source code adopted from [`react-native-randombytes`](https://www.npmjs.com/package/react-native-randombytes)
