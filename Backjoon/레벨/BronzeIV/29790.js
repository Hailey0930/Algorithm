const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, U, L] = input.map((el) => +el);

if (N >= 1000 && (U >= 8000 || L >= 260)) {
  console.log("Very Good");
} else if (N >= 1000) {
  console.log("Good");
} else console.log("Bad");
