const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let answer = 1;

for (let i = 1; i <= input; i++) {
  answer *= i;
}

console.log(answer);
