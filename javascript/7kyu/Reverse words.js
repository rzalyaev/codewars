// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// My variation

function reverseWords(str) {
  return str.split(' ').map(e => { return e.split('').reverse().join(''); }).join(' ');
}

// Best practice is the same