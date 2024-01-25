const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [end, ...arr] = input;

for (let i = 1; i <= parseInt(end); i++) {
  const [A, B] = arr[i - 1].split(" ").map((el) => +el);
  console.log(`Case #${i}: ${A + B}`);
}
