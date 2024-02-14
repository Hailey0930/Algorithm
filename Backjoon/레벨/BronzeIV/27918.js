const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();

const arr = input.map((el) => el.trim());

let D = 0;
let P = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] === "D") D += 1;
  else if (arr[i] === "P") P += 1;

  if (Math.abs(D - P) === 2) break;
}

console.log(`${D}:${P}`);
