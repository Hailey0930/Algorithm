const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split(" ");

let answer = "S";

arr.forEach((el) => {
  if (el === "9") answer = "F";
});

console.log(answer);
