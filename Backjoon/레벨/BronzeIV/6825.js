const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input.map((el) => +el.trim());

const result = a / (b * b);

if (result > 25) console.log("Overweight");
else if (result >= 18.5 && result <= 25) console.log("Normal weight");
else console.log("Underweight");
