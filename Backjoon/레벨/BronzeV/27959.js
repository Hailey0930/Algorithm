const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, M] = input.split(" ").map((el) => +el);

N * 100 >= M ? console.log("Yes") : console.log("No");
