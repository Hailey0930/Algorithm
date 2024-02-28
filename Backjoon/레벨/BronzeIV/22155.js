const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  const [i, f] = el.map(Number);

  (i <= 2 && f <= 1) || (f <= 2 && i <= 1)
    ? console.log("Yes")
    : console.log("No");
});
