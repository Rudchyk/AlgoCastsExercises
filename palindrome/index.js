// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function palindrome1(str) {
  return str
    .split('')
    .every((val, index, arr) => val === arr[arr.length - 1 - index]);
}

module.exports = palindrome1;
