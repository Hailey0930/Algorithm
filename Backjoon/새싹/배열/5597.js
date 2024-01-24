const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const result = input.map((el) => +el);

for (let i = 1; i < 31; i++) {
  if (result.includes(i)) continue;
  console.log(i);
}
