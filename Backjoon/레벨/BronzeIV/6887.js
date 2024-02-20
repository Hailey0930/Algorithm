const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(
  `The largest square has side length ${Math.floor(
    Math.sqrt(parseInt(input))
  )}.`
);
