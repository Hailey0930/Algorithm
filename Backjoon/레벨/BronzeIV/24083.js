const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input.map((el) => +el.trim());

let answer = A + B;

while (answer > 12) {
  answer -= 12;
}

console.log(answer);
