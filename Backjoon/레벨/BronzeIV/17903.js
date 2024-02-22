const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [m, n] = input[0].split(" ").map((el) => +el.trim());

m >= 8 ? console.log("satisfactory") : console.log("unsatisfactory");
