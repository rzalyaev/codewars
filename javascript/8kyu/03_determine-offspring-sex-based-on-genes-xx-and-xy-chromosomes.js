// Determine offspring sex based on genes XX and XY chromosomes
// https://www.codewars.com/kata/56530b444e831334c0000020

function chromosomeCheck(sperm) {
  switch (sperm) {
      case "XY":
        return "Congratulations! You're going to have a son.";
      case "XX":
        return "Congratulations! You're going to have a daughter.";
  }
}