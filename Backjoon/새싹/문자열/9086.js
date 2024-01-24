const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0];

for (let i = 1; i <= T; i++) {
  const arr = input[i].trim();

  if (arr.length < 1) console.log(`${arr}${arr}`);
  else console.log(`${arr[0]}${arr[arr.length - 1]}`);
}
