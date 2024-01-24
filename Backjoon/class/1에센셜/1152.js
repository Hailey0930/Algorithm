const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 0;
const arr = input.split(" ");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== "") answer = arr.length;
  else answer = 0;
}

console.log(answer);
