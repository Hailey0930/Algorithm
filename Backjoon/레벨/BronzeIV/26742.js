const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

let white = 0;
let black = 0;

input.forEach((el) => {
  if (el === "B") white++;
  else if (el === "C") black++;
});

console.log(Math.floor(white / 2) + Math.floor(black / 2));
