const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [jinho, count, ...arr] = input;

let answer = 0;

for (let i = 0; i < count; i++) {
  if (arr[i] === jinho) answer += 1;
}

console.log(answer);
