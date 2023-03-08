// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// My variation

function abbrevName(name){
  return name.split(' ').map(e => e.charAt(0).toUpperCase()).join('.');
}

// Best practice

function abbrevName(name){
  let nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}