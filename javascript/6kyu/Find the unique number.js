// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// My variation

function findUniq(arr) {
  return Number(arr.map(e => {return arr.indexOf(e) != arr.lastIndexOf(e) ? "" : e}).join(''));
}

// Best practice

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}