const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  const [question, a, b, c] = el.map(Number);
  const sum = a + b + c;

  sum >= 55 && a >= 35 * 0.3 && b >= 25 * 0.3 && c >= 40 * 0.3
    ? console.log(`${question} ${sum} PASS`)
    : console.log(`${question} ${sum} FAIL`);
});
