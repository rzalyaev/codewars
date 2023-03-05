// https://www.codewars.com/kata/541c8630095125aba6000c00

// My variation

function digitalRoot(n) {
  let sum = 0;
  let tempSum = 0;
  String(n).split('').map(e => sum += Number(e));
  if (String(sum).length == 1) {
    return sum;
  } else {
    while (String(sum).length > 1) {
      tempSum = 0;
      String(sum).split('').map(e => tempSum += Number(e));
      sum = tempSum;
    }
    return sum;
  }
}

// Best practice

function digital_root(n) {
  return (n - 1) % 9 + 1;
}