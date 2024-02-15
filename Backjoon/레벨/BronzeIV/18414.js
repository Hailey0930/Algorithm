const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [X, L, R] = input.map((el) => +el.trim());

let answer = L;

for (let i = L; i <= R; i++) {
  if (Math.abs(X - i) < Math.abs(X - answer)) answer = i;
}

console.log(answer);
