const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = 0;
input.forEach((el) => {
  const element = el.trim();
  element === "W" && count++;
});

if (count === 5 || count === 6) console.log(1);
else if (count === 3 || count === 4) console.log(2);
else if (count === 1 || count === 2) console.log(3);
else console.log(-1);
