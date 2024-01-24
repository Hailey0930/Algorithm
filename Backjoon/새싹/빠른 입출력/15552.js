const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [T, ...arr] = input;

let answer = "";

for (let i = 0; i < arr.length; i++) {
  const result = arr[i].split(" ").map((el) => +el);
  answer += `${result[0] + result[1]}\n`;
}

console.log(answer);
