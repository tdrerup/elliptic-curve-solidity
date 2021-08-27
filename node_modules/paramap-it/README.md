# paramap-it

[![Build Status](https://travis-ci.org/alanshaw/paramap-it.svg?branch=master)](https://travis-ci.org/alanshaw/paramap-it)
[![dependencies Status](https://david-dm.org/alanshaw/paramap-it/status.svg)](https://david-dm.org/alanshaw/paramap-it)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Parallel mapping for async iterators

You have an async transform you need to apply to the values you get from an iterable, but want to apply these transforms in parallel and retain the original ordering.

## Install

```sh
npm i paramap-it
```

## Usage

```js
const paramap = require('paramap-it')
const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

const source = [1, 2, 3, 4, 5] // Can be ANY iterable or async iterable

// Asynchronously double the values from the source iterable IN PARALLEL
const doubler = paramap(source, async value => {
  await pause(Math.random())
  return value * 2
})

for await (const value of doubler) {
  console.log(value)
}

// Logs:
// 2
// 4
// 6
// 8
// 10
// Note: order is retained
```

## API

```js
const paramap = require('paramap-it')
```

### `paramap(source, mapper, [options])`

Returns a new async iterable that can be used to consume the `source` iterable, applying the async `mapper` function to each item.

* `source` (`async Iterable`) - `Iterable` or `AsyncIterable` to map data from
* `mapper` (`async Function`) - Function that receives one parameter, the value to be mapped, and should return a `Promise` that resolves to the mapped value
* `options.ordered` (`Boolean` default `true`) - set to `false` to discard ordering and yield values as soon as they are resolved (more performant)

## Contribute

Feel free to dive in! [Open an issue](https://github.com/alanshaw/paramap-it/issues/new) or submit PRs.

## License

[MIT](https://github.com/alanshaw/paramap-it/blob/master/LICENSE) © Alan Shaw
