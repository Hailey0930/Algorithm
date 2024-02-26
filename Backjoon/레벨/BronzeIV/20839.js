const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [x, y, z] = input.shift().split(" ").map(Number);
const [a, b, c] = input[0].split(" ").map((el) => +el.trim());

if (a >= x && b >= y && c >= z) console.log("A");
else if (a >= x / 2 && b >= y && c >= z) console.log("B");
else if (b >= y && c >= z) console.log("C");
else if (b >= y / 2 && c >= z) console.log("D");
else if (c >= z) console.log("E");
