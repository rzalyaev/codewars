// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// My variation

function findOutlier(integers){
  let isEven = integers.filter(e => e % 2 == 0 || e % 2 == -0);
  if (isEven.length == 1) {
     return parseInt(String(isEven));
  } else
     return parseInt(String(integers.filter(e => e % 2 == 1 || e % 2 == -1)));
}

// Best practice

function findOutlier(int){
  let even = int.filter(a => a % 2 == 0);
  let odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}