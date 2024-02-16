const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = input.shift();

const arr = input.map((el) => +el.trim());

let answer = "";
for (let i = 0; i < parseInt(count); i++) {
  const N = arr[i];

  answer += (N ** 2).toString() + "\n";
}

console.log(answer.trim());
