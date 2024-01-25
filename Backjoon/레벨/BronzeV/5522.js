const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input;

console.log((BigInt(A) + BigInt(B)).toString());
console.log((BigInt(A) - BigInt(B)).toString());
console.log((BigInt(A) * BigInt(B)).toString());
