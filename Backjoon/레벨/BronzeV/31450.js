const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [M, K] = input.map(Number);

M % K === 0 ? console.log("Yes") : console.log("No");
