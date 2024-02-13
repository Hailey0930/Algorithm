const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  const a = el[0];
  const b = el[1];
  const c = el[2];

  console.log(Math.min(a, b, c));
});
