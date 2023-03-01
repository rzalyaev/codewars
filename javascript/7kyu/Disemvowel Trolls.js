// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  const vowelsArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (vowelsArr.includes(str[i]) == false) {
      newStr += str[i];
    }
  }
  return newStr;
}