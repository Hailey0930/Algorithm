const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [n, h, v] = input.map((el) => +el.trim());

const height = Math.max(h, n - h);
const vertical = Math.max(v, n - v);

console.log(height * vertical * 4);
