const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const length = input.shift();
const arr = input[0].split("");

const answer = [];
for (let i = length - 1; i >= length - 5; i--) {
  answer.push(arr[i]);
}

console.log(answer.reverse().join(""));
