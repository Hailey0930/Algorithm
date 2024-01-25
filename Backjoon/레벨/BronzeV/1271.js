const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, m] = input.split(" ");

console.log((BigInt(n) / BigInt(m)).toString());
console.log((BigInt(n) % BigInt(m)).toString());
