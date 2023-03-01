// https://www.codewars.com/kata/54da5a58ea159efa38000836

// My variation

function findOdd(A) {
  let counter = 0;
  let answer;
  for (let i = 0; i < A.length; i++) {
    A.map(element => element == A[i] ? counter++ : counter += 0);
    counter % 2 == 1 || counter == 1 ? answer = A[i] : counter = 0;
    counter = 0;
  }
  return answer;
}

// Best practice

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);