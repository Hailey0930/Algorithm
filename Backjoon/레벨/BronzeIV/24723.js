const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let sum = 1;

for (let i = 1; i <= parseInt(input); i++) {
  sum *= 2;
}
console.log(sum);
