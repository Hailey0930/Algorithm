const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const arr = input.map((el) => +el);

while (arr[arr.length - 1] === 0) {
  arr.pop();
}

let count = 0;
arr.forEach((el) => {
  if (el === 0) count++;
});

console.log(count);
