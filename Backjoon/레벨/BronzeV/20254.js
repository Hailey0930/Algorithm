const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [UR, TR, UO, TO] = input.split(" ").map((el) => +el);

console.log(56 * UR + 24 * TR + 14 * UO + 6 * TO);
