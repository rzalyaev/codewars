// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// My variation

function accum(s) {
  let newStr = ""
	let splittedArray = s.toUpperCase().split("");
  for (let i = 0; i < splittedArray.length; i++) {
    if (i < splittedArray.length - 1) {
      newStr += splittedArray[i].replace(/^[A-Z]/, splittedArray[i] + splittedArray[i].toLowerCase().repeat(i) + "-");
    } else {
        newStr += splittedArray[i].replace(/^[A-Z]/, splittedArray[i] + splittedArray[i].toLowerCase().repeat(i));
    }
  }
  return newStr;
}

// Best practice

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}