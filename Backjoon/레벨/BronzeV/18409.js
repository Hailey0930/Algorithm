const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const string = input[1].trim().split("");

let count = 0;

string.forEach((el) => {
  if (el === "a" || el === "i" || el === "u" || el === "e" || el === "o")
    count += 1;
});

console.log(count);
