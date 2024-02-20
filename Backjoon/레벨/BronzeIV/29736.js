const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [first, second] = input.map((el) => el.trim());

const [A, B] = first.split(" ").map((el) => +el);
const [K, X] = second.split(" ").map((el) => +el);

let answer = 0;

for (let i = K - X; i <= K + X; i++) {
  if (i < A || i > B) continue;
  answer++;
}

answer === 0 ? console.log("IMPOSSIBLE") : console.log(answer);
