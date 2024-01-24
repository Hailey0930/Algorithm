const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  const data = input[i].split(" ").map((el) => +el);
  console.log(data[0] + data[1]);
}
