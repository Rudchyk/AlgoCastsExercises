// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const getObj = (string) => {
    const str = string.replace(/[^\w]/g, '').toLowerCase();
    const obj = {};

    for (const iterator of str) {
      if (!obj[iterator]) {
        obj[iterator] = 1;
      } else {
        obj[iterator] += 1;
      }
    }

    return obj;
  };
  const objA = getObj(stringA);
  const objB = getObj(stringB);

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  // let result = false;

  // for (const key in objA) {
  //   if (objA[key] === objB[key]) {
  //     result = true;
  //   } else {
  //     result = false;
  //   }
  // }

  // return result;

  for (const key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

function anagrams1(stringA, stringB) {
  const prepareStr = (str) => {
    const formattedStr = str.replace(/[^\w]/g, '').toLowerCase();
    return formattedStr.split('').sort().join('');
  };

  return prepareStr(stringA) === prepareStr(stringB);
}

module.exports = anagrams1;
