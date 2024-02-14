const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [x, y] = input.map((el) => +el);

x > y ? console.log(x + y) : console.log(y - x);
