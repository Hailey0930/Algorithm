const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [total, amount, ...arr] = input;

const bill = arr.map((el) => el.trim().split(" "));

let sum = 0;

for (let i = 0; i < amount; i++) {
  sum += parseInt(bill[i][0]) * parseInt(bill[i][1]);
}

if (BigInt(total) === BigInt(sum)) console.log("Yes");
else console.log("No");
