// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// My variation

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

// Best practice is the same