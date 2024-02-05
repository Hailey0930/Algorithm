const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [a, b] = input.split(" ").map((el) => +el);

if (a - a * 0.01 * b >= 100) console.log(0);
else console.log(1);
