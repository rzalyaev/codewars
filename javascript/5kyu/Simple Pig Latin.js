// 

// My variation

function pigIt(str){
  return str.split(' ').map(e => {
    return /[^A-Za-z]/.test(e) == true ? e : e.replace(/^\w/, '') + e[0] + 'ay';
  }).join(' ');
}

// Best practice

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}