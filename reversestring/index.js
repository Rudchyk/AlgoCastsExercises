// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((accumulator, item) => item + accumulator, '');
}

function reverse1(str) {
  return str.split('').reverse().join('');
}

function reverse2(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

  return result;
}

function reverse3(str) {
  let result = '';

  for (let iterator of str) {
    result = iterator + result;
  }

  return result;
}

module.exports = reverse;
