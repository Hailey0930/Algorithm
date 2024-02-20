const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [X, Y, Z] = input.map((el) => +el.trim());

X * 60 + Y * 60 <= Z * 60 + 30 ? console.log(1) : console.log(0);
