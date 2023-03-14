// https://www.codewars.com/kata/53af2b8861023f1d88000832

// My variation

function areYouPlayingBanjo(name) {
  return name[0] == "R" || name[0] == "r" ?
    `${name} plays banjo`
    : `${name} does not play banjo`;
}

// Best practice

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}