const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b, c, d] = input.map(Number);

if (a * b > c * d) console.log("M");
else if (a * b < c * d) console.log("P");
else console.log("E");
