const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [A, B] = input.split(" ").map((el) => +el);

console.log(B - A, B);
