const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" ").map(Number));

arr.forEach((el) => {
  let [a, b, c] = el;

  for (let i = 0; i < c; i++) {
    if (a > b) {
      a = Math.floor(a / 2);
    } else {
      b = Math.floor(b / 2);
    }
  }

  console.log(`Data set: ${el.join(" ")}`);
  console.log(`${Math.max(a, b)} ${Math.min(a, b)}\n`);
});
