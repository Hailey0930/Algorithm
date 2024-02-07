const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

let answer = "Gnomes:\n";

arr.forEach((el) => {
  const result = el.map((item) => +item);

  const sortedUp = [...result].sort((a, b) => a - b);
  const sortedDown = [...result].sort((a, b) => b - a);

  const isArrayEqual = (a, b) => a.every((val, index) => val === b[index]);

  if (isArrayEqual(result, sortedUp) || isArrayEqual(result, sortedDown))
    answer += "Ordered\n";
  else answer += "Unordered\n";
});

console.log(answer.trim());
