const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input.map((el) => +el);

if (A < B) console.log(-1);
else if (A === B) console.log(0);
else console.log(1);
