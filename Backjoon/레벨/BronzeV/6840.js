const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const sortedArr = input.map((el) => +el).sort((a, b) => a - b);

console.log(sortedArr[1]);
