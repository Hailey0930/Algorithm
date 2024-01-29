const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [count, A, B] = input;

const product = BigInt(A) * BigInt(B);

console.log(product.toString());
