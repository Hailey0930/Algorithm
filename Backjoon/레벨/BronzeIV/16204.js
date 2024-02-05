const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, M, K] = input.map((el) => +el);

console.log(Math.min(M, K) + Math.min(N - M, N - K));
