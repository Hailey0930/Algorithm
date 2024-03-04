const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const track = input.pop();
const arr = input[0].trim().split(" ");

let answer = 0;
arr.forEach((el) => {
  if (el === track) answer++;
});

console.log(answer);
