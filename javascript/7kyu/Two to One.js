// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// My variation

function longest(s1, s2) {
  let str = s1 + s2;
  let array = str.split('').sort();
  for (let i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      array[i] = '';
    }
  }
  return array.join('');
}

// Best practice

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')