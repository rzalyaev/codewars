// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// My variation

function persistence(num) {
  let counter = 0;
  let multiply = 1;
  do {
    num = String(num).split('');
    for (let i = 0; i < num.length; i++) {
      multiply *= parseInt(num[i]);
    }
    if (String(num).length > 1) {
      counter++;
    }
    num = multiply;
    multiply = 1;
  } while (String(num).length > 1);
  return counter;
}

// Best practice

function persistence(num) {
   let times = 0;
   num = num.toString();
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   return times;
}