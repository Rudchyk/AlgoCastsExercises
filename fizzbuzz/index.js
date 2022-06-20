// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const isMultiplesTo = (number, i) => i % number === 0;

  for (let i = 1; i <= n; i++) {
    const multiples3 = isMultiplesTo(3, i);
    const multiples5 = isMultiplesTo(5, i);

    if (multiples3 && multiples5) {
      console.log('fizzbuzz');
    } else if (multiples3) {
      console.log('fizz');
    } else if (multiples5) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
