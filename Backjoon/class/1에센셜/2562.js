const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => +el.trim());

const max = Math.max(...arr);
const indexOfMax = arr.indexOf(max) + 1;

console.log(max);
console.log(indexOfMax);
