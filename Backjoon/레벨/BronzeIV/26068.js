const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

let answer = 0;
input.forEach((el) => {
  const element = el.trim().split("D-");
  parseInt(element[1]) <= 90 && answer++;
});

console.log(answer);
