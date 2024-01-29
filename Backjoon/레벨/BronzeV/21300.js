const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 0;
const arr = input.split(" ").map((el) => el);

arr.forEach((el) => {
  answer += el * 5;
});

console.log(answer);
