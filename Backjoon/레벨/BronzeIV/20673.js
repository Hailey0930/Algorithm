const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [p, q] = input.map((el) => +el.trim());

if (p <= 50 && q <= 10) console.log("White");
else if (q > 30) console.log("Red");
else console.log("Yellow");
