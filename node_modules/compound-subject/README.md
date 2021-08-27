compound-subject
================

A tiny JavaScript library for converting arrays of strings to compound subjects

## Installation

Node:

```shell
npm install compound-subject
```

Bower:

```shell
bower install compound-subject
```

## Usage

```javascript
compoundSubject(['apple', 'banana', 'cherry']).make();

// 'apple, banana and cherry'


compoundSubject(['apple', 'banana', 'cherry'])
	.endWith('or')
	.make();

// 'apple, banana or cherry'


compoundSubject(['apple', 'banana', 'cherry'])
	.delimitAll()
	.endWith('and maybe')
	.make();

// 'apple, banana, and maybe cherry'


compoundSubject([
	'a very crunchy Honeycrisp apple',
	'bananas at the pinnacle of ripeness',
	'delectable halved Rainier cherries'
]).delimitWith(';')
	.delimitAll()
	.make();

// 'a very crunchy Honeycrisp apple; bananas at the pinnacle of ripeness; and delectable halved Rainier cherries'
```
