// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let counter = 0;
  const r = new RegExp(/[aeiou]/, 'm');

  for (const letter of str.toLowerCase()) {
    if (r.test(letter)) {
      counter++;
    }
  }

  return counter;
}

function vowels1(str) {
  let counter = 0;
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

  for (const letter of str.toLowerCase()) {
    if (vowelsArr.includes(letter)) {
      counter++;
    }
  }

  return counter;
}

function vowels2(str) {
  let counter = 0;
  const vowels = 'aeiou';

  for (const letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }

  return counter;
}

function vowels3(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels2;
