const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [w1, h1, w2, h2] = input.map((el) => +el.trim());

console.log(2 * (h1 + h2) + Math.max(w1, w2) * 2 + 4);
