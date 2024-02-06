const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B] = input.map((el) => +el);

console.log(Math.min(Math.floor(A / 2), B));
