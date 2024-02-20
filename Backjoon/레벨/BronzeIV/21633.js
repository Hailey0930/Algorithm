const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const k = parseInt(input);

let answer = 100;

if (25 + k * 0.01 < answer) answer = 100;
else if (25 + k * 0.01 > 2000) answer = 2000;
else answer = 25 + k * 0.01;

console.log(answer.toFixed(2));
