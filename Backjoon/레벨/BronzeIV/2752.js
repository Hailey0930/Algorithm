const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split(" ").map((el) => +el);
console.log(...arr.sort((a, b) => a - b));
