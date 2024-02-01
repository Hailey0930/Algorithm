const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ");

let answer = 0;

arr.forEach((el) => {
  answer += +el;
});

if (answer > 0) {
  console.log("Right");
} else if (answer < 0) {
  console.log("Left");
} else {
  console.log("Stay");
}
