const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [real, article] = input;

const [L, P] = real.split(" ").map((el) => +el.trim());
const [a, b, c, d, e] = article.split(" ").map((el) => +el.trim());

const total = L * P;

console.log(a - total, b - total, c - total, d - total, e - total);
