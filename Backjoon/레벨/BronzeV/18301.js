const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n1, n2, n12] = input.split(" ").map((el) => +el);

const answer = ((n1 + 1) * (n2 + 1)) / (n12 + 1) - 1;

console.log(Math.floor(answer));
