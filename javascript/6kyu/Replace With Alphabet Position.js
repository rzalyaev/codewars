// https://www.codewars.com/kata/546f922b54af40e1e90001da

// My variation

function alphabetPosition(text) {
  let arr_en = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.toLowerCase().replace(/[^a-z]/g, '').split('').map(e => e.replace(/./, arr_en.indexOf(e) + 1)).join(' ');
}

// Best practice

function alphabetPosition(text) {
  return text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
}