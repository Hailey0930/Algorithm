const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [a, b, c, d, e] = input.map((el) => +el.trim());

if (a < 40) a = 40;
if (b < 40) b = 40;
if (c < 40) c = 40;
if (d < 40) d = 40;
if (e < 40) e = 40;

console.log((a + b + c + d + e) / 5);
