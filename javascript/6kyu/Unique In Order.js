// https://www.codewars.com/kata/54e6533c92449cc251001667

// My variation

let uniqueInOrder = function(iterable){
  let array;
  let answer = [];
  if (typeof iterable == "string") {
    array = iterable.split('');
  } else
    array = iterable;
  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[i + 1]) {
      answer.push(array[i]);
    }
  }
  return answer;
}

// Best practice

function uniqueInOrder(it) {
  let result = [];
  let last;
  
  for (let i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  return result;
}