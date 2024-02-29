const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const arr = input.map((el) => el.trim().split(" "));

for (let i = 0; i < n * 2; i += 2) {
  const [a1, p1] = arr[i];
  const [r1, p2] = arr[i + 1];

  const slice = a1 / p1;
  const whole = (Math.PI * r1 ** 2) / p2;

  slice < whole ? console.log("Whole pizza") : console.log("Slice of pizza");
}
