const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [people, circle] = input;
const peopleArr = people.split(" ").map((el) => +el.trim());
const [x, y, r] = circle.split(" ").map((el) => +el.trim());

let answer = 0;

peopleArr.forEach((el, index) => {
  if (el === x) answer = index + 1;
});

console.log(answer);
