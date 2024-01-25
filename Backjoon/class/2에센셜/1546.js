const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = +input[0];
const arr = input[1].split(" ").map((el) => +el);
const max = Math.max(...arr);

const newScore = arr.map((el) => (el / max) * 100);
const sumScore = newScore.reduce((acc, cur) => {
  return acc + cur;
});

console.log(sumScore / count);
