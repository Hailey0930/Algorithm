const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());

const arr = input.map((el) => el.trim().split(" "));

for (let i = 0; i < n; i++) {
  const [string, a, b] = arr[i];
  const subString = string.substring(parseInt(a), parseInt(b));
  const stringArr = string.split(subString);
  console.log(stringArr.join(""));
}
