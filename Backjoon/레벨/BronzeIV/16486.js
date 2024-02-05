const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [d1, d2] = input.map((el) => +el);

console.log(d1 * 2 + d2 * 2 * 3.141592);
