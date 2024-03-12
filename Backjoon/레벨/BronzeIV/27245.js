const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [w, l, h] = input.map((el) => +el.trim());

if (Math.min(w, l) / h >= 2 && Math.max(w, l) / Math.min(w, l) <= 2)
  console.log("good");
else console.log("bad");
