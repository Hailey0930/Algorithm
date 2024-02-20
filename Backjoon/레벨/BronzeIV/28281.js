const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [first, second] = input.map((el) => el.trim());
const [N, X] = first.split(" ").map((el) => +el);
const arr = second.split(" ").map((el) => +el);

const answer = [];

for (let i = 0; i < N - 1; i++) {
  const result = arr[i] * X + arr[i + 1] * X;

  answer.push(result);
}

console.log(Math.min(...answer));
