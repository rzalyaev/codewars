// https://www.codewars.com/kata/554b4ac871d6813a03000035

// My variation

function highAndLow(numbers){
  let numStrArr = numbers.split(" ");
  let numArr = numStrArr.map(element => parseInt(element, 10));
  let numArrSorted = numArr.sort((a, b) => {
    return a - b;
  });
  return String(numArrSorted[numArrSorted.length - 1]) + " " + String(numArrSorted[0]);
}

// Best practice

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}