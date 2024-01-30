const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input;
const sum = BigInt(a) + BigInt(b);
console.log(sum.toString());
