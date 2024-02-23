const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el.trim());

const arr = input.map((el) => el.trim().split(""));

let answer = 0;

arr.forEach((el) => {
  let O = 0;
  let X = 0;

  for (let i = 0; i < M; i++) {
    if (el[i] === "O") O++;
    else if (el[i] === "X") X++;
  }

  if (O > X) answer++;
});

console.log(answer);
