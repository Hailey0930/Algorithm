const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = parseInt(input);

console.log(((100 - number) / number + 1).toFixed(10));
console.log((number / (100 - number) + 1).toFixed(10));
