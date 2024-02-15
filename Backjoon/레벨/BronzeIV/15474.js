const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, A, B, C, D] = input.map((el) => +el.trim());

const X = Math.ceil(N / A) * B;
const Y = Math.ceil(N / C) * D;

console.log(Math.min(X, Y));
