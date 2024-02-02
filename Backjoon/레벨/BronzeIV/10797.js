const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [day, car] = input;
const carArr = car.split(" ").map((el) => +el.trim());

let answer = 0;

carArr.forEach((el) => {
  if (el === parseInt(day)) answer += 1;
});
console.log(answer);
