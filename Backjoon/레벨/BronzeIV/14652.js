const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, M, K] = input.split(" ").map((el) => +el);

console.log(Math.floor(K / M), K % M);
