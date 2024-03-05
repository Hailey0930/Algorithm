const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [n, k, a, b] = input.map(Number);

const elevator = Math.abs(1 - k) * b + (n - 1) * b;
const stair = (n - 1) * a;

console.log(elevator, stair);
