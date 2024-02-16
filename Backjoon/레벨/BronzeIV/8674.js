const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input.map((el) => +el);

a % 2 === 1 && b % 2 === 1 ? console.log(Math.min(a, b)) : console.log(0);
