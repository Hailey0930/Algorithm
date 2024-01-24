const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];

input.map((el) => {
  if (!answer.includes(+el.trim() % 42)) answer.push(+el.trim() % 42);
});

console.log(answer.length);
