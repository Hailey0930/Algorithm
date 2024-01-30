const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split(" ").map((el) => +el);

console.log(((arr[0] * arr[1]) / 2).toFixed(1));
