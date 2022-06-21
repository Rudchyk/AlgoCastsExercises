// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};

  // for (let i = 0; i < str.length; i++) {
  //   const char = str[i];
  //   if (!obj[char]) {
  //     obj[char] = 1;
  //   } else {
  //     obj[char] = obj[char] + 1;
  //   }
  // }

  for (const char of str) {
    // if (!obj[char]) {
    //   obj[char] = 1;
    // } else {
    //   obj[char] = obj[char] + 1;
    // }

    obj[char] = obj[char] + 1 || 1;
  }

  let resultCount = 0;
  let result = '';

  for (const key in obj) {
    if (obj[key] >= resultCount) {
      resultCount = obj[key];
      result = key;
    }
  }

  return result;
}

function maxChar1(str) {}

module.exports = maxChar;
