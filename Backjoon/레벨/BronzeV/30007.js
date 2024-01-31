const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = input.shift();

const arr = input.map((el) => el.trim().split(" "));

for (let i = 1; i <= count; i++) {
  const [A, B, X] = arr[i - 1].map((el) => +el);

  console.log(A * (X - 1) + B);
}
