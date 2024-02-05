const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

input.forEach((el) => {
  console.log([...el].reverse().join(""));
});
