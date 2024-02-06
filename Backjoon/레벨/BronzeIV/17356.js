const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B] = input.map((el) => +el);

const M = (B - A) / 400;

console.log(1 / (1 + 10 ** M));
