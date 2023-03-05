// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// My variation

function duplicateCount(text){
  let counter = 0;
  let array = text.toUpperCase().split('').sort();
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) != array.lastIndexOf(array[i])) {
      array.splice(array.indexOf(array[i]), array.lastIndexOf(array[i]) - array.indexOf(array[i]) + 1);
      counter++;
      i--;
    }
  }
  return counter;
}

// Best practice

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}