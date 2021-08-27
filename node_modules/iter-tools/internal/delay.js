function delay(ms, output) {
  return new Promise(function (resolve, reject) {
    return setTimeout(function () {
      if (output instanceof Error) {
        reject(output);
      } else {
        resolve(output);
      }
    }, ms);
  });
}

exports.delay = delay;