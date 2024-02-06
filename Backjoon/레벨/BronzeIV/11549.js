const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [T, test] = input.map((el) => el.trim());

let answer = 0;

test.split(" ").forEach((el) => {
  if (+el === parseInt(T)) answer += 1;
});

console.log(answer);
