// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

let isSquare = function(n){
  if (Math.pow(Math.round(Math.sqrt(n)), 2) == n) {
      return true;
  } else
  return false;
}