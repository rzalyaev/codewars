// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// My variation

function digitize(n) {
  return String(n).split('').reverse().map(e => parseInt(e));
}

// Best practice

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}