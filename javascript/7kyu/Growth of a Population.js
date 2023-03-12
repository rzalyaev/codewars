// https://www.codewars.com/kata/563b662a59afc2b5120000c6

// My variation

function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 += Math.floor(p0 * (percent / 100)) + aug;
    years++;
  }
  return years;
}

// Best practice

function nbYear(p0, percent, aug, p) {
  for (let years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}