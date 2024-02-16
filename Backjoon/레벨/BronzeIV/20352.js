const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const r = parseInt(input);

console.log((r / Math.PI) ** 0.5 * 2 * Math.PI);
