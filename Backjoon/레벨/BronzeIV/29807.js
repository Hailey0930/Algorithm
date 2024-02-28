const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const arr = input[0].split(" ").map((el) => +el.trim());
const [a, b, c, d, e] = Array(5)
  .fill(0)
  .map((v, i) => arr[i] || v);

let result = 0;

if (a > c) {
  result += (a - c) * 508;
} else {
  result += (c - a) * 108;
}

if (b > d) {
  result += (b - d) * 212;
} else {
  result += (d - b) * 305;
}

if (e !== 0) {
  result += e * 707;
}

console.log(result * 4763);
