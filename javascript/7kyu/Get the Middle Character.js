// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else
    if (s.length % 2 == 1) {
      return s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1);
    }
}