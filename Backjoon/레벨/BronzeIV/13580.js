const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B, C] = input.map((el) => +el.trim());

if (A === B || B === C || A === C) console.log("S");
else if (A + B === C || B + C === A || A + C === B) console.log("S");
else console.log("N");
