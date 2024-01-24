const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];
const [first, arr] = input;

const X = first.split(" ")[1];

arr.split(" ").map((el) => {
  +el < X && answer.push(+el);
});

console.log(...answer);
