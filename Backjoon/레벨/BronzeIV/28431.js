const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => +el.trim());

let result = {};

arr.forEach((el) => {
  if (!result[el]) result[el] = 0;

  result[el] += 1;
});

console.log(Object.keys(result).find((el) => result[el] % 2 !== 0));
