module.exports = startsWithVowel

function startsWithVowel (str) {
  return /^[aeiou]/i.test(str)
}
