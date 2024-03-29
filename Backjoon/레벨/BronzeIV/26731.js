const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

let alphabet = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
  O: 0,
  P: 0,
  Q: 0,
  R: 0,
  S: 0,
  T: 0,
  U: 0,
  V: 0,
  W: 0,
  X: 0,
  Y: 0,
  Z: 0,
};

for (let i = 0; i < input.length; i++) {
  alphabet[input[i]]++;
}

console.log(
  Object.keys(alphabet)
    .filter((el) => alphabet[el] === 0)
    .join("")
);
