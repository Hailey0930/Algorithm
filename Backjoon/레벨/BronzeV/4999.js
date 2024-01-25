const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input.map((el) => el.trim());

if (a.length >= b.length) console.log("go");
else console.log("no");
