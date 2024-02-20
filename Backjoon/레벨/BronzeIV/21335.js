const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);
const r = (n / Math.PI) ** 0.5;

console.log((2 * r * Math.PI).toFixed(9));
