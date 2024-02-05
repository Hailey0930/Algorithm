const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [A, B, C, D, E] = input.map((el) => +el);

let answer = 0;

if (A < 0) {
  answer += Math.abs(A) * C;
  A = 0;
}
if (A === 0) {
  answer += D;
}

answer += (B - A) * E;

console.log(answer);
