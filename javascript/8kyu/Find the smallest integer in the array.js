// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

// My variation

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort((a, b) => {
      return a - b;
    })
    return args[0];
  }
}

// Best practice

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}