const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B, C] = input.map((el) => +el);

const max = Math.max(A, B, C);

console.log(max - A + max - B + max - C);
