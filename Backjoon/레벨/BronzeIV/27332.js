const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input.map((el) => +el.trim());

B * 7 + A > 30 ? console.log(0) : console.log(1);
