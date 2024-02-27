const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input.shift();

const arr = input.map((el) => el.trim().split(" "));

for (let i = 0; i < parseInt(n); i++) {
  const [p, t] = arr[i].map(Number);
  const die = Math.floor(t / 7);
  const born = Math.floor(t / 4);

  console.log(p - die + born);
}
