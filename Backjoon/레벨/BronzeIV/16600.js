const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const length = Math.sqrt(parseInt(input));

console.log((length * 4).toFixed(8));
