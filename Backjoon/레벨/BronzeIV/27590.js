const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => el.trim().split(" "));

const [ds, ys] = arr[0].map((el) => +el);
const [dm, ym] = arr[1].map((el) => +el);

let sunYear = ys - ds;
let moonYear = ym - dm;

while (sunYear !== moonYear) {
  if (sunYear < moonYear) sunYear += ys;
  else moonYear += ym;
}

console.log(sunYear);
