const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B] = input.map((el) => +el.trim());

console.log(Math.max(A + B, A - B));
console.log(Math.min(A + B, A - B));
