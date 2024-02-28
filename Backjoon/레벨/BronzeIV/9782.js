const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ").map((el) => +el.trim());

  const n = arr.shift();

  let answer = 0;

  if (n % 2 !== 0) {
    answer = arr[Math.floor(n / 2)];
  } else {
    answer = (arr[n / 2 - 1] + arr[n / 2]) / 2;
  }

  console.log(`Case ${i + 1}: ${answer.toFixed(1)}`);
}
