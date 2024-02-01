const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  const [d, f, p] = el.map((item) => +item);
  const sum = d * f * p;
  console.log(`$${sum.toFixed(2)}`);
});
