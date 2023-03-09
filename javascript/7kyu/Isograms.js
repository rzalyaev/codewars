// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// My variation

function isIsogram(str){
  let matchResult = str.toLowerCase().split('').sort().join('').match(/([^])\1+/g);
  return str == '' ? true : matchResult == null ? true : false;
}

// Best practice

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}