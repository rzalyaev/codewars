// https://www.codewars.com/kata/517abf86da9663f1d2000003

// My variation

function toCamelCase(str){
  return str === "" ? "" : str.split(/[^A-Za-z]/).map(e => {
    if (str.split(/[^A-Za-z]/).indexOf(e) != 0) {
      let word = e.split('');
      word.splice(0, 1, e.split('')[0].toUpperCase());
      return word.join('');
    } else
      return e;
  }).join('');
}

// Best practice

function toCamelCase(str){
  let regExp = /[-_]\w/gi;
  return str.replace(regExp, function(match){
    return match.charAt(1).toUpperCase();
  });
}