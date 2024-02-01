const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [R1, S] = input.split(" ").map((el) => +el);

console.log(2 * S - R1);
