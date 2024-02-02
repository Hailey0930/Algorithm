const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(parseInt(input) * (parseInt(input) - 1));
