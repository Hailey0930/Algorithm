const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input.map((el) => +el.trim());

const min = Math.min(k + 60, n);

console.log(min * 1500 + (n - min) * 3000);
