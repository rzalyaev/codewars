// https://www.codewars.com/kata/54da539698b8a2ad76000228

// My variation

function isValidWalk(walk) {
  let answer = 0;
  walk.map(e => {
    switch (e) {
        case 'n': answer += 1; break
        case 's': answer -= 1; break
        case 'e': answer += 2; break
        case 'w': answer -= 2; break
    }
  });
  return answer == 0 && walk.length == 10 ? true : false;
}

// Best practice is kinda similar