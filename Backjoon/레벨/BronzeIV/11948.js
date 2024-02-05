const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B, C, D, E, F] = input.map((el) => +el);

const three = [A, B, C, D].sort((a, b) => a - b);
three.shift();

const one = Math.max(E, F);

let answer = one;
three.forEach((el) => {
  answer += el;
});

console.log(answer);
