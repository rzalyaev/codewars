// https://www.codewars.com/kata/523f5d21c841566fde000009

// My variation

function arrayDiff(a, b) {
  let answer = [];
  a.map(element => {
    b.includes(element) == true ? answer.push() : answer.push(element);
  });
  return answer;
}

// Best practice

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}