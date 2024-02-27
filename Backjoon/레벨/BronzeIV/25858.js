const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, d] = input
  .shift()
  .split(" ")
  .map((el) => +el.trim());
const arr = input.map((el) => +el.trim());

let total = 0;

for (let i = 0; i < n; i++) {
  total += arr[i];
}

const oneMoney = d / total;

arr.forEach((el) => {
  console.log(el * oneMoney);
});
