const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  console.log(Math.floor((parseInt(el[0]) * parseInt(el[1])) / 2));
});
