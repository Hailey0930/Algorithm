const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => +el.trim());

arr.forEach((el) => {
  el % 2 === 0 ? console.log(`${el} is even`) : console.log(`${el} is odd`);
});
