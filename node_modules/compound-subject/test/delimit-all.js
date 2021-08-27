var assert = require('assert'),
	compoundSubject = require('../compound-subject.js');

exports['test .delimitAll()'] = function () {

	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry']).delimitAll().make(),
		'apple, banana, and cherry'
	);

	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry']).delimitAll().delimitAll(false).make(),
		'apple, banana and cherry'
	);

};
