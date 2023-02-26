// https://www.codewars.com/kata/58d248c7012397a81800005c

let cubeChecker = function(volume, side){
  if (volume > 0 && side > 0) {
    if (volume == Math.pow(side, 3)) {
      return true;
    }
    return false;
  }
  return false;
}