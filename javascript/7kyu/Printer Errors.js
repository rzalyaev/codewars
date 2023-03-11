// https://www.codewars.com/kata/56541980fa08ab47a0000040

// My variation

function printerError(s) {
  return `${s.replace(/[a-m]+/g, '').length}/${s.length}`;
}

// Best practice is kinda same