// https://www.codewars.com/kata/5545f109004975ea66000086

// My variation

function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
}

// Best practice

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}