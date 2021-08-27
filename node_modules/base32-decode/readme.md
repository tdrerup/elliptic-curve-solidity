# Base32 Decode

Base32 decoder with support for multiple variants.

## Installation

```sh
npm install --save base32-decode
```

## Usage

```js
const base32Decode = require('base32-decode')

console.log(base32Decode('EHJQ6X0', 'Crockford'))
//=> ArrayBuffer { 4 }

console.log(base32Decode('ORSXG5A=', 'RFC4648'))
//=> ArrayBuffer { 4 }

console.log(base32Decode('EHIN6T0=', 'RFC4648-HEX'))
//=> ArrayBuffer { 4 }
```

## API

### base32Decode(input, variant)

- `input` &lt;String&gt;
- `variant` &lt;String&gt;
- Return: &lt;ArrayBuffer&gt; The decoded raw data

Decode the data in `input`. `variant` should be one of the supported variants
listed below.

- `'RFC3548'` - Alias for `'RFC4648'`
- `'RFC4648'` - [Base32 from RFC4648](https://tools.ietf.org/html/rfc4648)
- `'RFC4648-HEX'` - [base32hex from RFC4648](https://tools.ietf.org/html/rfc4648)
- `'Crockford'` - [Crockford's Base32](http://www.crockford.com/wrmg/base32.html)

## See also

- [base32-encode](https://github.com/LinusU/base32-encode) - Base32 encoder
