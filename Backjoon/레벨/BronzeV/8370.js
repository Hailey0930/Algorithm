const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n1, k1, n2, k2] = input.split(" ").map((el) => +el);

console.log(n1 * k1 + n2 * k2);
