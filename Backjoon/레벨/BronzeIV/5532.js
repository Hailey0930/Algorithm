const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [L, A, B, C, D] = input.map((el) => +el);

while (true) {
  L--;
  A -= C;
  B -= D;

  if (A <= 0 && B <= 0) break;
}

console.log(L);

// const [L, A, B, C, D] = input.map((el) => +el);

// const math = B / D;
// const korean = A / C;

// console.log(L - Math.ceil(Math.max(math, korean)));
