const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split("");

let a = 0;
let b = 0;
arr.forEach((el) => {
  el === "A" ? a++ : b++;
});

console.log(`${a} : ${b}`);
