const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [lv, word] = input;

let score = 0;

switch (word) {
  case "miss":
    score = 0;
    break;
  case "bad":
    score = lv * 200;
    break;
  case "cool":
    score = lv * 400;
    break;
  case "great":
    score = lv * 600;
    break;
  case "perfect":
    score = lv * 1000;
    break;
}

console.log(score);
