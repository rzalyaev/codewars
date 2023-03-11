// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// My variation

function towerBuilder(nFloors) {
  let array = [];
  let stars = 1;
  let floor = '';
  for (let i = 0; i < nFloors; i++) {
    floor += ' '.repeat(nFloors - 1 - i) + '*'.repeat(stars) + ' '.repeat(nFloors - 1 - i);
    stars += 2;
    array.push(floor);
    floor = '';
  }
  return array;
}

// Best practice

function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}