const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [S, T, D] = input.split(" ").map((el) => +el);

const hour = D / (S * 2);

console.log(T * hour);
