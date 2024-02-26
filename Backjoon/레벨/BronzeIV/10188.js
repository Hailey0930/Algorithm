const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = input.shift();

const arr = input.map((el) => el.trim().split(" "));

for (let i = 0; i < parseInt(count); i++) {
  const [a, b] = arr[i].map(Number);

  let answer = "";

  for (let j = 0; j < b; j++) {
    answer += "X".repeat(a) + "\n";
  }
  console.log(answer);
}
