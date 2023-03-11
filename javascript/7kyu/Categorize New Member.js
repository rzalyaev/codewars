// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

// My variation

function openOrSenior(data){
  return data.map(e => {return e[0] >= 55 && e[1] > 7 ? 'Senior' : 'Open'});
}

// Best practice

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}