const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [slice, whole] = input.map((el) => el.trim());

const [a1, p1] = slice.split(" ").map((el) => +el);
const [r1, p2] = whole.split(" ").map((el) => +el);

a1 / p1 < (r1 ** 2 * Math.PI) / p2
  ? console.log("Whole pizza")
  : console.log("Slice of pizza");
