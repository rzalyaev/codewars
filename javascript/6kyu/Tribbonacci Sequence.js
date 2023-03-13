// 

// My variation

function tribonacci(s, n) {
  if (n == 0) { return []; };
  if (n < 3) { return s.slice(0, n); };
  for (let i = 1; i < n - 2; i++) {
    s.push(s.slice(-3).reduce((a, b) => a + b));
  }
  return s;
}

// Best practice

function tribonacci(signature,n){  
  for (let i = 0; i < n - 3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}