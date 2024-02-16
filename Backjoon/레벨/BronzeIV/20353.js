const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const r = Math.sqrt(parseInt(input));
console.log(4 * r);
