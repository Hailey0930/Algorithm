const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [S, M, L] = input.map((el) => +el.trim());

1 * S + 2 * M + 3 * L >= 10 ? console.log("happy") : console.log("sad");
