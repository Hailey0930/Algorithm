const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);

if (number % 8 === 1) {
  console.log(1);
} else if (number % 8 === 2 || number % 8 === 0) {
  console.log(2);
} else if (number % 8 === 3 || number % 8 === 7) {
  console.log(3);
} else if (number % 8 === 4 || number % 8 === 6) {
  console.log(4);
} else console.log(5);
