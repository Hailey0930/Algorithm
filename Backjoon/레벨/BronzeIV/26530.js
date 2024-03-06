const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const arr = input.map((el) => el.trim());

let currentIndex = 0;

for (let i = 0; i < n; i++) {
  const count = parseInt(arr[currentIndex]);
  let answer = 0;

  for (let j = 1; j <= count; j++) {
    const [a, b, c] = arr[currentIndex + j].split(" ");
    answer += Number(b * c);
  }

  console.log(`$${answer.toFixed(2)}`);
  currentIndex += count + 1;
}
