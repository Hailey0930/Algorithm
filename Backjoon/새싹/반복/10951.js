const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const result = input[i].split(" ").map((el) => +el);
  console.log(result[0] + result[1]);
}
