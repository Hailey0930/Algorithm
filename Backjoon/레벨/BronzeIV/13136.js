const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [R, C, N] = input.map((el) => +el);

const a = R % N !== 0 ? Math.floor(R / N) + 1 : R / N;
const b = C % N !== 0 ? Math.floor(C / N) + 1 : C / N;

console.log(a * b);
