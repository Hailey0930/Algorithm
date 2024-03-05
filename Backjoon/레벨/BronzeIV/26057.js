const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [L, T] = input.map((el) => +el.trim());

console.log((T - L / 2) * 2);
