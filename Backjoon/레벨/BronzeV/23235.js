const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.slice(0, input.length - 1);

for (let i = 1; i <= arr.length; i++) {
  console.log(`Case ${i}: Sorting... done!`);
}
