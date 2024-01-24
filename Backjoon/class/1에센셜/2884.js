const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = input.split(" ").map((el) => +el);

const [H, M] = arr;

if (M < 45) {
  if (H === 0) {
    console.log(H + 23, 60 - 45 + M);
  } else {
    console.log(H - 1, 60 - 45 + M);
  }
} else {
  console.log(H, M - 45);
}
