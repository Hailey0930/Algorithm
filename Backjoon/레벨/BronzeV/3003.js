const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const answer = [];
const piece = [1, 1, 2, 2, 2, 8];
const white = input.split(" ").map((el) => +el);

for (let i = 0; i < 6; i++) {
  answer.push(piece[i] - white[i]);
}

console.log(answer.join(" "));
