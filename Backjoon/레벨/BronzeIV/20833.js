const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 0;
for (let i = 1; i <= parseInt(input); i++) {
  answer += i ** 3;
}

console.log(answer);
