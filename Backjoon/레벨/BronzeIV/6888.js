const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [X, Y] = input.map((el) => +el.trim());

const count = 4 * 3 * 5;

for (let i = X; i <= Y; i += count) {
  console.log(`All positions change in year ${i}`);
}
