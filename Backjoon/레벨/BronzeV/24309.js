const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b, c] = input;

const count = BigInt((BigInt(b) - BigInt(c)) / BigInt(a));

console.log(count.toString());
