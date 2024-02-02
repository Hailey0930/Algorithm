const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => +el);

const [K, N, M] = input;

if (K * N <= M) {
  console.log(0);
} else {
  console.log(K * N - M);
}
