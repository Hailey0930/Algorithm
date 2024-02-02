const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  console.log(parseInt(el[0]) + parseInt(el[1]));
});
