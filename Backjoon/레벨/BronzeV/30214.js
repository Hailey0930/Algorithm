const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [s1, s2] = input.split(" ").map((el) => +el);

s2 / 2 <= s1 ? console.log("E") : console.log("H");
