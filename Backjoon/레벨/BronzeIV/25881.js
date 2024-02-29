const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input
  .shift()
  .split(" ")
  .map((el) => +el.trim());
const n = parseInt(input.shift());
const arr = input.map(Number);

for (let i = 0; i < n; i++) {
  let cost = 0;
  if (arr[i] > 1000) {
    cost = 1000 * a + (arr[i] - 1000) * b;
  } else {
    cost = arr[i] * a;
  }

  console.log(`${arr[i]} ${cost}`);
}
