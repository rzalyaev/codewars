// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

// My variation

function rowSumOddNumbers(n) {
  let addLeft = 2;
	let sumLeft = 1;
  let sum = 0;
  if (n == 1) {return n};
  for (let i = 1; i < n; i++) {
    sumLeft += addLeft;
    addLeft += 2;
  };
  let sumRight = sumLeft + addLeft - 2;
  while (sumRight >= sumLeft) {
    sum += sumLeft;
    sumLeft += 2;
  };
  return sum;
}

// Best practice (why am I so stupid? >.<)

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}