const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [x, N] = input.map((el) => +el);

let answer = x;

for (let i = 1; i <= N; i++) {
  if (answer % 2 === 0) {
    answer = Math.floor(answer / 2) ^ 6;
  } else {
    answer = (2 * answer) ^ 6;
  }
}

console.log(answer);
