const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [w, h] = input.map((el) => +el);

const diagonal = Math.sqrt(w ** 2 + h ** 2);
const rectangle = w + h;

console.log(
  (Math.max(diagonal, rectangle) - Math.min(diagonal, rectangle)).toFixed(9)
);
