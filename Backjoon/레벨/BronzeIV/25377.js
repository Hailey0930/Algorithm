const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

let answer = Infinity;

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  const A = parseInt(el[0]);
  const B = parseInt(el[1]);

  if (B >= A) {
    answer = Math.min(answer, B);
  }
});

answer === Infinity ? console.log(-1) : console.log(answer);
