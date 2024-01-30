const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, S] = input.map((el) => +el);

console.log(R * 8 + S * 3 - 28);
