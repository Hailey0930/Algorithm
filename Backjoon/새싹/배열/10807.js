const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
const [N, arr, v] = input;

arr.split(" ").map((el) => {
  +el === +v && (answer += 1);
});

console.log(answer);
