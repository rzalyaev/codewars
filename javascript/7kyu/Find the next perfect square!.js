// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// My variation

function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) == true ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

// Best practice

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}