// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// My variation

function past(h, m, s){
  return h * 3600000 + m * 60000 + s * 1000;
}

// Best practice

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}