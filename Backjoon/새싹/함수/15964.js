const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const result = input.split(" ").map((el) => +el);

console.log((result[0] + result[1]) * (result[0] - result[1]));
