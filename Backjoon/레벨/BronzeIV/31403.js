const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B, C] = input.map((el) => el.trim());

console.log(parseInt(A) + parseInt(B) - parseInt(C));
console.log(parseInt(`${A}${B}`) - parseInt(C));
