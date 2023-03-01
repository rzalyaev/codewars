// https://www.codewars.com/kata/546e2562b03326a88e000020

// My variation

function squareDigits(num){
  let numStr = String(num);
  let outputStr = "";
  for (let i = 0; i < numStr.length; i++) {
    outputStr += String(parseInt(numStr[i]) * parseInt(numStr[i]));
  }
  return parseInt(outputStr);
}

// Best practice

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}