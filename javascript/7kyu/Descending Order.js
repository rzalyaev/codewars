// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// My variation

function descendingOrder(n){
  return parseInt(String(n).split("").sort((a,b) => { return b - a; }).join(""));
}

// Best practice

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}