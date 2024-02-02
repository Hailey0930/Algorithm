const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [Y, M] = input.map((el) => +el.trim());

console.log(M - Y + M);
