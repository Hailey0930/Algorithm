const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split("DKSH");

console.log(arr.length - 1);
