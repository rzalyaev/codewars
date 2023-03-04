// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

// My variation

function filter_list(l) {
  return l.filter((e) => typeof e == "number");
}

// Best practice

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}