const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const arr = input.map((el) => el.trim().split(" "));

let minY = 1001;
let answer = [];

for (let i = 0; i < n; i++) {
  const [x, y] = arr[i].map(Number);

  if (y < minY) {
    minY = y;
    answer = [x, y];
  }
}

console.log(answer.join(" "));
