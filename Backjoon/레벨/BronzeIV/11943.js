const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [first, second] = input;
const [A, B] = first.split(" ").map((el) => +el.trim());
const [C, D] = second.split(" ").map((el) => +el.trim());

console.log(Math.min(A + D, B + C));
