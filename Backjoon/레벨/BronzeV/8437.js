const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [sum, more] = input.map((el) => BigInt(el));

const natalia = (sum - more) / 2n;

console.log(`${natalia + more}\n${natalia}`);
