const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = input.shift();

const arr = input.map((el) => el.trim());

for (let i = 0; i < count; i++) {
  const stringArr = arr[i].split("");

  let answer = 0;

  for (let j = 0; j < stringArr.length; j++) {
    if (stringArr[j] === "D") break;
    answer++;
  }

  console.log(answer);
}
