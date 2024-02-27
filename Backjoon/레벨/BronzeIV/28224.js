const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());

const arr = input.map((el) => +el.trim());

let answer = 0;
for (let i = 0; i < n; i++) {
  answer += arr[i];
}

console.log(answer);
