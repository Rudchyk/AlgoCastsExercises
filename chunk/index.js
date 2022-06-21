// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const result = [];
  let arr = [];
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    arr.push(array[i]);

    if (arr.length === size || i === arrayLength - 1) {
      result.push(arr);
      arr = [];
    }
  }

  return result;
}

function chunk1(array, size) {
  const chunked = [];

  for (const iterator of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([iterator]);
    } else {
      last.push(iterator);
    }
  }

  return chunked;
}

function chunk2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk2;
