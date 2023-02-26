//  https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str){
  let revStr = "";
  for (let i = 0; i < str.length; i++) {
    revStr += str[str.length - 1 - i];
  }
  return revStr;
}