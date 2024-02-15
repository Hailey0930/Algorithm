const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => +el.trim());

const direction = ["N", "E", "S", "W"];

let answer = "N";

arr.forEach((el) => {
  const answerIndex = direction.indexOf(answer);

  if (el === 1) {
    answer = direction[(answerIndex + 1) % 4];
  } else if (el === 2) {
    answer = direction[(answerIndex + 2) % 4];
  } else if (el === 3) {
    answer = direction[(answerIndex + 3) % 4];
  }
});

console.log(answer);
