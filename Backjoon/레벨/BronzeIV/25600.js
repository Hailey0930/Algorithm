const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();

const arr = input.map((el) => el.trim().split(" "));

let answer = 0;

for (let i = 0; i < parseInt(N); i++) {
  const [a, d, g] = arr[i].map(Number);
  let score = 0;

  a === d + g ? (score = a * (d + g) * 2) : (score = a * (d + g));

  answer = Math.max(score, answer);
}

console.log(answer);
