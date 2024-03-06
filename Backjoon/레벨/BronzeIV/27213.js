const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [m, n] = input.map((el) => +el.trim());

if (m <= 2 || n <= 2) {
  console.log(n * m);
} else console.log(2 * m + 2 * (n - 2));
