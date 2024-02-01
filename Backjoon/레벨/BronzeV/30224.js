const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split("").map((el) => +el);

let withSeven = false;

arr.forEach((el) => {
  if (el === 7) withSeven = true;
});

if (!withSeven && parseInt(input) % 7 !== 0) {
  console.log(0);
} else if (!withSeven && parseInt(input) % 7 === 0) {
  console.log(1);
} else if (withSeven && parseInt(input) % 7 !== 0) {
  console.log(2);
} else console.log(3);
