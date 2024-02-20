const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let w = 0;
let b = 0;
let g = 0;

input.forEach((el) => {
  const arr = el.trim().split(" ");

  arr.forEach((item) => {
    if (item === "w") w++;
    else if (item === "b") b++;
    else if (item === "g") g++;
  });
});

const max = Math.max(w, b, g);

if (max === w) console.log("chunbae");
else if (max === b) console.log("nabi");
else if (max === g) console.log("yeongcheol");
