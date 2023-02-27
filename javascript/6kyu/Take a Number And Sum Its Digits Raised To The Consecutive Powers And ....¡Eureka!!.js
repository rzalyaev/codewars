function sumDigPow(a, b) {
  let trueArr = [];
  let tempSum = 0;
  for (let i = a; i < b; i++) {
    a = String(a);
    for (let j = 0; j < a.length; j++) {
      tempSum += Math.pow(parseInt(a[j], 10), j + 1);
    }
    if (tempSum == parseInt(a, 10)) {
      trueArr.push(parseInt(a, 10));
    }
    a = parseInt(a, 10) + 1;
    tempSum = 0;
  }
  return trueArr;
}