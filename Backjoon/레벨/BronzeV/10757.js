const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [A, B] = input.split(" ");

console.log((BigInt(A) + BigInt(B)).toString());
