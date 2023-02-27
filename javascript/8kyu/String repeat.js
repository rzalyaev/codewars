// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
  let counter = 0;
  let newString = "";
  while (counter < n) {
    newString += s;
    counter ++;
  }
  return newString;
}