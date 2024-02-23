const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((el) => el.trim().split(" "));

arr.forEach((el) => {
  const [x, y] = el.map(Number);

  if (x > 0 && y > 0) console.log("Q1");
  else if (x < 0 && y > 0) console.log("Q2");
  else if (x < 0 && y < 0) console.log("Q3");
  else if (x > 0 && y < 0) console.log("Q4");
  else if (x === 0 || y === 0) console.log("AXIS");
});
