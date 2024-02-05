const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [month, day] = input.map((el) => +el);

if (month < 2) {
  console.log("Before");
} else if (month > 2) {
  console.log("After");
} else if (month === 2) {
  if (day < 18) console.log("Before");
  else if (day > 18) console.log("After");
  else if (day === 18) console.log("Special");
}
