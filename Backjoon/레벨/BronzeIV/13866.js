const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B, C, D] = input.map((el) => +el);

console.log(Math.abs(A + D - (B + C)));
