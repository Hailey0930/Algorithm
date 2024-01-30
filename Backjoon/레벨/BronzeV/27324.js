const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [a, b] = input.split("").map((el) => +el);

if (a === b) console.log(1);
else console.log(0);
