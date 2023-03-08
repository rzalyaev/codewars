// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// My variation

function solution(str) {
  let i = 0;
  let answer = [];
  let array = str.length % 2 == 0 ? str.split('') : (str + "_").split('');
  while (array.length >= 2) {
    answer.push(array[0] + array[1]);
    array.shift();
    array.shift();
    i++;
  }
  return answer;
}

// Best practice

function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}