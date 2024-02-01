const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [sleep, wake] = input.map((el) => +el);

if (sleep >= 20 && sleep <= 23) {
  console.log(24 - sleep + wake);
} else {
  console.log(wake - sleep);
}
