// https://www.codewars.com/kata/54b724efac3d5402db00065e

// My variation

decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split('   ')
    .map(word => {return word.split(' ')
      .map(char => {return MORSE_CODE[char]}).join('');
  }).join(' ');
}

// Best practice

decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}