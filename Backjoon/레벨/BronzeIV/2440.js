const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = "";

for (let i = parseInt(input); i >= 1; i--) {
  answer += "*".repeat(i) + "\n";
}

console.log(answer);
