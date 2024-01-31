const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [H, I, A, R, C] = input.split(" ").map((el) => +el);

const first = H * I;
const second = A * R * C;

console.log(first - second);
