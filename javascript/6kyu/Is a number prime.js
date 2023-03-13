// https://www.codewars.com/kata/5262119038c0985a5b00029f

// My variation

function isPrime(num) {
  if (num < 2) { return false; };
  if (num == 2 || num == 3) { return true; };
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) { return false; }
  }
  return true;
}

// Best practice

function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}