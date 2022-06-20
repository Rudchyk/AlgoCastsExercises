// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const fibList = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers; i++) {
    if (i < 2) {
      result.push(1);
    } else {
      const number = result[i - 1] + result[i - 2];
      result.push(number);
    }
  }

  return result.join(',');
};

console.log('fibList(15)', fibList(15));

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
