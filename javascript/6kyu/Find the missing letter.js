// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

// My variation

function findMissingLetter(array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  alphabet = alphabet.includes(array[0]) ? alphabet : alphabet.toUpperCase();
  let aSlice = alphabet.slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[array.length - 1]) + 1);
  return aSlice.split('')
        .map(e => {
    return array.includes(e) ? '' : e;
  }).join('')
}

// Best practice

function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}