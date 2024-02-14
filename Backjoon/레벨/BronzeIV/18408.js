const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let result = {};

for (let i = 0; i < 3; i++) {
  if (!result[input[i]]) result[input[i]] = 0;

  result[input[i]] += 1;
}

const max = Math.max(...Object.values(result));

console.log(Object.keys(result).find((el) => result[el] === max));
