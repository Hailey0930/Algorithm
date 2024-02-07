const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

const arr = input.map((el) => +el);

arr.forEach((el) => {
  console.log((1 + el + el ** 2 + el ** 3 + el ** 4).toFixed(2));
});
