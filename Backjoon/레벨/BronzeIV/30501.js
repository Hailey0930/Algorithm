const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim());

arr.forEach((el) => {
  if (el.includes("S")) console.log(el);
});
