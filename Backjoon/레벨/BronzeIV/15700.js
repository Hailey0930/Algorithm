const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, M] = input.map(BigInt);

console.log(((N * M) / 2n).toString());
