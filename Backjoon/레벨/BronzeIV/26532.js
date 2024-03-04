const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input.map(Number);
const sum = a * b;

console.log(Math.ceil(sum / 4840 / 5));
