const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = input.shift();

for (let i = 1; i <= count; i++) {
  console.log(`${i}. ${input[i - 1]}`);
}
