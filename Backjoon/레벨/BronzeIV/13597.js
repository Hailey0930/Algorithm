const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [A, B] = input.map((el) => +el);

if (A === B) console.log(A);
else {
  A > B ? console.log(A) : console.log(B);
}
