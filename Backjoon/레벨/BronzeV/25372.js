const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.splice(1).map((el) => el.trim());

for (let i = 0; i < arr.length; i++) {
  arr[i].length >= 6 && arr[i].length <= 9
    ? console.log("yes")
    : console.log("no");
}
