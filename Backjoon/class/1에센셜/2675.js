const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.slice(1).map((el) => el.trim());

arr.map((el) => {
  const result = el.split(" ");
  const repeat = result[0];

  let answer = "";

  for (let i = 0; i < result[1].length; i++) {
    answer += result[1][i].repeat(repeat);
  }

  console.log(answer);
});
