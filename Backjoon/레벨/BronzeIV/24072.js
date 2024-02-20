const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B, C] = input.map(Number);

C >= A && C < B ? console.log(1) : console.log(0);
