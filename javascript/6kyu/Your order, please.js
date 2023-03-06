// https://www.codewars.com/kata/55c45be3b2079eccff00010f

// My variation

function order(words){
  return words.split(' ').sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0]).join(' ');
}

// Best practice

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}