const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B, C] = input.map(Number);

const average = (A + B + C) / 3;

const a = average - A;
const b = average - B;

console.log(a * 2 + b);
