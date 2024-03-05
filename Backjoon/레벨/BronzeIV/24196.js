const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

let answer = "";
let index = 0;

while (index < input.length) {
  answer += input[index];
  const unicode = input[index].charCodeAt();
  index += unicode - 64;
}

console.log(answer);
