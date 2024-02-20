const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [S, A, B] = input.map(Number);

const sum = S > A ? 250 + Math.ceil((S - A) / B) * 100 : 250;

console.log(sum);
