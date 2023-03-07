// https://www.codewars.com/kata/5287e858c6b5a9678200083c

// My variation

function narcissistic(value) {
  let sum = 0;
  value.toString().split('').map(e => sum += Math.pow(e, value.toString().length));
  return sum == value ? true : false;
}

// Best practice

function narcissistic(value) {
  return ('' + value).split('').reduce((p, c) => {
    return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}