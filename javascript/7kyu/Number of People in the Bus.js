// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// My variation

let number = function(busStops){
    return busStops.reduce((still, stop) => still + stop[0] - stop[1] , 0);
}

// Best practice

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);