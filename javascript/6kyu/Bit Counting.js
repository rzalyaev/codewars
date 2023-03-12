// https://www.codewars.com/kata/526571aae218b8ee490006f4

// My variation

let countBits = function(n) {
  let counter = 0;
  n.toString(2).split('').map(e => e == '1' ? counter += 1 : counter += 0);
  return counter;
};

// Best practice

countBits = n => n.toString(2).split('0').join('').length;