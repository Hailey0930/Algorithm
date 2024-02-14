const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const P = 5 * parseInt(input) - 400;

const UpAndDown = P < 100 ? 1 : P > 100 ? -1 : 0;

console.log(P);
console.log(UpAndDown);
