const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log((parseInt(input) / 4).toFixed(2));
