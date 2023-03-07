// https://www.codewars.com/kata/5552101f47fc5178b1000050

// My variation

function digPow(n, p){
  let sum = 0;
  console.log(Math.pow(parseInt('9'), p + 1));
  n.toString().split('').map(e => {
    sum += Math.pow(parseInt(e), p);
    p++;
  });
  return Number.isInteger(sum / n) == true ? sum / n : -1;
}

// Best practice

function digPow(n, p) {
  let x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}