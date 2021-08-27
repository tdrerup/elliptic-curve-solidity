function getSize(sequence) {
  if (sequence == null) {
    return 0;
  } else {
    var size = sequence.size;

    if (typeof size === 'number') {
      return sequence.size;
    } else if (Array.isArray(sequence)) {
      return sequence.length;
    }
  }

  throw new Error('The argument passed to getSize did not have a size');
}

exports.getSize = getSize;