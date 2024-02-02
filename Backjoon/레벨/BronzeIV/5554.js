const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b, c, d] = input.map((el) => +el);

const total = a + b + c + d;

const x = Math.floor(total / 60);
const y = total % 60;

console.log(x);
console.log(y);
