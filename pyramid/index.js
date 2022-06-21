// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    const columnLength = n * 2 - 1;
    const arr = Array(columnLength).fill(' ');
    const centerColumn = Math.floor(arr.length / 2);

    arr[centerColumn] = '#';

    for (let j = 1; j < n; j++) {
      for (let r = 1; r <= row; r++) {
        arr[centerColumn + r] = '#';
        arr[centerColumn - r] = '#';
      }
    }

    console.log(arr.join(''));
  }
}

function pyramid1(n) {
  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      const midpoint = Math.floor((2 * n - 1) / 2);
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

function pyramid2(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid2(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid2(n, row, level + add);
}

module.exports = pyramid2;
