// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// My variation

function isPangram(string){
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let filteredArray = [];
  let sortedArray = string.toLowerCase().replace(/[^a-z]+/g, '').split('').sort();
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] != sortedArray[i + 1]) {
      filteredArray.push(sortedArray[i]);
    }
  }  
  return filteredArray.join('') == alphabet ? true : false;
}

// Best practice

function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}