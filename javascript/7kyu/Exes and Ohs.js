// https://www.codewars.com/kata/55908aad6620c066bc00002a

// My variation

function XO(str) {
  return str == '' ? true :
    str.match(/x/gi) != null && str.match(/o/gi) != null ?
      str.match(/x/gi).length == str.match(/o/gi).length ? true : false
      : false;
}

// Best practice

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}