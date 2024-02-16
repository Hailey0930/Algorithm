const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let result = 1;
for (let i = 1; i <= parseInt(input); i++) {
  result *= i;
}

const answer = result / 60 / 60 / 24 / 7;
console.log(answer);
