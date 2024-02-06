const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, M] = input;

const max = Math.min(Math.floor(N / 2), Math.floor(M / 2));

console.log(max);
