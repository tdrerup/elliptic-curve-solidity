var assert = require('assert'),
	compoundSubject = require('../compound-subject.js');

console.log(compoundSubject);

exports['test .make()'] = function () {

	assert.equal(
		compoundSubject(undefined).make(),
		''
	);

	assert.equal(
		compoundSubject(['apple']).make(),
		'apple'
	);

	assert.equal(
		compoundSubject(['apple', 'banana']).make(),
		'apple and banana'
	);

	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry']).make(),
		'apple, banana and cherry'
	);

	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry', 'dragon fruit']).make(),
		'apple, banana, cherry and dragon fruit'
	);

};
