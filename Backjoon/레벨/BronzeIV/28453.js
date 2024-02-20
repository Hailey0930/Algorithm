const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input[0].split(" ").map((el) => +el);

const answer = [];

arr.forEach((el) => {
  if (el >= 300) answer.push(1);
  else if (el >= 275 && el < 300) answer.push(2);
  else if (el >= 250 && el < 275) answer.push(3);
  else if (el < 250) answer.push(4);
});

console.log(answer.join(" "));
