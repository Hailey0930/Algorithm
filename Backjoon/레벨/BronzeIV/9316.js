const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

for (let i = 1; i <= parseInt(input); i++) {
  console.log(`Hello World, Judge ${i}!`);
}
