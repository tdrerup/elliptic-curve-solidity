(function () {


	'use strict';


	var compoundSubject = function (arrayOfStrings) {


		var wrapperObject = {},
			endWith = 'and',
			delimitAll = false,
			delimitWith = ',';


		wrapperObject.endWith = function (newEndWith) {

			if (typeof newEndWith !== 'string') {
				return wrapperObject;
			}

			endWith = newEndWith;

			return wrapperObject;

		};


		wrapperObject.delimitAll = function (/*newDelimitAll*/) {

			var newDelimitAll = arguments[0];

			if (typeof newDelimitAll === 'boolean') {
				delimitAll = newDelimitAll;
			}

			else {
				delimitAll = true;
			}

			return wrapperObject;

		};


		wrapperObject.delimitWith = function (newDelimitWith) {

			if (typeof newDelimitWith !== 'string') {
				return wrapperObject;
			}

			delimitWith = newDelimitWith;

			return wrapperObject;

		};


		wrapperObject.make = function () {

			var combinedEndWith = delimitAll ? delimitWith + ' ' + endWith + ' ' : ' ' + endWith + ' ',
				upToLastTwo,
				lastTwo;

			if (typeof arrayOfStrings === 'undefined' || !arrayOfStrings instanceof Array) {
				return '';
			}

			upToLastTwo = arrayOfStrings
				.slice(0, -2)
				.join(delimitWith + ' ');

			lastTwo = arrayOfStrings
				.slice(arrayOfStrings.length - 2)
				.join(combinedEndWith);				

			if (!upToLastTwo.length) {
				return lastTwo;
			}

			return upToLastTwo + delimitWith + ' ' + lastTwo;

		};


		return wrapperObject;


	};


	// Node
	if (typeof module !== 'undefined') {
		module.exports = compoundSubject;
	}

	// Browser
	else if (typeof window !== 'undefined') {
		window.compoundSubject = compoundSubject;
	}

	else {
		throw new Error('Couldn\'t find a suitable scope in which to define compoundSubject');
	}


})();
