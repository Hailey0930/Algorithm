const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;

input[1].split("").map((el) => {
  answer += +el;
});

console.log(answer);
