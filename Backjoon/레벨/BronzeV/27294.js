const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [T, S] = input.split(" ").map((el) => +el);

if (S === 1 || T <= 11 || T > 16) {
  console.log(280);
} else if (12 <= T <= 16 && S === 0) {
  console.log(320);
}
