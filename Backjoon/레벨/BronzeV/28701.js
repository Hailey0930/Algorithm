const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let sum = 0;

for (let i = 1; i <= parseInt(input); i++) {
  sum += i;
}

let three = 0;

for (let i = 1; i <= parseInt(input); i++) {
  three += i ** 3;
}

console.log(sum);
console.log(BigInt(sum ** 2).toString());
console.log(BigInt(three).toString());
