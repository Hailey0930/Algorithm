const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split("");

let a = 0;
let b = 0;

arr.forEach((el, index) => {
  if (el === "A") a += parseInt(arr[index + 1]);
  else if (el === "B") b += parseInt(arr[index + 1]);
});

a > b ? console.log("A") : console.log("B");
