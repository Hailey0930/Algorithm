const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = [];

for (let i = 1; i <= parseInt(input); i++) {
  answer.push(i);

  if (i % 6 === 0 || i === parseInt(input)) {
    answer.push("Go!");
  }
}

console.log(answer.join(" "));
