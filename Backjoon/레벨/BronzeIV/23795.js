const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

let answer = 0;

for (let i = 0; i < input.length; i++) {
  answer += parseInt(input[i]);
}

console.log(answer);
