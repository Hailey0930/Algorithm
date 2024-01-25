const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let number = +input;
let count = 0;

while (true) {
  if (number % 5 === 0) {
    console.log(number / 5 + count);
    break;
  }

  if (0 > number) {
    console.log(-1);
    break;
  }

  count++;
  number -= 3;
}
