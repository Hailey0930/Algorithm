const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

let max = 0;
arr.forEach((el) => {
  const [h, w] = el.map(Number);

  max = Math.max(h * w, max);
});

console.log(max);
