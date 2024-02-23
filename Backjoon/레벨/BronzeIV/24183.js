const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b, c] = input.map((el) => +el);

const c4 = 229 * 324 * a * 2;
const a3 = 297 * 420 * b * 2;
const a4 = 210 * 297 * c;

console.log(((c4 + a3 + a4) * 0.000001).toFixed(6));
