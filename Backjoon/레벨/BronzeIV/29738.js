const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const arr = input.map((el) => +el.trim());

arr.forEach((el, index) => {
  let round = "Round 1";

  if (el <= 25) round = "World Finals";
  else if (el <= 1000) round = "Round 3";
  else if (el <= 4500) round = "Round 2";

  console.log(`Case #${index + 1}: ${round}`);
});
