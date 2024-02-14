const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const arr = input.map((el) => +el);

const max = Math.max(arr[0], arr[1]);

if (arr[0] !== arr[1]) {
  console.log(`Odd ${max * 2}`);
} else if (arr[0] === 0 && arr[1] === 0) {
  console.log("Not a moose");
} else console.log(`Even ${arr[0] * 2}`);
