const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  console.log(Math.floor(+el[1] / (+el[0] + 1)));
});
