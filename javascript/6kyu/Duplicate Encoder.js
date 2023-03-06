// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// My variation

function duplicateEncode(word){
  let answer = "";
  let wordArray = word.toLowerCase().split('');
  for (let i = 0; i < wordArray.length; i++) {
    let firstIndex = wordArray.indexOf(wordArray[i]);
    let lastIndex = wordArray.lastIndexOf(wordArray[i]);
    if (firstIndex != lastIndex) {
      answer += "\u0029";
    } else {
      answer += "\u0028";
    }
  }
  return answer;
}

// Best practice

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}