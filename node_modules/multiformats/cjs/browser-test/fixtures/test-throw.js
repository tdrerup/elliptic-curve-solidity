'use strict';

function testThrow(fn, message) {
  try {
    fn();
  } catch (e) {
    if (e.message !== message)
      throw e;
    return;
  }
  throw new Error('Test failed to throw');
}

module.exports = testThrow;
