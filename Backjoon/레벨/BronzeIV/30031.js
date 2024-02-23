const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

let answer = 0;
arr.forEach((el) => {
  let count = 0;

  switch (+el[0]) {
    case 136:
      count = 1000;
      break;
    case 142:
      count = 5000;
      break;
    case 148:
      count = 10000;
      break;
    case 154:
      count = 50000;
      break;
  }

  answer += count;
});

console.log(answer);
