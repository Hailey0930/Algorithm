const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 0;

input.split(" ").map((el) => {
  answer += +el * +el;
});

console.log(answer % 10);
