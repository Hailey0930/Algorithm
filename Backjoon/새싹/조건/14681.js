const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a > 0) {
  if (b > 0) console.log(1);
  else console.log(4);
}

if (a < 0) {
  if (b > 0) console.log(2);
  else console.log(3);
}
