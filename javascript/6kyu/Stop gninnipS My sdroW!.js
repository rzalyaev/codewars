// https://www.codewars.com/kata/5264d2b162488dc400000001

// My variation

function spinWords(string){
  let answer = "";
  let reversedWordArray = [];
  let strArr = string.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      reversedWordArray = strArr[i].split("");
      answer += reversedWordArray.reverse().join("");
    } else
      answer += strArr[i];
    i != strArr.length - 1 ? answer += " ": answer += "";
  }
  return answer;
}

// Best practice

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

// or

function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}