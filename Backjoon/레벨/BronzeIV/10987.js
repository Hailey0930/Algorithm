const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split("");

let answer = 0;
arr.forEach((el) => {
  if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
    answer += 1;
  }
});
console.log(answer);
