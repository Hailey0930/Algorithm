const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const first = input.shift();
const last = input.pop();

const notBlank = input.filter((el) => el === " ");

if (first === '"' && last === '"' && notBlank.length !== input.length) {
  console.log(input.join(""));
} else console.log("CE");
