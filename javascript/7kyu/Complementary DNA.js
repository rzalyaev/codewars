// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// My variation

function DNAStrand(dna){
  let comp = "";
  dna.split('').map(e => {
    if (e == "A") { comp += e.replace("A", "T"); };
    if (e == "T") { comp += e.replace("T", "A"); };
    if (e == "C") { comp += e.replace("C", "G"); };
    if (e == "G") { comp += e.replace("G", "C"); };
    comp + e;
  });
  return comp;
}

// Best practice

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}