const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a1, a2, a3] = input.map((el) => +el.trim());

const floor1 = a2 * 2 + a3 * 4;
const floor2 = a1 * 2 + a3 * 2;
const floor3 = a1 * 4 + a2 * 2;

console.log(Math.min(floor1, floor2, floor3));
