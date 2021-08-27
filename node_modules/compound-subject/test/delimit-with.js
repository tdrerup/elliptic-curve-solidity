var assert = require('assert'),
	compoundSubject = require('../compound-subject.js');

exports['test .delimitWith()'] = function () {

	assert.equal(
		compoundSubject(['apple']).delimitWith(';').make(),
		'apple'
	);

	assert.equal(
		compoundSubject(['apple', 'banana']).delimitWith(';').make(),
		'apple and banana'
	);

	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry']).delimitWith(';').make(),
		'apple; banana and cherry'
	);

	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry', 'dragon fruit']).delimitWith(';').make(),
		'apple; banana; cherry and dragon fruit'
	);


};
