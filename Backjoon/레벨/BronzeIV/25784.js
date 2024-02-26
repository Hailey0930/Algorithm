const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b, c] = input.map(Number);

if (a + b === c || b + c === a || a + c === b) console.log(1);
else if (a * b === c || b * c === a || a * c === b) console.log(2);
else console.log(3);
