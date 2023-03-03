// https://www.codewars.com/kata/525f50e3b73515a6db000b83

// My variation

function createPhoneNumber(numbers){
  numbers.unshift("\(");
  numbers.splice(4, 0, "\) ");
  numbers.splice(8, 0, "-");
  return numbers.join("");
}

// Best practice

function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  for(var i = 0; i < numbers.length; i++){
    format = format.replace('x', numbers[i]);
  }
  return format;
}