# assert-args [![Build Status](https://travis-ci.org/tjmehta/assert-args.svg)](https://travis-ci.org/tjmehta/assert-args) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
Validate and format function arguments ( handles types and optionals).

## Installation
```bash
npm install --save assert-args
```

## Examples
### assertArgs(arguments, validator)
Assert argument types and format arguments into an object
```js
function something (foo, bar, baz, qux, corge) {
  var args = assertArgs(arguments, {
    'foo': 'object',            // foo is required and must be a object
    '[bar]': SomeClass,         // bar is optional and must be an instance of 'SomeClass'
    'baz'  : someTest           // baz must pass someTest (someTest should throw an error if it fails)
    'qux': ['string', 'number'] // qux is required and must be a string or number
    '...corge': 'function'     // corge is required and captures multiple arguments that must be functions

  })
  foo = args.foo
  bar = args.bar
  baz = args.baz
  qux = args.qux
  corge = args.corge // will be an array
  /// ...
}
```
Check out the examples below.

#### Type validations
* Supports '*', 'string', 'number', 'object', 'function', and classes (Array, RegExp, etc)
```js
// Type example
var args = assertArgs(arguments, {
  'foo': 'string' // required string _or_ number arguments
})
/*
Will throw an error if it does not pass:
  TypeError: "foo" must be a string
*/
// Multi-type example
var args = assertArgs(arguments, {
  'foo': ['string', 'number'] // requires string or number argument
})
/*
Will throw an error if it does not pass:
  TypeError: "foo" must be a string or number
*/

// Class example
var args = assertArgs(arguments, {
  'foo': Array // required Array argument
})
/*
Will throw an error if it does not pass:
  TypeError: "foo" must be an instance of Array
*/

```

#### Custom validations
```js
var args = assertArgs(arguments, {
  'foo': customValidation
})
// custom validation should throw an error if the value is invalid
function customValidation (value) {
  if (!value.bar) {
    throw new Error('"bar" is required')
  }
}
/*
If `foo` does not pass it will throw:
  Error: "foo" is invalid: "bar" is required
*/
```

#### Required arguments
```js
var args = assertArgs(arguments, {
  'foo': 'string' // required string argument
})
```

#### Optional arguments
```js
var args = assertArgs(arguments, {
  '[foo]': 'string' // optional string argument
})
```

#### Spread arguments
```js
var args = assertArgs(arguments, {
  '...foo': 'string', // captures multiple arguments
  'cb': 'function'
})
```

### Full examples
```js
var args = assertArgs(['str', {}, function () {}], {
  'foo': 'string',
  '[bar]': 'object',
  'qux': 'function'
})
/*
args = {
  foo: 'str',
  bar: {},
  qux: function () {}
}
*/

var args = assertArgs(['str', function () {}], {
  'foo': 'string',
  '[bar]': 'object',
  'qux': 'function'
})
/*
args = {
  foo: 'str',
  bar: undefined,
  qux: function () {}
}
*/

var args = assertArgs([], {
  'foo': 'string',
  '[bar]': 'object',
  'qux': 'function'
})
/*
TypeError: "foo" is required
*/

var args = assertArgs(['str'], {
  'foo': 'string',
  '[bar]': 'object',
  'qux': 'function'
})
/*
TypeError: "qux" is required
*/

var args = assertArgs([10, {}], {
  'foo': 'string',
  '[bar]': 'object',
  'qux': 'function'
})
/*
TypeError: "foo" must be a string
*/

var args = assertArgs(['str', 10], {
  'foo': 'string',
  '[bar]': 'object',
  'qux': 'function'
})
/*
TypeError: "qux" must be a function
*/

var args = assertArgs(['str', {}], {
  'foo': 'string',
  '[bar]': 'object',
  'qux': 'function'
})
/*
TypeError: "qux" is required
*/

var args = assertArgs(['one', 'two', 'three', function () {}], {
  '...foo': 'string',
  'bar': 'function'
})
/*
args = {
  foo: ['one', 'two', 'three'],
  bar: function () {}
}
*/

var args = assertArgs([function () {}], {
  '...foo': 'string',
  'bar': 'function'
})
/*
TypeError: "...foo" is required
*/

var args = assertArgs([null, function () {}], {
  '...foo': 'string',
  'bar': 'function'
})
/*
TypeError: "...foo" must be strings
*/

// Check out the tests for more examples...
```

## License
MIT
