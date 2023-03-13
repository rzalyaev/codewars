// https://www.codewars.com/kata/5412509bd436bd33920011bc

// My variation

function maskify(cc) {
  return cc.length <= 4 ? cc : cc.slice(0, cc.length - 4).replace(/\w/g, "#").concat(cc.slice(cc.length - 4, cc.length));
}

// Best practice

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// The cleverest

function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}