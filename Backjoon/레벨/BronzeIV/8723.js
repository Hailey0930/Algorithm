const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b, c] = input.map((el) => +el);

if (a === b && b === c) console.log(2);
else if (
  a ** 2 + b ** 2 === c ** 2 ||
  a ** 2 + c ** 2 === b ** 2 ||
  b ** 2 + c ** 2 === a ** 2
)
  console.log(1);
else console.log(0);
