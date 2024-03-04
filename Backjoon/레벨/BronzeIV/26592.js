const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift());
const arr = input.map((el) => el.trim().split(" "));

for (let i = 0; i < n; i++) {
  const [a, b] = arr[i].map(Number);

  console.log(
    `The height of the triangle is ${((2 * a) / b).toFixed(2)} units`
  );
}
