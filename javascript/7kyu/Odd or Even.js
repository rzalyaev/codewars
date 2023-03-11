// https://www.codewars.com/kata/5949481f86420f59480000e7

// My variation

function oddOrEven(array) {
  let sum = 0;
  array.map(e => sum += e);
  return sum % 2 == 0 ? 'even' : 'odd';
}

// Best practice

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}