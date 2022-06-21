// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = String(Math.abs(n));

  if (str.length === 1) {
    return n;
  }

  let reversed = str.split('').reverse().join('');

  reversed = n < 0 ? '-' + reversed : reversed;

  return Number(reversed);
}

function reverseInt1(n) {
  const str = String(Math.abs(n));

  if (str.length === 1) {
    return n;
  }

  let reversed = str.split('').reverse().join('');

  reversed = Math.sign(n) * Number(reversed);

  return Number(reversed);
}

function reverseInt2(n) {
  const reversed = n.toString().split('').reverse().join('');

  return Math.sign(n) * parseInt(reversed);
}

module.exports = reverseInt2;
