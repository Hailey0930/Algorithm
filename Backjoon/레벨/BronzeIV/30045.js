const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const arr = input.map((el) => el.trim());

let count = 0;

for (let i = 0; i < n; i++) {
  if (arr[i].includes("01") || arr[i].includes("OI")) count++;
}

console.log(count);
