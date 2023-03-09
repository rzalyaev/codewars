// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// My variation

function moveZeros(arr) {
  let zeros = [];
  let notZeros = [];
  arr.map(e => {
    if (e !== 0) {
      notZeros.push(e);
    } else {
      zeros.push(e);
    }
  });
  return notZeros.concat(zeros);
}

// Best practice

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}