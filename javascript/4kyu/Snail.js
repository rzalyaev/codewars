// 

// My variation

const snail = function(array) {
  let snailArray = [];
  let counter = 0;
  const tempArray = array.length;
  if (array.length % 2 == 1) {
    while (counter < Math.floor(tempArray / 2) + 1) {
      console.log(array);
      array[0].map(element => snailArray.push(element));
      for (let i = 1; i < array.length - 1; i++) {
        snailArray.push(array[i][array.length - 1]);
      }
      if (array.length != 1) {
        array[array.length - 1].reverse().map(number => snailArray.push(number));
      }
      for (let j = array.length - 1; j > 1; j--) {
        snailArray.push(array[j - 1][0]);
      }
      for (let i = 1; i < array.length - 1; i++) {
        array[i].pop();
      }
      for (let j = array.length - 1; j > 1; j--) {
        array[j - 1].shift();
      }
      array.shift();
      array.pop();
      counter++;
      console.log(snailArray);
    }
  } else 
    if (array.length % 2 == 0) {
      while (counter < tempArray / 2) {
        console.log(array);
        array[0].map(element => snailArray.push(element));
        for (let i = 1; i < array.length - 1; i++) {
          snailArray.push(array[i][array.length - 1]);
        }
        if (array.length != 1) {
          array[array.length - 1].reverse().map(number => snailArray.push(number));
        }
        for (let j = array.length - 1; j > 1; j--) {
          snailArray.push(array[j - 1][0]);
        }
        for (let i = 1; i < array.length - 1; i++) {
          array[i].pop();
        }
        for (let j = array.length - 1; j > 1; j--) {
          array[j - 1].shift();
        }
        array.shift();
        array.pop();
        counter++;
        console.log(snailArray);
      }
    }
  return snailArray;
}

// Best practice

snail = function(array) {
  let result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}

// or

snail = array =>
  [...Array(array.length)].reduce(pre => (pre.push(...array.shift(), ...array.map(val => val.pop())), array.reverse().map(val => val.reverse()), pre), []);