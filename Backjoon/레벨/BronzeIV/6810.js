const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const number = `9780921418${input.map((el) => +el.trim()).join("")}`.split("");

let answer = 0;
number.forEach((el, index) => {
  if (index % 2 === 0) answer += +el * 1;
  else answer += +el * 3;
});

console.log(`The 1-3-sum is ${answer}`);
