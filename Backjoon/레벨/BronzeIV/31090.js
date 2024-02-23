const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => +el.trim());

arr.forEach((el) => {
  const number = el.toString().split("");

  const N = parseInt(number[2] + number[3]);

  (el + 1) % N === 0 ? console.log("Good") : console.log("Bye");
});
