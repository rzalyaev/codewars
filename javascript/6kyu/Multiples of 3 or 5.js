// https://www.codewars.com/kata/514b92a657cdc65150000006

// My variation

function solution(number){
  let array = [];
  let answer = 0;
  for (let i = 1; i < number; i++) {
    array.push(i);
  }
  const resultsArr = array.filter(element => element % 3 == 0 || element % 5 == 0);
  resultsArr.map(element => answer += element);
  return answer;
}

// Best practice

function solution(number){
  let sum = 0;
  for(let i = 1; i < number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}