const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.splice(0, input.length - 1).map((el) => +el.trim());

arr.forEach((el) => {
  let answer = 0;
  for (let i = 1; i <= el; i++) {
    answer += i;
  }

  console.log(answer);
});
