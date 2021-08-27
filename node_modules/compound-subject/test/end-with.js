var assert = require('assert'),
	compoundSubject = require('../compound-subject.js');

exports['test .endWith()'] = function () {

	assert.equal(
		compoundSubject(['apple', 'banana', 'cherry']).endWith('or').make(),
		'apple, banana or cherry'
	);

};
