const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => +el.trim());

arr.forEach((el) => {
  for (let i = 1; i <= el; i++) {
    console.log("*".repeat(i));
  }
});
