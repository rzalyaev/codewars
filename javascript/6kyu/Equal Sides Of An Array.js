// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

// My variation

function findEvenIndex(arr) {
  let answer = -1;
  let sumBefore = 0;
  let sumAfter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      sumBefore += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      sumAfter += arr[k];
    }
    if (sumBefore == sumAfter) {
      answer = i;
    }
    sumBefore = sumAfter = 0;
  }
  answer = arr.join('').match(/[^0+]/) == null ? 0 : answer;
  return answer;
}

// The cleverest

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));