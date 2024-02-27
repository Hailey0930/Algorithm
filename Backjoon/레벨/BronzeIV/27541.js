const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const stringArr = input[0].split("");

if (stringArr[stringArr.length - 1] === "G") {
  stringArr.pop();
} else {
  stringArr.push("G");
}

console.log(stringArr.join(""));
