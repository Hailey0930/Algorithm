const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [S, i] = input;

console.log(S[i - 1]);
