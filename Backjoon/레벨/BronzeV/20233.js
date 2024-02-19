const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, x, b, y, T] = input.map((el) => +el.trim());

const A = T - 30 > 0 ? (T - 30) * x * 21 + a : a;
const B = T - 45 > 0 ? (T - 45) * y * 21 + b : b;

console.log(A, B);
