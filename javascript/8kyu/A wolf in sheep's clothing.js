// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

function warnTheSheep(queue) {
  let counter = 0;
  for (let i = queue.length - 1; i > -1; i--) {
    if (queue[i] == "wolf" && queue[i] == queue[queue.length - 1]) {
      return "Pls go away and stop eating my sheep";
    } else
      if (queue[i] == "wolf" && queue[i] != queue[queue.length - 1]) {
        return `Oi! Sheep number ${counter}! You are about to be eaten by a wolf!`
      }
    counter++;
  }
}