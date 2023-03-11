// https://www.codewars.com/kata/56606694ec01347ce800001b

// My variation

function isTriangle(a,b,c) {
   return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
}

// Best practice is not optimal, so the cleverest is:

let isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;