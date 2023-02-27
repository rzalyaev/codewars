// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x){
  let newArr = '';
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      newArr += x[i];
    }
  }
  return newArr;
}