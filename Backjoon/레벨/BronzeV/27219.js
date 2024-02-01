const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(
  `${"V".repeat(Math.floor(parseInt(input) / 5))}${"I".repeat(
    parseInt(input) % 5
  )}`
);
