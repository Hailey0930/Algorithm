const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b, c] = input.map((el) => +el);

if (a === 60 && b === 60 && c === 60) console.log("Equilateral");
else if (a + b + c === 180 && (a === b || b === c || a === c))
  console.log("Isosceles");
else if (a + b + c === 180 && a !== b && b !== c) console.log("Scalene");
else console.log("Error");
