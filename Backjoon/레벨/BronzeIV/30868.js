const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => +el.trim());

arr.forEach((el) => {
  let answer = "";
  let score = el;

  if (score >= 5) {
    answer += "++++ ".repeat(Math.floor(score / 5));
    score = el % 5;
  }

  answer += "|".repeat(score);
  console.log(answer);
});
