const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const result = {
  ":": 0,
  _: 0,
  length: input.length,
};

input.forEach((el) => {
  if (el === ":") result[":"] += 1;
  else if (el === "_") result._ += 1;
});

console.log(result.length + result[":"] + result._ * 5);
