const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(`${"long ".repeat(+input / 4)}int`);
