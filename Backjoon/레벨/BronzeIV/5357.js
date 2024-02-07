const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

input.forEach((el) => {
  let answer = "";

  for (let i = 0; i < el.length; i++) {
    if (i === 0 || el[i] !== el[i - 1]) {
      answer += el[i];
    }
  }
  console.log(answer);
});
