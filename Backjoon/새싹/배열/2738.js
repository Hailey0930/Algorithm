const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [first, ...arr] = input;
const N = parseInt(first.split(" ")[0]);
const M = parseInt(first.split(" ")[1]);

let answerArray = new Array(N).fill().map(() => new Array(M).fill(0));

const NArr = arr.splice(0, N).map((el) => [...el.split(" ").map((el) => +el)]);
const MArr = arr.map((el) => [...el.split(" ").map((el) => +el)]);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    answerArray[i][j] = NArr[i][j] + MArr[i][j];
  }
}

for (let i = 0; i < answerArray.length; i++) {
  console.log(...answerArray[i]);
}
