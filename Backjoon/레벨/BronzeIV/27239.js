const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(`${alphabet[(n - 1) % 8]}${Math.floor((n + 7) / 8)}`);
