const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const arr = input.map((el) => +el).sort((a, b) => b - a);

console.log(arr[0] + arr[1]);
