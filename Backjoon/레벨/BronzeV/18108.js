const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input;

console.log(parseInt(A) + parseInt(B));
