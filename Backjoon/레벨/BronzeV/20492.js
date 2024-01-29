const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const money = parseInt(input);

console.log(money * 0.78, money * 0.8 + (money - money * 0.8) * 0.78);
