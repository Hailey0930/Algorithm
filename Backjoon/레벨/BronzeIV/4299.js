const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [a, b] = input.split(" ").map((el) => +el);

const A = (a + b) / 2;
const B = a - A;

console.log(A >= 0 && B >= 0 && A % 1 === 0 ? `${A} ${B}` : -1);
