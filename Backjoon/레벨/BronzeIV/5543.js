const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [s, j, h, cola, sprite] = input.map((el) => +el);

const A = s + cola - 50;
const B = s + sprite - 50;
const C = j + cola - 50;
const D = j + sprite - 50;
const E = h + cola - 50;
const F = h + sprite - 50;

console.log(Math.min(A, B, C, D, E, F));
