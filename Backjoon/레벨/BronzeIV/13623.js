const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B, C] = input.map((el) => +el);

if (A === B && B !== C && A !== C) console.log("C");
else if (A === C && B !== C && A !== B) console.log("B");
else if (B === C && A !== C && A !== B) console.log("A");
else console.log("*");
