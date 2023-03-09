// https://www.codewars.com/kata/55f2b110f61eb01779000053

// My variation

function getSum(a, b) {
  let array = [];
  let sum = 0;
  if (a == b) {
    return a;
  } else {
    array.push(a);
    array.push(b);
    array.sort((a, b) => a - b);
    for (let i = array[0]; i < array[1] + 1; i++) {
      sum += i;
    }
    return sum;  
  }
}

// Best practice

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}