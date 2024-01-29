const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const number = BigInt(input).toString();

let carry = 0;

for (let i = 0; i < number.length; i++) {
  carry = carry * 10 + parseInt(number.charAt(i), 10);
  carry = carry % 20000303;
}

console.log(carry);
