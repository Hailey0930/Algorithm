const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input[0].split(" ").map((el) => +el.trim());

let sum = 0;
arr.forEach((el) => {
  sum += Math.pow(el, 3);
});

console.log(Math.cbrt(sum).toFixed(15));
