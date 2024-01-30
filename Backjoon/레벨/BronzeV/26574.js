const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.splice(1, input.length).map((el) => +el.trim());

arr.forEach((el) => {
  console.log(`${el} ${el}`);
});
