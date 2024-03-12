const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [n, m] = input.map((el) => +el);

if (n >= 8) {
  console.log(n - 7);
} else {
  console.log(m + 7);
}
